const Error = ({ children }) => { // extraigo el children. Esta es otra forma de pasar props. Permite agregar mucho mas contenido.
    return (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            {children}
        </div>
    )
}

export default Error
