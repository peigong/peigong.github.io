define ['controllers/nav', 'controllers/posts'], (nav, posts) ->
    class Blog 
        constructor: () ->
        
        routePoet: (category) ->
            channel = 'poet'
            category = 'default' unless category
            @setPage channel, category
        
        routeChannel: (channel, category) ->
            channel = 'poet' unless channel
            category = 'default' unless category
            @setPage channel, category

        setPage: (channel, category) ->
            nav.setCurrentNav channel, category
            posts.setCurrentList channel, category
            console.log ['blog', channel, category].join('=>')

    return new Blog
