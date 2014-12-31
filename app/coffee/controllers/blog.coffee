define ['controllers/nav', 'controllers/posts'], (nav, posts) ->
    class Blog 
        constructor: () ->

        route: (channel, category, link) ->
            channel = 'poet' unless channel
            category = 'default' unless category
            link = '' unless link

            nav.setCurrentNav channel, category
            posts.setCurrentList channel, category
            return false

    return new Blog
