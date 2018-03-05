function search() {

    let search = $('#searchText').val();
    let test = $('li').filter((i, e) => e.textContent.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    let cnt = test.toArray().length;
    if(cnt > 0)
    {
        test.css('font-weight', 'bold');
    }

    $('#result').text(cnt + ' matches found.');
}