require ['director', 'routes'], (director, routes) ->
    router = director(routes);
    router.init();
