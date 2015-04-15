(function() {
  require(['director', 'routes'], function(director, routes) {
    var router;
    router = director(routes);
    router.configure({
      recurse: 'forward'
    });
    return router.init('/');
  });

}).call(this);
