"use client";

import { useRouter } from "next/navigation";
import { createTicket } from "@/app/lib/actions/ticket.actions";

const Create = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Funciona");

    createTicket({
      _id: "00001",
      subject: "Prueba",
      details: "Detalles de la prueba",
    });
    router.push("/dashboard");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl">Crear Ticket</h1>
      <section className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block font-bold">Asunto:</label>
            <input
              type="text"
              name="subject"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-5">
            <label className="block font-bold">Detalles:</label>
            <textarea name="details" className="w-full p-2 border rounded-md">
              Hola mundo
            </textarea>
          </div>
          <button
            type="submit"
            className="bg-slate-900 text-white px-4 py-2 rounded-md w-full"
          >
            Registrar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Create;
