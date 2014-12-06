require [], () ->
    $.getJSON './categories.json', (data) ->
        console.log data