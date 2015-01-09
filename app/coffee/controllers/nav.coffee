define ['jquery', 'providers/data', 'providers/template'], ($, data, template) ->
    class Navigation
        constructor: () ->
            @el = $ '#nav'
            if not @categories
                that = @
                data.getCategories()
                .then @load.bind @
                .fail (err) ->
                    throw err
        
        load: (categories) -> 
            @categories = categories
            @navHTML = template.render @categories, 'tmpl-nav'
            @el.html @navHTML
            $ '#nav ul.master a'
            .click @show

        show: (ele) ->
            ele = $ this
            id = ele.attr 'data-id'
            $ '#nav ul.slave'
            .hide()
            $ "#nav ul.slave[data-master=#{ id }]"
            .show()

        setCurrentNav: (channel, category) ->
            #console.log ['nav', channel, category].join('=>')

    return new Navigation