import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    const handleSubmit = (e) => { // esta función se activara al enviar el formulario
        e.preventDefault()
        // Validación del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Hay al menos un campo vacío.')
            setError(true)
            return
        } else {
            setError(false)

            // Construimos el objeto paciente

            const objetoPaciente = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas
            }
            /* console.log(objetoPaciente) */
            setPacientes([...pacientes, objetoPaciente])

            /* Reiniciamos el form para que al agregar un paciente los campos se borren */
            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')
        }
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg px-5 py-10 mb-10"
            >
                {error && <Error mensaje='Todos los campos son obligatorios'/>} {/* Le pasamos el prop edl componente padre al hijo y mostramos el error */}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>{" "}

                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>{" "}

                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        email
                    </label>{" "}

                    <input
                        id="email"
                        type="email"
                        placeholder="Dirección email para contactar al propietario"
                        className="border-2 w-full placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fechaAlta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>{" "}

                    <input
                        id="fechaAlta"
                        type="date"
                        className="border-2 w-full placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas que presenta la mascota"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer"
                    value="Agregar Paciente"
                />
            </form>

        </div>
    )
}

export default Formulario