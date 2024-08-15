const Card = () => {
    return (
        <div className="card has-background-primary">
            <div className="card-content">
                <div className="content">
                    <p className="has-text-primary-invert">Nombre: </p>
                    <p className="has-text-primary-invert">Edad: </p>
                    <p className="has-text-primary-invert">Pokemon: </p>
                </div>
                <div className="control">
                    <button className="button is-link is-dark">Volver a cargar datos</button>
                </div>
            </div>
        </div>
    )
}

export default Card
