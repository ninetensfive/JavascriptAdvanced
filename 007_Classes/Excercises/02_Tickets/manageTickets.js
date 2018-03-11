function manageTickets(ticketsData, orderCriteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticketDataRow of ticketsData) {
        let ticketData = ticketDataRow.split('|');
        let destination = ticketData[0];
        let price = Number(ticketData[1]);
        let status = ticketData[2];

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    tickets = tickets.sort(function (a, b) {
        if(orderCriteria == 'price'){
            return a[orderCriteria] - b[orderCriteria];
        }

        return a[orderCriteria].localeCompare(b[orderCriteria]);
    });

    return tickets;
}

let ticketsData = ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'];
console.log(manageTickets(ticketsData, 'status'));


