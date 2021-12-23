import Header from "./components/Header" // Importamos el componente Header
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header /> {/* Hacemos el llamdo al componente para que se muestre en pantalla. Se usa el estilo de etiquetas únicas como las img */}

      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
