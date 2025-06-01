
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

function NavBar(){

  return(
    <>
        <Navbar  expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand> Gestión Alumnos </Navbar.Brand>
              <Navbar.Toggle aria-controls="bsic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavDropdown title="Seleccione Tarea" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/"       >       Inicio           </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/alumnos">       Lista de Alumnos </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/alumnos/nuevo"> Nuevo Alumno     </NavDropdown.Item>
                      <NavDropdown.Divider/>
                      <NavDropdown.Item as={Link} to="/acerca">        Acerca de        </NavDropdown.Item>    
                    </NavDropdown>

                  </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        <section>
          <Outlet></Outlet>
        </section>
    </>
  );
}

export default NavBar;
