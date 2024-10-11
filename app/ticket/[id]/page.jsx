"use client";

import { getTicket, updateTicket } from "@/app/lib/actions/ticket.actions";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Edit = () => {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    _id: "",
    department: "",
    subject: "",
    details: "",
  });

  useEffect(() => {
    const ticket = getTicket(params.id);
    setFormData(ticket);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTicket(formData._id, {
      _id: formData._id,
      department: formData.department,
      subject: formData.subject,
      details: formData.details,
    });
    alert("Solicitud actualizada con éxito!");
    router.push("/dashboard");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <div className="p-4">
      <h1 className="text-3xl">Crear Ticket</h1>
      <section className="mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block font-bold">Departamento:</label>
            <select
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
              name="department"
              value={formData.department}
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
            Guardar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Edit;
