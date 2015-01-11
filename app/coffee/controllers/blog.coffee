define ['controllers/nav', 'controllers/posts', 'controllers/post'], (nav, posts, post) ->
    class Blog 
        constructor: () ->

        route: (channel, category, link) ->
            channel = 'poet' unless channel
            category = 'default' unless category

            nav.setCurrentNav channel, category
            posts.setCurrentList channel, category
            posts.getCurrentPost category, link
            .then (link) ->
                post.setLink(link)
            return false

    return new Blog
