import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        const { nombre, propietario, email, fecha, sintomas } = paciente
        if (Object.keys(paciente).length > 0) {
            setNombre(nombre)
            setPropietario(propietario)
            setEmail(email)
            setFecha(fecha)
            setSintomas(sintomas)
        }
    }, [paciente])



    const generarId = () => { // función que va a generar un id para cada iteración
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

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

            if (paciente.id) {
                // Editando registro
                objetoPaciente.id = paciente.id // Asigna el id a objeto paciente, puesto que es una modificación de registro

                const actualizarPaciente = pacientes.map(actualizar => actualizar.id === paciente.id ? objetoPaciente : actualizar) /* Busca el que tenga el mismo id para modifircarlo */

                setPacientes(actualizarPaciente) // le asigna al registro los nuevos valores procedentes de la función actualizarPaciente

                setPaciente({}) // Limpia el state

            } else {
                // Nuevo registro
                objetoPaciente.id = generarId() // llamado a la funcion generadora de id
                setPacientes([...pacientes, objetoPaciente])
            }

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
                {error && <Error><p>Todos los campos son obligatorios</p></Error>} {/* Le pasamos el prop del componente padre al hijo y mostramos el error */}

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
                    value={paciente.id ? 'editar registro' : 'agregar paciente'} /* Revisa si tiene id, si lo tiene es un registro existente, el botón mostrará editar paciente, si no tiene id, es nuevo, el botón dirá agregar paciente */
                />
            </form>

        </div>
    )
}

export default Formulario