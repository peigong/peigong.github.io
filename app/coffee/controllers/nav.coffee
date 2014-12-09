define ['jquery', 'providers/data', 'providers/template'], ($, data, template) ->
    class Navigation
        constructor: () ->
            @navContainer = $ '#nav-container'
            if not @categories
                that = @
                data.getCategories()
                .then @load.bind @
                .fail (err) ->
                    throw err
        
        load: (categories) -> 
            @categories = categories
            @navHTML = template.render 'tmpl-nav', @categories
            @navContainer.html @navHTML

        setCurrentNav: (channel, category) ->
            return

    return new Navigation