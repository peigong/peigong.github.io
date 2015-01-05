define ['jquery', 'providers/data', 'providers/template'], ($, data, template) ->
    class Posts
        constructor: () ->
            that = @
            @el = $ '#posts-container'
            @categories = {};
            @posts = {}
            @currentList = []
            @key = '__all__'

            data.getCategories()
            .then @loadCategories.bind @
            .fail (err) ->
                throw err

            data.getPosts()
            .then @loadPosts.bind @
            .fail (err) ->
                throw err

        loadCategories: (categories) ->
            for category in categories
                @categories[category.name] = []
                @categories[category.name].push cate.name for cate in category.categories

        loadPosts: (posts) -> 
            @posts[@key] = posts

        getPosts: (channel, category) ->
            that = @
            key = ['posts', channel, category].join '-'
            unless @posts.hasOwnProperty key
                @posts[key] = []
                if category is 'default'
                    check = (cate) ->
                        return cate in that.categories[channel]
                else if category
                    check = (cate) ->
                        return cate is category
                if @posts.hasOwnProperty @key
                    for post in @posts[@key]
                        if check post.categories
                            @posts[key].push(post)
            return @posts[key]

        setCurrentList: (channel, category) ->
            @currentList = @getPosts channel, category
            it = 
                channel: channel
                posts: @currentList
            postsHTML = template.render 'tmpl-posts', it
            @el.html postsHTML

        getCurrentPost: (link) ->
            if link
                return link
            else if  @currentList.length
                return @currentList[0]
            else
                return ''

    return new Posts