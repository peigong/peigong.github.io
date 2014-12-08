define 'providers/data', [], () ->
    categories = []
    $.getJSON './categories.json', (data) ->
        console.log data
        categories  = data

    exports = 
        getCategories: () ->
            return categories
    return exports
