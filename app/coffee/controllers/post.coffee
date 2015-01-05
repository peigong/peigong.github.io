define ['jquery', 'providers/data', 'providers/template'], ($, data, template) ->
    class Post
        constructor: () ->
            @el = $ '#post-container'
        setLink: (link) ->
            that = @
            data.getPost(link)
            .then (text) ->
                that.el.html text
            .fail (err) ->
                throw err
    return new Post
