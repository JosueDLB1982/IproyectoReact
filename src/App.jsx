/* 
  JSX JavaScript Sintax Extension
    Es una extensión del lenguaje desarrollada para React, es un lenguaje template que muestra HTML pero tiene todas las funciones de JS
  */

function App() { /* antes del return puedo colocar cualquier código JS */
  const age = 39
  return ( //solo un return en el nivel mas alto, mete todo dentro del fragment

    <>  {/* Apertura del fragment */}
      {age >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad'} {/* Lo que se encuentre dentro de llaves es tratado como JS. Dentro del return no pueden haber funciones, esas deben estar antes. Pero puedo colocar un condicional ternario. Todo lo que este dentro del return será mostrado en pantalla. Lo que este antes del return serán las funciones y condicionales necesarios para la funcionalidad del programa */}
      <div> {/* Las etiquetas deben cerrarse siempre */}
        <h1>Josue Lopez - Mi 1° Proyecto React. {`Mi edad es ${age} años`}</h1> {/* Inyecto la variable age creada fuera del return aquí, para ser mostrada en pantalla a través del return. */}
        <h2>Primeros Pasos y Explicación de la Estructura</h2>
      </div>
      <h2>Solo puede haber un return en el nivel mas alto, todo debe estar dentro del fragment</h2>
    </> /* Cierre del fragment */
  )
}

export default App
