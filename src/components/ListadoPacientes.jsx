/* import { useEffect } from "react" */
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente }) => {
    // Esto sólo es un ejercicio de practica de uso de useEffect
   /*  useEffect(() => {
        if (pacientes.length > 0) {
            console.log('Se ha ingresado un nuevo paciente')
        }  
    }, [pacientes])
     */
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus{' '}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ) :
                <>
                    <h2 className="font-black text-3xl text-center">Actualmente no tienes Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Al agregarlos{' '}
                        <span className="text-indigo-600 font-bold">Aparecerán Aquí</span>
                    </p>
                </>
            }

        </div>
    )
}

export default ListadoPacientes
