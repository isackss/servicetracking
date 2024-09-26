"use client";

import { useEffect, useState } from "react";
import TicketsCard from "../components/TicketsCard";

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
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <TicketsCard tickets={tickets} />
    </div>
  );
};

export default Dashboard;
