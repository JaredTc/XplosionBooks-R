/* import { Category } from "./categorias";
import {HomePage} from './Homepague'
import {DestadoPage} from './destacado2'
import {Footer} from  './footer' */
import { Link } from 'react-router-dom';
  export const Navbar = () =>{
    return (
          <nav className="navbar navbar-expand-lg  d-flex justify-content-end navbar-light bg-light">
        <div className="container-fluid  ">
          <a className="navbar-brand" to="/"><span className="titulo">Xplosion</span><span className="title2">Books</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link  className="nav-link active hov" aria-current="page" to="/Home"> Inicio</Link>
              </li>
              <li className="nav-item">
              <Link  className="nav-link active hov" aria-current="page" to="/category"> Categorias</Link>
              </li>
              <li className="nav-item">
              <Link  className="nav-link active hov" aria-current="page" to="/contact"> Contactanos</Link>
              </li>
              <li className="nav-item">
              <Link  className="nav-link active hov" aria-current="page" to="/registro"> Registro</Link>
              </li>
              <li className="nav-item">
              <Link  className="nav-link active hov" aria-current="page" to="/start"> Iniciar Sesion</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled">Perfil</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
            </form>
          </div>
  
        </div>
      </nav>
   
      );
    }
    
  