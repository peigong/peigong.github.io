define ['jquery', 'providers/data', 'providers/template'], ($, data, template) ->
    class Navigation
        constructor: () ->
            @el = $ '#nav-container'
            if not @categories
                that = @
                data.getCategories()
                .then @load.bind @
                .fail (err) ->
                    throw err
        
        load: (categories) -> 
            @categories = categories
            @navHTML = template.render 'tmpl-nav', @categories
            @el.html @navHTML

        setCurrentNav: (channel, category) ->
            #console.log ['nav', channel, category].join('=>')

    return new Navigation