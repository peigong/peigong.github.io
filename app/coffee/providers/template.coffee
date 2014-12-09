define ['doT'], (doT) ->
    handlers = {}
    
    exports = 
        render: (tmpl, data) ->
            if not handlers.hasOwnProperty tmpl
                text = $('#' + tmpl).text()
                text = $.trim text
                if text
                    handlers[tmpl] = doT.template text
                else
                    handlers[tmpl] = () -> ''
            
            return handlers[tmpl] data

    return exports
