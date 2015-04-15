(function() {
  define(['jquery', 'providers/data', 'providers/template'], function($, data, template) {
    var Post;
    Post = (function() {
      function Post() {
        this.el = $('#post');
      }

      Post.prototype.setLink = function(link, clazz) {
        var that;
        that = this;
        that.el.html('');
        return data.getPost(link).then(function(text) {
          return that.el.html("<section class=\"" + clazz + "\">" + text + "</section>");
        }).fail(function(err) {
          throw err;
        });
      };

      return Post;

    })();
    return new Post;
  });

}).call(this);
