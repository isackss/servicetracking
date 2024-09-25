"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (typeof window != "undefined") {
      const data = localStorage.getItem("ticket");

      if (data) {
        setTickets(JSON.parse(data));
      }
    }
    console.log(tickets);
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Dashboard</h1>
      <section>
        <div className="border flex justify-between p-2 font-bold">
          <div>ID</div>
          <div>Tema</div>
          <div>Departamento</div>
          <div>Detalles</div>
        </div>
        {tickets.map((ticket) => (
          <div key={ticket._id} className="border flex justify-between p-2">
            <div>{ticket._id}</div>
            <div>{ticket.subject}</div>
            <div>{ticket.department}</div>
            <div>{ticket.details}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
