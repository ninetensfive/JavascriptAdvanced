function bugTracker() {
    let id = 0;
    let allReports = new Map();
    let element = null;

    let module = {
        report,
        setStatus,
        remove,
        sort,
        output
    };

    function report(author, description, isReproducible, severity) {
        allReports.set(id, {
            author,
            description,
            isReproducible,
            severity,
            status: "Open"
        });
        id++;
        output(element);
    }

    function setStatus(targetId, newStatus) {
        allReports.get(targetId).status = newStatus;
        output(element);
    }

    function remove(targetId) {
        allReports.delete(targetId);
        output(element);
    }

    function sort(criteria) {
        allReports = [...allReports].sort((a, b) => {
            if(!criteria || criteria === "ID"){
                return a[0] - b[0];
            }else if(criteria === "severity") {
                return a[1].severity - b[1].severity;
            }else {
                return a[1].author.localeCompare(b[1].author);
            }e
        });

        output(element);
    }

    function output(selector) {
        element = $(selector);
        element.empty();

        for (let [currentId, report] of allReports) {
            let reportDiv = $('<div>')
                .attr('id', 'report_' + currentId)
                .addClass('report');

            let bodyDiv = $('<div>')
                .addClass('body');

            let paragraphDescription = $('<p>')
                .text(report.description);

            let titleDiv = $('<div>')
                .addClass('title');

            let authorSpan = $('<span>')
                    .addClass('author')
                    .text('Submitted by: ' + report.author);

            let statusSpan = $('<span>')
                    .addClass('status')
                    .text(report.status + ' | ' + report.severity);

            bodyDiv.appendTo(reportDiv);
            paragraphDescription.appendTo(bodyDiv);
            titleDiv.appendTo(reportDiv);
            authorSpan.appendTo(titleDiv);
            statusSpan.appendTo(titleDiv);
            reportDiv.appendTo(element);

        }
    }

    return module;
};

let tracker = bugTracker();

tracker.output('#content');
tracker.report('guy', 'report content', true, 5);
tracker.report('second guy', 'report content 2', true, 3);
tracker.report('abv', 'report content three', true, 4);

//tracker.sort('author');
tracker.sort('severity');


