import { useState } from "react";

const Formulario = () => {
    const [usuarioDatos, setUsuarioDatos] = useState({
        nombreApellido: "",
        paisProvincia: "",
        color: ""
    });


    const [show, setShow] = useState(false);

    const [nombreApellidoValido, setNombreApellidoValido] = useState(-1);
    const [paisProvinciaValido, setPaisProvinciaValido] = useState(-1);
    const [colorValido, setColorValido] = useState(-1);

    const [nombreApellidoError, setNombreApellidoError] = useState(-1);
    const [paisProvinciaError, setPaisProvinciaError] = useState(-1);
    const [colorError, setColorError] = useState(-1);

    const resetFormulario = () => {
        setUsuarioDatos({
            nombreApellido: "",
            paisProvincia: "",
            color: ""
        });
        setNombreApellidoValido(-1);
        setPaisProvinciaValido(-1);
        setColorValido(-1);
        setNombreApellidoError(-1);
        setPaisProvinciaError(-1);
        setColorError(-1);
        setShow(false);
    };

    const handleChangeNombreApellido = (e) => {
        setUsuarioDatos({ ...usuarioDatos, nombreApellido: e.target.value });
        setNombreApellidoValido(validarNombreApellido(e.target.value));
        setNombreApellidoError(validarNombreApellido(e.target.value));
    };

    const handleChangePaisProvincia = (e) => {
        setUsuarioDatos({ ...usuarioDatos, paisProvincia: e.target.value });
        setPaisProvinciaValido(validarPaisProvincia(e.target.value));
        setPaisProvinciaError(validarPaisProvincia(e.target.value));
    };

    const handleChangeColor = (e) => {
        setUsuarioDatos({ ...usuarioDatos, color: e.target.value });
        setColorValido(validarColor(e.target.value));
        setColorError(validarColor(e.target.value));
    };

    const capitalizarTexto = (nombre) =>{
        return nombre.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }

    const validarNombreApellido = (nombreApellido) =>{
        const regex = /^([a-zA-Z]{2,}\s+){1,}[a-zA-Z]{2,}$/;
        let textoNormalizado = capitalizarTexto(nombreApellido.trim().toLowerCase());
        if (!regex.test(textoNormalizado)) {
            return 0;
        } else {
            return 1;
        }
    }

    const validarPaisProvincia = (nombreApellido) =>{
        const regex = /^([a-zA-Z]{2,}\s+){1,}[a-zA-Z]{2,}$/;
        let textoNormalizado = capitalizarTexto(nombreApellido.trim().toLowerCase());
        if (!regex.test(textoNormalizado || textoNormalizado.replace(/\s+/g, '').length < 6)) {
            return 0;
        } else {
            return 1;
        }
    }

    const validarColor = (color) => {
        if(color === "Rojo" || color === "Verde" || color === "Azul" || color === "Amarillo" || color === "Celeste"){
            return 1;
        }
        else{
            return 0;
        }
    };

    const validarEstilo = (valor) => {
        if(valor === 1){
            return "is-success";
        }else if( valor === 0){
            return "is-danger";
        }
        else{
            return "";
        }
    }

    const validarColorFondo = (color) =>{
        if(color === "Rojo"){
            return "has-background-danger";
        }else if(color === "Verde"){
            return "has-background-success";
        }
        else if(color === "Azul"){
            return "has-background-link";
        }
        else if(color === "Amarillo"){
            return "has-background-warning";
        }
        else if(color === "Celeste"){
            return "has-background-info";
        }else{
            return "";
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombreApellidoValido === 1 && paisProvinciaValido === 1 && colorValido === 1){
            setShow(true);
        }
        else{
            setShow(false);
            if(nombreApellidoValido === 0 || nombreApellidoValido === -1){
                setNombreApellidoError(0);
                setShow(false);
            }
            if(paisProvinciaValido === 0 || paisProvinciaValido === -1){
                setPaisProvinciaError(0);
                setShow(false);
            }
            if(colorValido === 0 || colorValido === -1){
                setColorError(0);
                setShow(false);
            }
        }
    };

    return (
        <div className="container is-max-tablet">
            {!show?
            <form onSubmit={handleSubmit}>
                <div className="field m-4">
                    <label className="label" htmlFor="inputNombreApelldo">Nombre y Apellido</label>
                    <div className="control">
                        <input
                            className={
                                `input ${validarEstilo(nombreApellidoError)}`}
                            value={usuarioDatos.nombreApellido}
                            type="text"
                            id="inputNombreApelldo"
                            onChange={handleChangeNombreApellido}
                            onBlur={handleChangeNombreApellido}
                            placeholder="Ingrese nombre y apellido..."
                        />
                    </div>
                    {nombreApellidoError === 0 ?
                    <article className="m-2 message is-danger">
                        <div className="message-body">
                            Error ingrese su nombre y apellido (minimo 3 caracteres).
                        </div>
                    </article>:
                    ""
                    }
                </div>
                <div className="field m-4">
                    <label className="label" htmlFor="inputPaisProvincia">Pais y Provincia</label>
                    <div className="control">
                        <input
                            className={`input ${validarEstilo(paisProvinciaError)}`}
                            value={usuarioDatos.paisProvincia}
                            type="text"
                            id="inputPaisProvincia"
                            onChange={handleChangePaisProvincia}
                            onBlur={handleChangePaisProvincia}
                            placeholder="Ingrese pais y provincia..."
                        />
                    </div>
                    {paisProvinciaError === 0 ?
                    <article className="m-2 message is-danger">
                        <div className="message-body">
                            Error ingrese su pais y provincia (minimo 6 caracteres).
                        </div>
                    </article>:
                    ""
                    }
                </div>
                <div className="field m-4">
                    <label className="label" htmlFor="elegirColor">Color</label>
                    <div className="control">
                        <div className={`select ${validarEstilo(colorError)}`}>
                            <select id="elegirColor" value={usuarioDatos.color} onChange={handleChangeColor} onBlur={handleChangeColor}>
                                <option value="">Seleccione un Color</option>
                                <option value="Rojo">Rojo</option>
                                <option value="Verde">Verde</option>
                                <option value="Azul">Azul</option>
                                <option value="Amarillo">Amarillo</option>
                                <option value="Celeste">Celeste</option>
                            </select>
                        </div>
                        {colorError === 0?
                        <article className="m-2 message is-danger">
                            <div className="message-body">
                                Error eliga un color.
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
                        <button className="button is-link is-light" type="reset" onClick={resetFormulario}>Cancelar</button>
                    </div>
                </div>
            </form>:
            <div className={`card ${validarColorFondo(usuarioDatos.color)} m-4`}>
                <div className="card-content">
                    <div className="content">
                        <p className="has-text-white">Nombre: {usuarioDatos.nombreApellido}</p>
                        <p className="has-text-white">Pais y Provincia: {usuarioDatos.paisProvincia}</p>
                        <p className="has-text-white">Color: {usuarioDatos.color}</p>
                    </div>
                    <div className="control">
                        <button className="button is-primary is-light" onClick={resetFormulario}>Volver a cargar datos</button>
                    </div>
                </div>
            </div>
        }
        </div>
    );
}

export default Formulario
