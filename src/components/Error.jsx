const Error = ({mensaje}) => { // extraigo el mensaje
    return (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>{mensaje}</p> {/* Muestro el mensaje anteriormente extraido */}
        </div>
    )
}

export default Error
