import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import squirtle from '../../public/squirtle.png';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar sticky='top' bg='dark' variant='dark' className="mb-4">
      <Container>
        <Navbar.Brand>
          <Image src={squirtle} width="30" className="me-2" />
          Pokeverse
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Link to="/" className="nav-link">All Pokemon</Link>
          <Link to="/favorites" className="nav-link">My Deck</Link>
          {/* <Nav.Link href='/' as={Link}>All Pokemon</Nav.Link>
          <Nav.Link href='/favorites' as={Link}>My Deck</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };
