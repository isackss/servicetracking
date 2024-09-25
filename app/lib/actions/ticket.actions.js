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
