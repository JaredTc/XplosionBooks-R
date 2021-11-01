import '../style/inicio_sesion.css'
import login from '../assets/inicio_sesion/login.png'

export const IniciarSesion=()=>{
    return(
    <div className="container d-flex justify-content-center" id="tarjeta-inicio">
        <div className="contenedor">
            <div className="card mb-3 p-4 border-light ">
                <div className="row g-0">
                    <div className="col-md-6 im">
                        <img src={login} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h1 className="card-title">Iniciar Sesión</h1>
                            <p>Rellene los campos correctamente</p>
                            <form onsubmit="iniciarSesion(event)">
                                <div className="mb-3">
                                    <label for="InputEmail1" className="form-label">Correo Electronico</label>
                                    <input type="email" className="form-control" id="InputEmail1"
                                        aria-describedby="emailHelp" required />
                                    <div id="emailHelp" className="form-text">@example.com
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="InputPassword1" className="form-label">Contraseña</label>
                                    <input type="password" id="InputPassword1" className="form-control"  required />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Recuerdame</label>
                                </div>
                                <button type="submit"
                                    className="btn btn-primar">Ingresar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}