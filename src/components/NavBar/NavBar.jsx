import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Frost-App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Servicios
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Instalaciones</a></li>
                            <li><a className="dropdown-item" href="#">Matenimiento preventivo</a></li>
                            <li><a className="dropdown-item" href="#">Servicio técnico</a></li>
                            <li><a className="dropdown-item" href="#">Venta de equipos</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Quienes somos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <CartWidget/>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar