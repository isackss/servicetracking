export const createTicket = (ticketData) => {
  try {
    localStorage.setItem("ticket", JSON.stringify(ticketData));
  } catch (error) {
    console.log(error);
  }
};
