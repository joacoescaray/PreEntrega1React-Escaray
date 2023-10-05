import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import CartWidget from '../cartwidget/cartwidget';
import imagenCarrito from '../../assets/img/logo 9z.png';

const navItemStyle = {
    fontSize: '20px',
    color: 'white',
};

const navbarStyle = {
    width: '100%',
    margin: '0 auto',
};

const AppNavbar = () => {
    const cantidadProductosEnCarrito = 5;

    return (
        <Navbar bg="dark" expand="lg" variant="dark" style={navbarStyle}>
            <Container fluid>
                <Nav className="d-flex justify-content-around w-100">
                    <Nav.Link style={navItemStyle} href="/productos">Productos</Nav.Link>
                    <Nav.Link style={navItemStyle} href="/contactos">Contactos</Nav.Link>
                    <NavDropdown title={
                        <>
                            <img src={imagenCarrito} alt="Carrito" style={{ width: '50px', height: '50px' }} />
                        </>
                    } id="basic-nav-dropdown" style={navItemStyle}>
                        <NavDropdown.Item href="/inicio">Inicio</NavDropdown.Item>
                        <NavDropdown.Item href="/configuracion">Configuracion</NavDropdown.Item>
                        <NavDropdown.Item href="/ayuda">Ayuda</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link style={navItemStyle} href="/novedades">Novedades</Nav.Link>
                    <Nav.Link style={navItemStyle} href="/carrito">
                        <CartWidget cantidad={cantidadProductosEnCarrito} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
