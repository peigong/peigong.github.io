(function() {
  define(['controllers/blog'], function(blog) {
    var exports;
    exports = {
      '/:channel/:category/(.*\.html)': blog.route.bind(blog),
      '/:channel/:category': blog.route.bind(blog),
      '/:channel': blog.route.bind(blog),
      '/': blog.route.bind(blog)
    };
    return exports;
  });

}).call(this);
