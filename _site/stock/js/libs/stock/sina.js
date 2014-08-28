/**
 * 新浪网站上的JS函数库。
 */

/**
 * 函数getScript、merge、hqParser。
 * hqParser只保留A股行情字符串转换函数。
 * 定义在http://finance.sina.com.cn/basejs/tool.js文件中。
 */ 
 
/*代替$.getScript*/
function getScript(argUrl,argCallback,argCharset)
{
    var _script = document.createElement('script');
    _script.type = 'text/javascript';
    if(argCharset)
    {
        _script.charset = argCharset;
    }
    _script.src = argUrl;
    var _head = document.getElementsByTagName('head')[0];
    var _done = false;
    _script.onload = _script.onreadystatechange = function ()
    {
        if(!_done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"))
        {
            _done = true;
            if(argCallback)
            {
                argCallback();
            }
            _script.onload = _script.onreadystatechange = null;
            setTimeout(function ()
            {
                _head.removeChild(_script);
            },1);
        }
    };
    _head.appendChild(_script);
}
/*argDestination：要合并进到的对象*/
/*argOrigin：新加的对象*/
/*merge(a,b)：以a做基础，将b的属性拷进来*/
function merge(argDestination,argOrigin)
{
    for(var p in argOrigin)
    {
        if(typeof argDestination[p] == 'object' && typeof argOrigin[p] == 'object')
        {
            argDestination[p] = arguments.callee(argOrigin[p],argDestination[p]);
        }
        else
        {
            argDestination[p] = argOrigin[p];
        }
    }
    return argDestination;
} 

/*行情字符串转换
  用法：
  hqParser(type,字符串,代码(非必要，不传的时候symbol属性为undefined，传入时完整代码、数字的都可以))
  或者
  hqParser.a(字符串，代码);
  hqParser.hk(字符串，代码);

  返回值(仅容易乱的，其余可以从代码看出来)：
  symbol：完整代码
  sym：仅数字代码，A股相当于symbol而言去掉了sh、sz
  change：涨跌额
  changeP：涨跌幅
  amount：成交额
  income：收益率
  swing：振幅
*/
var hqParser = new function ()
{
    function _a(argStr,argSymbol)
    {
        if(!argStr)
        {
            var _return = {};
            _return.enName = _return.name = _return.open = _return.preClose = _return.low = _return.high = _return.now = _return.change = _return.changeP = _return.buy = _return.sell = _return.volume = _return.amount = _return.pe = _return.income = _return.high52 = _return.low52 = _return.low52 = _return.date = _return.time = _return.swing = '--';
            return _return;
        }
        var _tmpData = argStr.split(',');
        var _data = {};
        if(argSymbol)
        {
            if(argSymbol.indexOf('s') > -1)
            {
                _data.symbol = argSymbol;
                _data.sym = argSymbol.replace(/s[hz]/,'');
            }
            else
            {
                _data.sym = argSymbol;
                var _first = argSymbol.charAt(0);
                if('69'.indexOf(_first) > -1)
                {
                    _data.symbol = 'sh' + argSymbol;
                }
                if('023'.indexOf(_first) > -1)
                {
                    _data.symbol = 'sz' + argSymbol;
                }
            }
        }

        _data.name = _tmpData[0];
        _data.open = _tmpData[1] * 1;
        _data.preClose = _tmpData[2] * 1;
        _data.now = _tmpData[3] * 1;
        _data.high = _tmpData[4] * 1;
        _data.low = _tmpData[5] * 1;
        _data.buy = _tmpData[6] * 1;
        _data.sell = _tmpData[7] * 1;
        _data.volume = _tmpData[8] * 1;
        /*上证指数、权证成交量乘100，单位不同*/
        if(_data.symbol && /^(sh000|sh580)\d*/.test(_data.symbol))
        {
            _data.volume *= 100;
        }
        _data.amount = _tmpData[9] * 1;
        _data.date = _tmpData[30];
        _data.time = _tmpData[31];
        _data.status = _tmpData[32];
        var _statusWord = { '00': '','01': '临停1H','02': '停牌','03': '停牌','04': '临停','05': '停1/2','07': '暂停','-1': '无记录','-2': '未上市','-3': '退市' };
        /*开盘即临停对及时性要求高，如果出现当前价或者成交量出现则强制认为开始交易*/
        if(_data.status == '00' || _data.buy || _data.sell)
        {
            _data.statusWord = '';
        }
        else
        {
            _data.statusWord = _statusWord[_data.status];
        }
        if((_data.status == '02' || _data.status == '03') && !_data.buy && !_data.sell)
        {
            _data.stopDay = true;
        }

        _data.change = _data.now - _data.preClose;
        _data.changeP = _data.change / _data.preClose * 100;
        if(!_data.open)
        {
            _data.open = '--';
            //            if(_data.status == '02' || _data.status == '03')
            //            {
            //                _data.now = '停牌';
            //            }
            _data.high = '--';
            _data.low = '--';
        }
        if(!_data.now || _data.open == '--')
        {
            _data.change = '--';
            _data.changeP = '--';
        }
        if(_data.preClose)
        {
            _data.swing = ((_data.high - _data.low) || 0) / _data.preClose * 100;
            _data.swing = isNaN(_data.swing) ? '--' : _data.swing;
        }
        else
        {
            _data.preClose = '--';
            _data.swing = '--';
        }
        _data.now = _data.now || _data.preClose;

        //        _data.pe = _tmpData[11] * 1;
        //        _data.income = _tmpData[12] * 1;
        //        _data.high52 = _tmpData[13] * 1;
        //        _data.low52 = _tmpData[14] * 1;

        return _data;
    }
    function _return(argType,argStr,argSymbol)
    {
        var _fn = arguments.callee[argType];
        if(_fn)
        {
            return _fn(argType,argStr,argSymbol);
        }
        else
        {
            return {};
        }
    }
    _return.a = _a;
    return _return;
} ();

/**
 * 各字段的意义。
 * 定义在http://finance.sina.com.cn/basejs/dataDrawer.js文件中。
 */
!function (){
    var allFields =
    {
        /*列表：f=字段名，t=显示名/字段标题，digit=小数位数（-1不起作用，-2表示字符）
        * cfg: 1=显示名称连接 2=强制无符号 4=强制+号 8=千位逗号 16=使用th 32=涨跌箭头
        * css: custom_css
        * 万/亿:自动判断位数
        * shift:乘以10的几次方
        * p: template */
        counts: { s: 1 },
        symbol: { key: 'symbol',title: '代码' },
        sym: { key: 'sym',title: '代码' },
        name: { key: 'name',title: '名称' },
        now: { key: 'now',title: '&nbsp;最新价',digit: 2,cfg: 16 + 32 },
        change: { key: 'change',title: '涨跌额',digit: 2,cfg: 4 + 8 + 16 },
        changeP: { key: 'changeP',title: '涨跌幅',digit: 2,cfg: 4 + 8 + 16,p: '$1%',color: true },
        open: { key: 'open',title: '开盘价',digit: 2,cfg: 8 + 16 },
        preClose: { key: 'preClose',title: '昨收',digit: 2,cfg: 8 + 16 },
        volume: { key: 'volume',title: '成交量(手)',digit: 0,cfg: 16,'万/亿': true,shift: -2 },
        amount: { key: 'amount',title: '成交额(元)',digit: 2,cfg: 16,'万/亿': true },
        turnover: { key: 'turnover',title: '换手率',digit: 2,cfg: 8 + 16,p: '$1%' },
        pe: { key: 'pe',title: '市盈率',digit: 2,cfg: 8 + 16 },
        pb: { key: 'pb',title: '市净率',digit: 2,cfg: 8 + 16 },
        high: { key: 'high',title: '最高价',digit: 2,cfg: 8 + 16 },
        low: { key: 'low',title: '最低价',digit: 2,cfg: 8 + 16 },
        buy: { key: 'buy',title: '买入价',digit: 2,cfg: 8 + 16 },
        sell: { key: 'sell',title: '卖出价',digit: 2,cfg: 8 + 16 },
        date: { key: 'date',title: '日期' },
        time: { key: 'time',title: '时间' },
        swing: { key: 'swing',title: '振幅',digit: 2,cfg: 8 + 16,p: '$1%' },
        eps: { key: 'eps',title: '每股收益',digit: 2,cfg: 8 + 16,s: 1 },
        profit4Season: { key: 'profit4Season',title: '最近4季度每股收益',digit: 2,cfg: 8 + 16,s: 1 },
        profitYear: { key: 'profitYear',title: '今年以来每股收益',digit: 2,cfg: 8 + 16,s: 1 },
        netAsset: { key: 'netAsset',title: '每股净资产',digit: 2,cfg: 8 + 16,s: 1 },
        averageVolume: { key: 'averageVolume',title: '平均成交量',digit: 2,cfg: 8 + 16,s: 1 },
        shares: { key: 'shares',title: '总股本',digit: 0,cfg: 16,'万/亿': true,s: 1 },
        capital: { key: 'capital',title: '流通股本',digit: 0,cfg: 16,'万/亿': true,s: 1 },
        cvs: { key: 'cvs',title: '流通市值(元)',digit: 2,cfg: 16,'万/亿': true },
        totalShare: { key: 'totalShare',title: '总市值(元)',digit: 2,cfg: 16,'万/亿': true },
        capitalA: { key: 'capitalA',title: '流通A股',digit: 0,cfg: 16,'万/亿': true,s: 1 },
        capitalB: { key: 'capitalB',title: '流通B股',digit: 0,cfg: 16,'万/亿': true,s: 1 },
        netProfit: { key: 'netProfit',title: '最近年度净利润(亿元)',digit: 2,cfg: 16,'万/亿': true,s: 1 },
        issuePrice: { key: 'issuePrice',title: '发行价',digit: 2,cfg: 8 + 16,s: 1 },
        roe: { key: 'roe',title: '净资产收益率',digit: 2,cfg: 8 + 16,p: '$1%',s: 1 },
        revenue: { key: 'revenue',title: '主营业务收入(亿元)',digit: 2,cfg: 16,'万/亿': true,s: 1 },
        changes_5: { key: 'changes_5',title: '五日涨跌',digit: 2,cfg: 8 + 16,p: '$1%',s: 1 },
        changes_10: { key: 'changes_10',title: '十日涨跌',digit: 2,cfg: 8 + 16,p: '$1%',s: 1 },
        changes_20: { key: 'changes_20',title: '二十日涨跌',digit: 2,cfg: 8 + 16,p: '$1%',s: 1 },
        changes_30: { key: 'changes_30',title: '三十日涨跌',digit: 2,cfg: 8 + 16,p: '$1%',s: 1 },
        changes_60: { key: 'changes_60',title: '六十日涨跌',digit: 2,cfg: 8 + 16,p: '$1%',s: 1 },
        netamount: { key: 'netamount',title: '净流入(元)',digit: 2,cfg: 16,'万/亿': true },
        netInflowRate: { key: 'netInflowRate',title: '净流入率',digit: 2,cfg: 8 + 16,p: '$1%' },
        r0_in: { key: 'r0_in',title: '主力净流入(元)',digit: 2,cfg: 16,'万/亿': true },
        r3_in: { key: 'r3_in',title: '散户净流入(元)',digit: 2,cfg: 16,'万/亿': true },
        r0_net_3: { key: 'r0_net_3',title: '3日净流入(元)',digit: 2,cfg: 16,'万/亿': true,s: 1 },
        r0_net_5: { key: 'r0_net_5',title: '5日净流入(元)',digit: 2,cfg: 16,'万/亿': true,s: 1 }
    };
    window.allFields = allFields;

    function $(id)
    {
        if(typeof id == 'string')
        {
            return document.getElementById(id);
        }
        else
        {
            return id;
        }
    }
    /* container : 数据容器，可以直接innerHTML的一级，可是id或者元素dom（原生）
    * fieldsCfg : 如需使用独特字段参数，传入类似于allFields的对象
    * cssCfg : 涨跌css样式，默认up、down、flat */
    function DataDrawer(container,fieldsCfg,cssCfg)
    {
        this.template = [];
        this.html = '';
        this.container = $(container);
        this.fields = fieldsCfg || {};
        this.initTemplate();
        this.css = merge({ up: 'up',down: 'down',flat: 'flat' },cssCfg);
    }
    merge(DataDrawer.prototype,
    {
        initTemplate: function ()
        {
            var _this = this;
            var _html = this.container.innerHTML;
            this.container.innerHTML = _html.replace(/<!--[\s\S]*?-->/g,'').replace(/@.*?@/g,'--');
            _html = _html.replace(/<!--tpl([\s\S]*?)-->/g,function ($1,$2)
            {
                _this.template.push($2);
                return '@template@';
            });
            this.html = _html;
        },
        /*如果针对某一个数据需要设置特殊配置，可以加一个fieldsImportant参数*/
        draw: function (argData)
        {
            var _this = this;
            var _html = this.html;
            var _template = this.template;
            var _forTemplate = [];
            var _temp = [];
            var _data,_single;
            _data = argData;
            /*如果不是Array则是独一份的数据，转成数组*/
            /*如果Array元素不是数组，则是一套循环的，转成数组*/
            if(_data && (_data.constructor !== Array || (_data[0] && _data[0].constructor !== Array)))
            {
                _data = [_data];
            }
            for(var di = 0;di < _data.length && di < _template.length;di++)
            {
                _single = _data[di];
                if(_single && _single.constructor !== Array)
                {
                    _single = [_single];
                }
                _temp = [];
                for(var i = 0,il = _single.length;i < il;i++)
                {
                    _temp.push(_template[di].replace(/@UD_(.*?)@/g,function ($1,$2)
                    {
                        if(_single[i][$2] !== undefined)
                        {
                            var _d = _single[i][$2] * 1;
                            if(_d > 0)
                            {
                                return _this.css.up;
                            }
                            if(_d < 0)
                            {
                                return _this.css.down;
                            }
                            return _this.css.flat;
                        }
                    }).replace(/@(.*?)@/g,function ($1,$2)
                    {
                        return dataFormat(_single[i][$2],(_single[i].fieldsImportant && _single[i].fieldsImportant[$2]) || _this.fields[$2] || allFields[$2]);
                    }));
                }
                _forTemplate.push(_temp.join(''));
            }
            var _tIndex = 0;
            _html = _html.replace(/@template@/g,function ()
            {
                _tIndex++;
                return _forTemplate[_tIndex - 1] || '';
            });
            _html = _html.replace(/@UD_(.*?)@/g,function ($1,$2)
            {
                if(argData[$2] !== undefined)
                {
                    var _d = argData[$2] * 1;
                    if(_d > 0)
                    {
                        return _this.css.up;
                    }
                    if(_d < 0)
                    {
                        return _this.css.down;
                    }
                    return _this.css.flat;
                }
            }).replace(/@(.*?)@/g,function ($1,$2)
            {
                return dataFormat(argData[$2],(argData.fieldsImportant && argData.fieldsImportant[$2]) || _this.fields[$2] || allFields[$2]);
            });
            this.container.innerHTML = _html;
        }
    });
    window.DataDrawer = DataDrawer;
    /*将数据按field规定的方式整理。如果需要涨跌箭头则需传入lastData*/
    function dataFormat(data,field,lastData)
    {
        /*_data会随着变化，data是原始数据，用来判断正负之类*/
        var _data = data;
        var _field = field;
        if(typeof field == 'string')
        {
            field = allFields[field];
        }
        var _measureBy = '';
        if(_data === undefined || _data === null)
        {
            _data = '--';
        }
        if(field)
        {

            /*数字的才进行格式化操作*/
            if(!isNaN(data * 1) && isFinite(data * 1))
            {
                /*小数点移位*/
                if(_field.shift)
                {
                    _data *= Math.pow(10,_field.shift);
                }
                /*判断精确程度*/
                if(_field['万/亿'])
                {
                    if(Math.abs(_data) > 100000000)
                    {
                        _data /= 100000000;
                        _measureBy = '亿';
                    }
                    else if(Math.abs(_data) > 10000)
                    {
                        _data /= 10000;
                        _measureBy = '万';
                    }
                }
                /*小数点位数*/
                if(_field.digit !== undefined && _field.digit >= 0)
                {
                    if(_measureBy)
                    {
                        _data = _data.toFixed(_field.digit || 2);
                    }
                    else
                    {
                        _data = _data.toFixed(_field.digit);
                    }
                }
                /*千位逗号*/
                if(_field.cfg & 8)
                {
                    _data = _data.format();
                }
                /*正负号*/
                if(_field.cfg & 4)
                {
                    _data = (data * 1) > 0 ? '+' + _data : _data;
                }
                /*强制无符号*/
                if(_field.cfg & 2)
                {
                    _data = Math.abs(_data * 1);
                }

                _data += _measureBy;
                /*涨跌箭头*/
                if(_field.cfg & 32 && this.lastData)
                {
                    if(data > this.lastData[_field.key])
                    {
                        _data = '<span style="color:red;">↑</span>' + _data;
                    }
                    if(data < this.lastData[_field.key])
                    {
                        _data = '<span style="color:green;">↓</span>' + _data;
                    }
                }
                if(_field.p)
                {
                    _data = _field.p.replace('$1',_data);
                }
            }
            return _data;
        }
        else
        {
            return _data;
        }
    }
    window.dataFormat = dataFormat;
}();
