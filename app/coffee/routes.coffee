define ['controllers/blog'], (blog) ->
    exports = 
        '/': blog.routePoet
        '/poet': blog.routePoet
        '/poet/:category': blog.routePoet
        '/:channel': blog.routeChannel
        '/:channel/:category': blog.routeChannel
        
    return exports
