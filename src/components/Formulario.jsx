
const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
           <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

           <p className="text-lg mt-5 text-center mb-10">
               Añade Pacientes y {' '}
               <span className="text-indigo-600 font-bold">Administralos</span>
           </p>

           <form className="bg-white shadow-md rounded-lg px-5 py-10">
               <div>
                   <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                       Nombre Mascota
                   </label>{" "}

                   <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full placeholder-gray-400 rounded-md"
                   />
               </div>
           </form>

        </div>
    )
}

export default Formulario