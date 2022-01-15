/* Un componente es una función. Los nombres de los componentes deben tener la inicial mayúscula */
function Header() {

    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes{' '} {/* Agrego un espacio vacio para separar las palabras */}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
            <h3 className="font-black text-gray-800 text-center md:w-2/3 mx-auto">Josue Lopez Developer Treinee</h3>
        </>
    )
}

export default Header // Con esto exportamos el componente