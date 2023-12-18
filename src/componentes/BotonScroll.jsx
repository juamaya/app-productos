

const BotonScroll = () => {

    scroll = () => {
        const elemento = document.querySelector('.init')
        elemento.scrollIntoView('smooth', 'start');
    }

    return (

        <button
            className="btn-scroll  "
            onClick={() => {
                { scroll() }
            }}
        >
            Inicio
        </button>
    )
}

export default BotonScroll


