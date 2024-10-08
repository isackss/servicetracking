export const createTicket = (ticketData) => {
  try {
    const localData = localStorage.getItem("ticket");
    if (localData) {
      const tickets = JSON.parse(localData);
      tickets.push(ticketData);
      localStorage.setItem("ticket", JSON.stringify(tickets));
    } else {
      localStorage.setItem("ticket", JSON.stringify([ticketData]));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTicket = (ticketId) => {
  try {
    const localData = localStorage.getItem("ticket");
    if (localData) {
      const ticketsData = JSON.parse(localData);
      console.log(ticketsData);
      const ticket = ticketsData.filter((tk) => tk._id === ticketId);
      return ticket;
    }
  } catch (error) {
    console.log(error);
  }
};
