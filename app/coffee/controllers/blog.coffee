define ['controllers/nav', 'controllers/posts'], (nav, posts) ->
    class Blog 
        constructor: () ->

        setPage: (channel, category) ->
            #nav.setCurrentNav channel, category
            #posts.setCurrentList channel, category
            console.log ['blog', channel, category].join('=>')
        
        routePoet: (category) ->
            channel = 'poet'
            category = 'default' unless category
            @setPage channel, category
        
        routeChannel: (channel, category) ->
            channel = 'poet' unless channel
            category = 'default' unless category
            @setPage channel, category

    return new Blog
