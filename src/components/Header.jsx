/* Un componente es una función. Los nombres de los componentes deben tener la inicial mayúscula */
function Header() {

    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes{' '} {/* Agrego un espacio vacio para separar las palabras */}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
            <h3 className="text-center text-gray-500 hover:text-green-500"><a href="https://github.com/JosueDLB1982" target='blanck'>Josue Lopez - Developer Treinee</a></h3>
        </>
    )
}

export default Header // Con esto exportamos el componente