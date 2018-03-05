function attachEvents() {
    $('#items li').on('click', function () {
        if($(this).attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '')
        }else{
            $(this).attr('data-selected', true);
            $(this).css('background-color', '#DDD')
        }
    });

    $('#showTownsButton').on('click', function () {
        let result = $('#items > li[data-selected]')
            .toArray()
            .map(li => li.textContent)
            .join(', ');

        $('#selectedTowns').text("Selected towns: " + result);
    })
}