import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Frost-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'} to="/">Home</NavLink>
                        <NavDropdown title="Servicios" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Instalaciones
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Matenimiento preventivo
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Servicio técnico
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Venta de equipos
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'} to="/category/Inverter">Inverter</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'} to="/category/Frio-Calor">Frio-Calor</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Link to='/detail'>
                <CartWidget />
            </Link>
        </Navbar>
    );
}