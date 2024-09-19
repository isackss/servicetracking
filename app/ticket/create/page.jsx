const Create = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl">Crear Ticket</h1>
      <section className="mt-4">
        <form>
          <div className="mb-5">
            <label className="block font-bold">Asunto:</label>
            <input
              type="text"
              name="subjet"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-5">
            <label className="block font-bold">Detalles:</label>
            <textarea name="details" className="w-full p-2 border rounded-md">
              Hola mundo
            </textarea>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Create;
