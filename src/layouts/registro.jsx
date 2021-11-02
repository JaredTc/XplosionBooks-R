import '../style/inicio_sesion.css'
import sentado from '../assets/registro/sentado.jpg'

export const Registro=()=>{
    return(
    <div className="container d-flex justify-content-center" id="tarjeta-inicio">
        <div className="contenedor">
            <div className="card mb-3 p-4 border-light ">
                <div className="row g-0">
                    <div className="col-md-6 im">
                        <img src={sentado} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h1 className="card-title">Formulario de Registro</h1>
                            <form onsubmit="Registro(event)">
                                <div className="mb-3">
                                    <label for="InputNombre" className="form-label">Nombre (s):</label>
                                    <input type="text" className="form-control" id="InputNombre"/>  
                                </div>
                                <div className="mb-3">
                                    <label for="InputApellido" className="form-label">Apellido (s):</label>
                                    <input type="text" id="InputApellido" className="form-control"  required />
                                </div>
                                <div className="mb-3">
                                    <label for="InputCelular" className="form-label">Celular:</label>
                                    <input type="number" id="InputCelular" className="form-control"  required />
                                </div>
                                
                                <div className="mb-3">
                                    <label for="InputEmail1" className="form-label"> Correo Electrónico:</label>
                                    <input type="email" className="form-control" id="InputEmail1"
                                        aria-describedby="emailHelp" required />
                                    <div id="emailHelp" className="form-text">@example.com
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="InputPassword1" className="form-label">Contraseña:</label>
                                    <input type="password" id="InputPassword1" className="form-control"  required />
                                </div>
                                <button type="submit"
                                    className="btn btn-primar">Registrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}