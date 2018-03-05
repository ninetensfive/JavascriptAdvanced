function increment(selectorId) {
    let selector = $(selectorId);

    let counter = $("<textarea>")
        .addClass("counter")
        .val("0")
        .attr("disabled", true);
    counter.appendTo(selector);


    let incrementBtn = $("<button>")
        .addClass("btn")
        .attr("id", "incrementBtn")
        .text("Increment")
        .on('click', incrementCounter);
    incrementBtn.appendTo(selector);

    let addBtn = $("<button>")
        .addClass("btn")
        .attr("id", "addBtn")
        .text("Add")
        .on("click", addToResults);
    addBtn.appendTo(selector);

    let results = $("<ul>")
        .addClass("results");
    results.appendTo(selector);

    function incrementCounter() {
        counter.val(Number(counter.val()) + 1);
    }

    function addToResults() {
        $('<li>')
            .text(counter.val())
            .appendTo(results);
    }
}