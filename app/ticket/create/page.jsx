"use client";

import { useRouter } from "next/navigation";
import { createTicket } from "@/app/lib/actions/ticket.actions";
import { useId, useState } from "react";

const Create = () => {
  const router = useRouter();
  const generateUniqueId = require("generate-unique-id");
  const [formData, setFormData] = useState({
    _id: "",
    department: "",
    subject: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Funciona");

    createTicket({
      _id: generateUniqueId(),
      department: formData.department,
      subject: formData.subject,
      details: formData.details,
    });
    router.push("/dashboard");
  };

  const handleInputChange = (e) => {
    console.log(e.target.name);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  console.log(formData[0]);

  return (
    <div className="p-4">
      <h1 className="text-3xl">Crear Ticket</h1>
      <section className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block font-bold">Departamento:</label>
            <select
              className="w-full p-2"
              onChange={handleInputChange}
              name="department"
              defaultValue={formData.department}
            >
              <option disabled={formData.department.length && "disabled"}>
                Seleccione una opción
              </option>
              <option value="Contabilidad">Contabilidad</option>
              <option value="Legal">Legal</option>
              <option value="Finanzas">Finanzas</option>
              <option value="Informática">Informática</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block font-bold">Asunto:</label>
            <input
              value={formData.subject}
              type="text"
              name="subject"
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <label className="block font-bold">Detalles:</label>
            <textarea
              defaultValue={formData.details}
              name="details"
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
            />
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
