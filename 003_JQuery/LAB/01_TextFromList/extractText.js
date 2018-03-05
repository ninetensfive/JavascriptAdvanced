function extractText() {
    let lis = $('#items li').toArray().map((li) => li.textContent).join(', ');
    let result = $('#result');
    result.text(lis);
}