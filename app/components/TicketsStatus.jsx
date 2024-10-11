const TicketsStatus = () => {
  return (
    <section className="flex flex-row gap-2 p-4">
      <div className="flex flex-col text-center border p-4 rounded-md shadow-md bg-orange-200">
        <div className="text-4xl">3</div>
        <div>Pendientes</div>
      </div>
      <div className="flex flex-col text-center border p-4 rounded-md shadow-md bg-blue-200">
        <div className="text-4xl">1</div>
        <div>En proceso</div>
      </div>
      <div className="flex flex-col text-center border p-4 rounded-md shadow-md bg-green-200">
        <div className="text-4xl">4</div>
        <div>Cerrados</div>
      </div>
      <div className="flex flex-col text-center border p-4 rounded-md shadow-md bg-slate-200">
        <div className="text-4xl">2</div>
        <div>Cancelados</div>
      </div>
    </section>
  );
};

export default TicketsStatus;
