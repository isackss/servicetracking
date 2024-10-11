"use client";

import { useEffect, useState } from "react";
import TicketsCard from "../components/TicketsCard";
import TicketsStatus from "../components/TicketsStatus";

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
    <div className="p-4 min-w-full">
      <h1 className="text-3xl mb-2">Dashboard</h1>
      <TicketsStatus tickets={tickets} />
      <TicketsCard tickets={tickets} />
    </div>
  );
};

export default Dashboard;
