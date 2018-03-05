function initializeTable() {
    $('#createLink').click(createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia","Moscow");
    fixRowLinks();
    
    function addCountryToTable(country, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>')
                    .click(moveRowUp))
                .append(" ")
                .append($('<a href="#">[Down]</a>')
                    .click(moveRowDown))
                .append(" ")
                .append($('<a href="#">[Delete]</a>')
                    .click(deleteRow))
            );

        $(tr).css('display', 'none');
        $('#countriesTable').append(tr);
        tr.fadeIn(1000);
    }
    
    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');

        addCountryToTable(country.val(), capital.val());
        fixRowLinks();

        country.val('');
        capital.val('');
    }
    
    function moveRowUp() {
        let row = $(this).parent().parent();
        if(row.index() > 2) {
            row.fadeOut(1000, function () {
                row.insertBefore(row.prev());
                row.fadeIn(1000);
                fixRowLinks();
            })
        }
    }
    
    function moveRowDown() {
        let row = $(this).parent().parent();
        if(!row.is(':last-child')) {
            row.fadeOut(1000, function () {
                row.insertAfter(row.next());
                row.fadeIn(1000);
                fixRowLinks();
            })
        }
    }
    
    function deleteRow() {
        let element = $(this).parent().parent();
        element.fadeOut(function(){
            element.remove();
            fixRowLinks();
        });
    }
    
    function fixRowLinks() {
        let rows = $('#countriesTable').find('tr');
        $(rows).find('a').css('display', 'inline');
        $(rows[2]).find('a:contains("Up")').css('display', 'none')
        $(rows[rows.length - 1]).find('a:contains("Down")').css('display', 'none');

    }
}