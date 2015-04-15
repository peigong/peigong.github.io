(function() {
  define(['doT'], function(doT) {
    var exports, handlers;
    handlers = {};
    exports = {
      render: function(data, tmpl, def) {
        var ele, text;
        if (!handlers.hasOwnProperty(tmpl)) {
          ele = $("#" + tmpl);
          if (ele.size() === 0) {
            ele = $("#" + def);
          }
          text = '';
          if (ele.size() > 0) {
            text = ele.text();
            text = $.trim(text);
          }
          if (text) {
            handlers[tmpl] = doT.template(text);
          } else {
            handlers[tmpl] = function() {
              return '';
            };
          }
        }
        return handlers[tmpl](data);
      }
    };
    return exports;
  });

}).call(this);
