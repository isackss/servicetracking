import Link from "next/link";

const TicketsCard = ({ tickets }) => {
  return (
    <section className="p-6 border rounded-xl shadow-md overflow-hidden">
      <div className="flex justify-between mb-2">
        <div>
          <h2 className="text-2xl">Solicitudes</h2>
          <p>Listado de todos las solicitudes y sus respectivos estados.</p>
        </div>
        <div>
          <Link
            href="/ticket/create"
            className="bg-blue-700 px-4 py-2 text-white rounded-md"
          >
            Agregar
          </Link>
        </div>
      </div>
      <div className="w-full overflow-scroll no-scrollbar">
        <div className="table w-full">
          <div className="table-header-group">
            <div className="table-row border">
              <div className="table-cell text-left border-b p-2 font-bold">
                ID
              </div>
              <div className="table-cell text-left border-b p-2 font-bold">
                Tema
              </div>
              <div className="table-cell text-left border-b p-2 font-bold">
                Departamento
              </div>
              <div className="table-cell text-left border-b p-2 font-bold">
                Detalles
              </div>
              <div className="table-cell text-left border-b p-2 font-bold"></div>
            </div>
          </div>
          <div className="table-row-group">
            {tickets.map((ticket) => (
              <div key={ticket._id} className="table-row">
                <div className="table-cell p-2 border-b">{ticket._id}</div>
                <div className="table-cell p-2 border-b">{ticket.subject}</div>
                <div className="table-cell p-2 border-b">
                  {ticket.department}
                </div>
                <div className="table-cell p-2 border-b">{ticket.details}</div>
                <div className="table-cell p-2 border-b">
                  <button className="text-blue-700 font-semibold">
                    Editar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsCard;
