define ['controllers/nav'], (nav) ->
    exports = 
        routePoet: (category) ->
            channel = 'poet'
            category = 'default' unless category
            nav.setCurrentNav channel, category

            console.log [channel, category].join('=>')
        
        routeChannel: (channel, category) ->
            channel = 'poet' unless channel
            category = 'default' unless category
            nav.setCurrentNav channel, category
            
            console.log [channel, category].join('=>')

    return exports
