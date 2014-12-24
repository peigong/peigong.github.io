define ['controllers/blog'], (blog) ->
    exports = 
        '/': blog.routePoet.bind blog
        '/poet': blog.routePoet.bind blog
        '/poet/:category': blog.routePoet.bind blog
        '/poet/:category/(\\*)': blog.routePoetPost.bind blog
        '/:channel': blog.routeChannel.bind blog
        '/:channel/:category': blog.routeChannel.bind blog
        '/:channel/:category/(\\*)': blog.routeChannelPost.bind blog
        
    return exports
