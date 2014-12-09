define ['jquery'], ($) ->
    categories = []

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
    
    return exports
