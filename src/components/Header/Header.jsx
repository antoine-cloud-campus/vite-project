import React from 'react'
import logo from '../../assets/man.webp'
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='logo' src={logo}></img>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
