import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavMenu: React.FC = () => {
  return (
	<Navbar bg='dark' variant='dark' expand='lg' fixed='top' collapseOnSelect>
		<Container fluid>
			<Navbar.Brand as={Link} to='/'>e-commerce</Navbar.Brand>
			<Navbar.Toggle  aria-controls='responsive-navbar-nav'/>
			<Navbar.Collapse id="responsive-navbar-nav">


			</Navbar.Collapse>
		</Container>
	</Navbar>
  )
}

export default NavMenu