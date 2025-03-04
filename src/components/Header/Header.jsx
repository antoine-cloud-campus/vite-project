import React from 'react';
import logo from '../../assets/man.webp';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.scss';

const Header = ({ cartCount }) => {
    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="logo" src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        🛒 Panier : <strong>{cartCount}</strong> article{cartCount > 1 ? "s" : ""}
                    </Navbar.Text>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
