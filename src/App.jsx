import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header" // Importamos el componente Header
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]) /* El valor de inicio del useState Pacientes es un arreglo vacío, por eso cada vez que la pagina se recarga, se borra toda la información, esto se soluciona agregando otro useEffect */

  const [paciente, setPaciente] = useState({})

  /* a través de este, si hay algo que el otro useEffect haya cargado, lo va a ver, lo leera y seteara a pacientes, de ese modo ya no será un arreglo vacío, y los datos tendran persistencia. Cuando se ejecute el segundo useEffect, detectará algo, y no estará vacío */
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [] /* el ?? es para verificar que exista el item pacientes en local storage, de no ser así, ñe añade un arreglo vacío [] para protegernos de cualquier error. El JSON.parse es para convertir la información de string a arreglo*/
      setPacientes(pacientesLS) /* Puesto que detectó algo en local storage se lo setea a pacientes, de este modo los datos no se perderan al descargar */
    }
    obtenerLS()
  }, []) // Al estar vacío (sin ninguna dependencia) sólo se ejecuta una vez

  useEffect(() => { // sincroniza el state con localStorage
    localStorage.setItem('pacientes', JSON.stringify(pacientes)) /* convierte el arreglo a string, para que se pueda guardar en local storage */
  }, [pacientes]) // funcionará cada vez que haya un cambio en pacientes que es su DEPENDENCIA

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header /> {/* Hacemos el llamdo al componente para que se muestre en pantalla. Se usa el estilo de etiquetas únicas como las img */}

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes} // Esto me va a permitir conectar el componente App con el componente Formulario
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
