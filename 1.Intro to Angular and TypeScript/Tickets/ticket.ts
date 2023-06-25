

  class Ticket {
    destination: string;
    price: number;
    status: string;
  
    constructor(destination: string, price: number, status: string) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  
  function manageTickets(tickets: string[], sortingCriteria: string): Ticket[] {
    const parsedTickets: Ticket[] = tickets.map((ticketStr) => {
      const [destination, price, status] = ticketStr.split('|');
      return new Ticket(destination, Number(price), status);
    });
  
    switch (sortingCriteria) {
      case 'destination':
        return parsedTickets.sort((a, b) => a.destination.localeCompare(b.destination));
      case 'price':
        return parsedTickets.sort((a, b) => a.price - b.price);
      case 'status':
        return parsedTickets.sort((a, b) => a.status.localeCompare(b.status));
      default:
        return parsedTickets;
    }
  }



  // Example usage:
  const ticketsData: string[] = [
    'Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'

  ];
  const sortingCriteria: string = 'status';
  
  const sortedTickets: Ticket[] = manageTickets(ticketsData, sortingCriteria);
  console.log(sortedTickets);
  

// class Ticket {
//     destination: string;
//     price: number;
//     status: string;
  
//     constructor(destination: string, price: number, status: string) {
//       this.destination = destination;
//       this.price = price;
//       this.status = status;
//     }
//   }
  
//   function sortTickets(ticketDescriptions: string[], sortCriteria: string): Ticket[] {
//     // Преобразуване на описанията на билетите в обекти Ticket
//     const tickets: Ticket[] = ticketDescriptions.map((description) => {
//       const [destination, priceStr, status] = description.split('|');
//       const price = parseFloat(priceStr);
//       return new Ticket(destination, price, status);
//     });
  
//     // Сортиране на билетите в зависимост от подадения критерий
//     if (sortCriteria === 'destination') {
//       tickets.sort((a, b) => a.destination.localeCompare(b.destination));
//     } else if (sortCriteria === 'price') {
//       tickets.sort((a, b) => a.price - b.price);
//     } else if (sortCriteria === 'status') {
//       tickets.sort((a, b) => a.status.localeCompare(b.status));
//     }
  
//     return tickets;
//   }

// const ticketDescriptions = [
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
//   ];
//   const sortCriteria = 'destination';
  
//   const sortedTickets = sortTickets(ticketDescriptions, sortCriteria);

//   sortedTickets.forEach((ticket) => {
//     console.log(`Ticket: destination=${ticket.destination}, price=${ticket.price}, status=${ticket.status}`);
//   });