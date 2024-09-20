"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (typeof window != "undefined") {
      const data = localStorage.getItem("ticket");

      if (data) {
        setTickets([JSON.parse(data)]);
      }
    }
    console.log(tickets);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        {tickets.map((ticket) => (
          <div key={ticket._id}>{ticket.subject}</div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
