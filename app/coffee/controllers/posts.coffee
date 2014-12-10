define ['jquery', 'providers/data', 'providers/template'], ($, data, template) ->
    class Posts
        constructor: () ->
            @el = $ '#posts-container'
            @posts = {}
            @key = '__all__'
            if not @posts.hasOwnProperty @key
                that = @
                data.getPosts()
                .then @load.bind @
                .fail (err) ->
                    throw err
        
        load: (posts) -> 
            @posts[@key] = posts
            #console.log posts

        setCurrentList: (channel, category) ->
            console.log ['posts', channel, category].join('=>')

    return new Posts