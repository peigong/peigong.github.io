(function(){
    /**
     * 函数绑定。
     */
    Function.prototype.bind = function(o){
        var method = this;  
        return function() {  
            return method.apply(o, arguments);  
        };  
    };

    /**
     * merge(des, origin)：以des做基础，将origin的属性拷进来。
     * des：要合并进到的对象
     * origin：新加的对象
     */
    function merge(des, origin){
        for(var key in origin){
            if(typeof des[key] == "object" && typeof origin[key] == "object"){
                des[key] = arguments.callee(origin[key], origin[key]);
            }else{
                des[key] = origin[key];
            }
        }
        return des;
    }     
    var EStockEvents = {"StocksChange" : "stocks_change", "StockChange" : "stock_change"};
    
    function EStock(){
        this.stocks = {};
        this.total = {};
        this.totalKeys = [];
        this.handlers = {};
    };
    EStock.prototype = {
        setStocks : function(stocks){
            var symbols = []
            for(symbol in stocks){
                symbols.push(symbol);
                this.stocks[symbol] = stocks[symbol];
            }
            this.dispatchEvent(EStockEvents.StocksChange, [symbols]);
        },
        
        setTotalKeys : function(keys){
            for(var i = 0; i < keys.length; i++){
                this.totalKeys.push(keys[i]);
            }
        },
        
        updateStockMarket : function(symbol, stock){
            merge(this.stocks[symbol], stock);
            this.updateStockData(symbol);
            this.dispatchEvent(EStockEvents.StockChange, [symbol]);
        },
        
        updateStockFundamental : function(symbol, flag, currcapital, totalcapital, profit_four, mgjzc){
            var _data = this.stocks[symbol],
                _price = ((_data.now * 1) || _data.preClose);
            //判断流通股本
            if(flag == 1){
                var currcapital = window.currcapital;
            }                
            if(flag == 2){
                var currcapital = curracapital;
            }
            if(flag == 3){
                var currcapital = currbcapital;
            }
            if(currcapital * 1){
                _data.turnover = _data.volume / currcapital / 10000 * 100;
            }
            _data.totalShare = _price * totalcapital * 10000;
            _data.cvs = _price * currcapital * 10000;
            if(profit_four > 0){
                _data.pe = _data.totalShare / profit_four / 100000000;
            }else{
                _data.pe = '--';
            }
            /*
            if(mrq_mgsy > 0){
                _data.pe_mrq = (_price / mrq_mgsy).toFixed(2);
            }else{
                _data.pe_mrq = '--';
            }
            */
            if(mgjzc > 0){
                _data.pb = _price / mgjzc;
            }else{
                _data.pb = '--';
            }            
            merge(this.stocks[symbol], _data);
            this.updateStockData(symbol);
            this.dispatchEvent(EStockEvents.StockChange, [symbol]);
        },
        
        updateStockData : function(symbol){
            var stock = this.stocks[symbol];
            if ("xj000001" == symbol) {
                stock["totalcost"] = stock["totalvalue"] = stock["now"] = stock["cost"];
                stock["profit"] = stock["yield"] = stock["pricecut"] = 0;
            }else{
                stock["totalcost"] = (stock["quantity"] * 1) * (stock["cost"] * 1);
                stock["totalvalue"] = (stock["quantity"] * 1) * (stock["now"] * 1); 
                stock["profit"] = (stock["quantity"] * 1) * (stock["now"] * 1) - (stock["quantity"] * 1) * (stock["cost"] * 1);
                stock["yield"] = ((stock["now"] * 1) - (stock["cost"] * 1)) / (stock["cost"] * 1);
                stock["pricecut"] = ((stock["now"] * 1) - (stock["floor"] * 1)) / (stock["now"] * 1);
            }
            this.stocks[symbol] = stock;
            this.updateStockTotal();
        },
        
        updateStockTotal : function(){
            var keys = this.totalKeys;
            for(var i = 0; i < keys.length; i++){this.total[keys[i]] = 0;}
            for(symbol in this.stocks){
                var stock = this.stocks[symbol];
                for(var i = 0; i < keys.length; i++){
                    var val = stock[keys[i]] * 1;
                    if(!isNaN(val) && (Math.abs(val) != Infinity)){this.total[keys[i]] += val;}                    
                }
            }
            if(!isNaN(this.total["totalcost"]) && !isNaN(this.total["profit"])){
                this.total["yield"] = (this.total["profit"] * 1) / (this.total["totalcost"] * 1);
            }
        },
        
        addEventListener : function(e, fn){
            if(!this.handlers.hasOwnProperty(e)){
                this.handlers[e] = [];
            }
            this.handlers[e].push(fn);
        },
        
        removeEventListener : function(e){
            this.handlers[e] = [];
        },
        
        dispatchEvent : function(e, parameters){
            var arr_func = this.handlers[e];
            if(arr_func){
                for(var i = 0; i < arr_func.length; i++){
                    arr_func[i].apply(this, parameters);
                }
            }
        }
    };
    
    var EStockTables = {},
        /**
         * cfg:1=使用百分比，加百分号
         */
        EStockTableTitles = [
            { "key" : "symbol", "name" : "代码", "title" : "证券代码", "isSort" : true, "align" : "center" },
            { "key" : "name", "name" : "名称", "title" : "证券名称", "isSort" : false, "align" : "center" },
            { "key" : "floor", "name" : "低点", "title" : "5年内最低的价格", "isSort" : true, digit: 2 },
            { "key" : "quantity", "name" : "数量", "title" : "拥股数量", "isSort" : true },
            { "key" : "cost", "name" : "成本", "title" : "盈亏成本", "isSort" : true, digit: 2 },
            { "key" : "totalcost", "name" : "总成本", "title" : "当前持有证券的总成本", "useTotal" : true, "isSort" : true, digit: 2 },
            { "key" : "now", "name" : "价格", "title" : "当前价格", "isSort" : true, digit: 2 },
            { "key" : "totalvalue", "name" : "总市值", "title" : "当前持有证券的总市值", "useTotal" : true, "isSort" : true, digit: 2 },
            { "key" : "profit", "name" : "盈亏额", "title" : "盈亏额", "useTotal" : true, "isSort" : true, digit: 2 },
            { "key" : "yield", "name" : "盈亏率", "title" : "盈亏率", "cfg" : 1, "isSort" : true, digit: 2 },
            { "key" : "pe", "name" : "市盈率", "title" : "市盈率", "isSort" : true, digit: 2 },
            { "key" : "pb", "name" : "市净率", "title" : "市净率", "isSort" : true, digit: 2 },
            { "key" : "pricecut", "name" : "降价空间", "title" : "降价空间", "cfg" : 1, "isSort" : true, digit: 2 }
            //,{ "key" : "rank", "name" : "Rank", "title" : "综合指标", "isSort" : true, digit: 2 }
        ];
    function EStockTable(id){
        if(EStockTables.hasOwnProperty(id)){
            alert("error:repeat id  in EStockTables!");
        }else{
            EStockTables[id] = this;
        }
        this.eStock = null;
        this.id = id;
        this.table = null;
        this.rows = {};
        this.lineTotal = {};
        this.states = {"draw" : "down", "down": "up", "up": "draw"};
        this.sortIndex = -1;
        this.sortElement = null;
        this.sortLabels = [];
        this.titles = EStockTableTitles;
        this.container = document.getElementById(id);
        this.initialize();
    };
    EStockTable.prototype = {
        initialize : function(){
            var titles = this.titles;
            var table = document.createElement("table");
            this.table = table;
            table.cellPadding = 0;
            table.cellSpacing = 0;
            table.border = 0;
            table.className = "dataTable";
            var lineTitle = table.createTHead().insertRow(0);
            for (var i = 0; i < titles.length; i++) {
                var title = lineTitle.insertCell(i);
                title.className = "cell";
                title.style.textAlign = "center";
                var label = document.createElement("label");
				label.className = "label";
                label.innerHTML = titles[i].name;
				label.index = i;
				label.stockList = this;
				label.state = "draw";
				label.title = titles[i]["title"];
				label.oTitle = titles[i];
				label.onclick = this.sortTabelByElement;
                title.appendChild(label);
				if (titles[i]["isSort"]) {
					var icon = document.createElement("label");
					icon.className = "draw";
					title.appendChild(icon);
					label.icon = icon;
					this.sortLabels[i] = label;
				}
            }
			var lineTotal = table.createTFoot().insertRow(0);
			for (var i = 0; i < titles.length; i++) {
				var cellTotal = lineTotal.insertCell(i);
				this.lineTotal[titles[i]["key"]] = cellTotal;
				cellTotal.innerHTML = "&nbsp;";
                if(titles[i].align){
                    cellTotal.style.textAlign = titles[i].align;
                }else{
                    cellTotal.style.textAlign = "right";
                }
			}
			this.lineTotal["name"].innerHTML = "合计:";
            this.container.appendChild(table);
        },
        sortTabelByElement : function(){
            var title = this.oTitle;
            if (!title["isSort"]) {
                return;
            }
            var stockList = this.stockList;
            var index = this.index;
            this.state = stockList.states[this.state];
            var table = stockList.table;
            if (stockList.sortIndex != -1 && stockList.sortIndex != index) {
                stockList.sortLabels[stockList.sortIndex].state = "draw";
                stockList.sortLabels[stockList.sortIndex].icon.className = "draw";
            }
            this.icon.className = this.state;
            stockList.sortElement = this;
            stockList.sotrTableAuto();
        },
        sotrTableAuto : function(){
            if (this.sortElement) {
                var element = this.sortElement,
                    title = element.oTitle,
                    table = this.table,
                    index = element.index,
                    lastIndex = this.sortIndex,
                    sortStocks = [],
                    stocks = this.eStock.stocks;
                
                var idx = 0;
                for(symbol in stocks){
                    var row = this.rows[symbol]["dataRow"],
                        value = stocks[symbol][title.key];
                    if (value == undefined || value == "--") {
                        value = -Infinity;
                    }else {
                        if (parseFloat(value) == value * 1) {
                            value = parseFloat(value);
                        }
                    }
                    sortStocks.push([idx, value, row]);
                    idx++;
                }
                switch (element.state) {
                    case "down":
                        sortStocks.sort(this.sortTableRowsDown);
                        break;
                    case "up":
                        sortStocks.sort(this.sortTableRowsUp);
                        break;
                    case "draw":
                        this.sortElement = null;
                        break;
                }
                for (var i = 0; i < sortStocks.length; i++) {
                    if (sortStocks[i][2].rowIndex != parseInt(i) + 1) {
                        this.table.body.insertBefore(sortStocks[i][2], this.table.body.rows[parseInt(i)]);
                    }
                    sortStocks[i][2].cells[index].style.backgroundColor = "#F4F4F4";
                    if ((lastIndex != -1) || ("draw" == element.state)) {
                        sortStocks[i][2].cells[lastIndex].style.backgroundColor = "";
                    }
                }
                this.sortIndex = index;
            }else{
            }
        },
        sortTableRowsDown : function(a, b){
            if (parseFloat(a[1]) == a[1] * 1 && parseFloat(b[1]) == b[1] * 1) {
                va = parseFloat(a[1]);
                vb = parseFloat(b[1]);
            } else {
                va = a[1];
                vb = b[1];
            }
            if (va < vb) { return 1; }
            if (va == vb) { return 0; }
            if (va > vb) { return -1; }
        },        
        sortTableRowsUp : function(a, b){
            if (parseFloat(a[1]) == a[1] * 1 && parseFloat(b[1]) == b[1] * 1) {
                va = parseFloat(a[1]);
                vb = parseFloat(b[1]);
            } else {
                va = a[1];
                vb = b[1];
            }
            if (va < vb) { return -1; }
            if (va == vb) { return 0; }
            if (va > vb) { return 1; }
        },        
        setTitles : function(titles){
            this.titles = titles;
        },
        setEStock : function(eStock){
            if(this.eStock){
                alert("error:repeat eStock!");
            }else{
                this.eStock = eStock;
            }
            var keys = [];
            for(var i = 0; i < this.titles.length; i++){
                var title = this.titles[i];
                if(title["useTotal"]){
                    keys.push(title["key"]);
                }
            }
            this.eStock.setTotalKeys(keys);
            this.eStock.addEventListener(EStockEvents.StocksChange, this.createDataRows.bind(this));
            this.eStock.addEventListener(EStockEvents.StockChange, this.updateDataRow.bind(this));
        },
        fillCell : function(cell, val, title){
            var digit = title.digit,
                cfg = title.cfg;
            if(val != "--" && !isNaN(val)){
                if(cfg & 1){ val *= 100; }
                if(val && digit){
                    val *= 1;
                    val = val.toFixed(digit);
                }
                if(Infinity == val){
                    val = "--";
                }else if(cfg & 1){
                  val += "%"; 
                }
            }
            cell.innerHTML = val || "--";
        },
        createDataRows : function(symbols){
			var table = this.table;
			var titles = this.titles;
			if (!table.body){
				var tableBody = document.createElement("tbody");
				table.appendChild(tableBody);
				table.body = tableBody;
			}
			var body = table.body;
			for(var i = 0; i < symbols.length; i++){
			    symbol = symbols[i];
			    var stock = this.eStock.stocks[symbol];
			    if(stock){
                    var row = body.insertRow(this.table.body.rows.length);
                    row.className = "row";
                    this.rows[symbol] = { "dataRow" : row };
                    for (var j = 0; j < titles.length; j++) {
                        var cell = row.insertCell(j),
                            key = titles[j].key;
                        this.rows[symbol][key] = cell;
                        cell.className = "cell";
                        if(titles[j].align){
                            cell.style.textAlign = titles[j].align;
                        }else{
                            cell.style.textAlign = "right";
                        }
                        this.fillCell(cell, stock[key], titles[j]);
                    }
			    }
			}
			this.updateTotalRow();
        },
        updateDataRow : function(symbol){
            var stock = this.eStock.stocks[symbol];
			var titles = this.titles;
            if(stock){
                for (var j = 0; j < titles.length; j++) {
                    var key = titles[j].key,
                        cell = this.rows[symbol][key];
                    this.fillCell(cell, stock[key], titles[j]);
                }
            }
            this.updateTotalRow();
        },
        getTitleByKey : function(key){
            var title = {};
            for(var i = 0; i < this.titles.length; i++){
                if(this.titles[i].key == key){ title = this.titles[i];}
            }
            return title;
        },
        updateTotalRow : function(){
            for(key in this.eStock.total){
                if(this.lineTotal[key]){
                    this.fillCell(this.lineTotal[key], this.eStock.total[key], this.getTitleByKey(key));
                }
            }
        }
    };
    EStockTable.getInstance = function(id){
        var instance = null;
        if(EStockTables.hasOwnProperty(id)){
            instance = EStockTables[id];
        }else{
            instance = new EStockTable(id);
        }
        return instance;
    }
    
    window.EStock = EStock;
    window.EStockEvents = EStockEvents;
    window.EStockTable = EStockTable;
})();

