import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header" // Importamos el componente Header
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]) // Prop
  const [paciente, setPaciente] = useState({})

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
        />
      </div>

    </div>
  )
}

export default App
