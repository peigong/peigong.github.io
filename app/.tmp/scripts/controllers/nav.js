(function() {
  define(['jquery', 'EventEmitter', 'providers/data', 'providers/template'], function($, EventEmitter, data, template) {
    var Navigation, emitter;
    emitter = new EventEmitter;
    Navigation = (function() {
      function Navigation() {
        var that;
        this.loaded = false;
        this.el = $('#nav');
        if (!this.categories) {
          that = this;
          data.getCategories().then(this.load.bind(this)).fail(function(err) {
            throw err;
          });
        }
      }

      Navigation.prototype.load = function(categories) {
        var that;
        that = this;
        this.categories = categories;
        this.navHTML = template.render(this.categories, 'tmpl-nav');
        this.el.html(this.navHTML);
        $('#nav ul.master a').click(function() {
          return that.show($(this));
        });
        this.loaded = true;
        return emitter.emit('loaded');
      };

      Navigation.prototype.show = function(ele) {
        var id;
        id = ele.attr('data-id');
        $('#nav ul.slave').hide();
        return $("#nav ul.slave[data-master=" + id + "]").show();
      };

      Navigation.prototype.setCurrentNav = function(channel, category) {
        var init, that;
        that = this;
        init = function() {
          var ele;
          ele = $("#nav ul.master a[data-id=" + channel + "]");
          return that.show(ele);
        };
        if (this.loaded) {
          return init();
        } else {
          return emitter.on('loaded', init);
        }
      };

      return Navigation;

    })();
    return new Navigation;
  });

}).call(this);
