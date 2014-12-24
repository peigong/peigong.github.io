define ['controllers/nav', 'controllers/posts'], (nav, posts) ->
    class Blog 
        constructor: () ->

        setPage: (channel, category) ->
            nav.setCurrentNav channel, category
            posts.setCurrentList channel, category
        
        routePoet: (category) ->
            channel = 'poet'
            category = 'default' unless category
            @setPage channel, category

        routePoetPost: (category, link) ->
            if category
                channel = 'poet'
                @setPage channel, category
                console.log link
            else
                throw new Error 'category is empty.'
        
        routeChannel: (channel, category) ->
            if channel
                category = 'default' unless category
                @setPage channel, category
            else
                throw new Error 'channel is empty.'

        routeChannelPost: (channel, category, link) ->
            if channel and category
                category = 'default' unless category
                @setPage channel, category
                console.log link
            else
                throw new Error 'channel or category is empty.'

    return new Blog
