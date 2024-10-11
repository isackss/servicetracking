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
      const ticket = ticketsData.find((tk) => tk._id === ticketId);
      return ticket;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateTicket = (ticketId, ticketData) => {
  const localData = localStorage.getItem("ticket");
  try {
    const tickets = JSON.parse(localData);
    const ticketsUpdated = tickets.map((ticket) => {
      if (ticket._id === ticketId) {
        return ticketData;
      } else {
        return ticket;
      }
    });
    localStorage.setItem("ticket", JSON.stringify(ticketsUpdated));
  } catch (error) {
    console.log(error);
  }
};
