
const Formulario = () => {
    return (
        <form>
            <div className="field m-4">
                <label className="label" htmlFor="inputNombreApelldo">Nombre y apellido</label>
                <div className="control">
                    <input
                        className={`input ${true ? "is-success" : "is-danger"}`}
                        value=""
                        type="text"
                        id="inputNombreApelldo"
                        onChange=""
                        onBlur=""
                        placeholder="Ingrese nombre y apellido..."
                    />
                </div>
                {!true ?
                <article className="m-2 message is-danger">
                    <div className="message-body">
                        Error ingrese su nombre y apellido.
                    </div>
                </article>:
                ""
                }
            </div>
            <div className="field m-4">
                <label className="label" htmlFor="inputEdad">Edad</label>
                <div className="control">
                    <input
                        className={`input ${true ? "is-success" : "is-danger"}`}
                        value=""
                        type="number"
                        id="inputEdad"
                        placeholder="Ingrese edad..."
                    />
                </div>
                {!true ?
                <article className="m-2 message is-danger">
                    <div className="message-body">
                        Error ingrese su edad.
                    </div>
                </article>:
                ""
                }
            </div>
            <div className="field m-4">
                <label className="label" htmlFor="pokemon">Pokemon</label>
                <div className="control">
                    <div className={`select ${true ? "is-success" : "is-danger"}`}>
                        <select id="pokemon" value="">
                            <option value="">Seleccione un Pokemon</option>
                            <option value="Lucario">Lucario</option>
                            <option value="Charizard">Charizard</option>
                            <option value="Buizel">Buizel</option>
                        </select>
                    </div>
                    {!true?
                    <article className="m-2 message is-danger">
                        <div className="message-body">
                            Error eliga un pokemon.
                        </div>
                    </article>:
                    ""
                    }
                </div>
            </div>
            <div className="field m-4 is-grouped">
                <div className="control">
                    <button className="button is-link" type="submit">Enviar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light" type="reset">Cancelar</button>
                </div>
            </div>
        </form>
    );
}

export default Formulario
