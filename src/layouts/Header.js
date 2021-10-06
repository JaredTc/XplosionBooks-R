
export const Header =() =>{
    return(
 <nav className="navbar navbar-expand-lg  d-flex justify-content-end navbar-light bg-light">
  <div className="container-fluid  ">
    <a className="navbar-brand" href="#">XplosionBooks</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Categorias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contactanos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Registrarse</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Iniciar Sesion</a>
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