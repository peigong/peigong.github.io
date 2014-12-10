define ['jquery'], ($) ->
    categories = []
    posts = []

    exports = 
        getCategories: () ->
            defer = $.Deferred()
            if categories and categories.length
                defer.resolve(categories)
            else
                $.getJSON './categories.json'
                .then (data) ->
                    categories  = data
                    defer.resolve(categories)
                .fail (err) ->
                    defer.reject(err)
            return defer.promise()

        getPosts: () ->
            defer = $.Deferred()
            if posts and posts.length
                defer.resolve(posts)
            else
                $.getJSON './posts.json'
                .then (data) ->
                    posts  = data
                    defer.resolve(posts)
                .fail (err) ->
                    defer.reject(err)
            return defer.promise()

    return exports
