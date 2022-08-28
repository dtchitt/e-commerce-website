import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { Form, Button } from "react-bootstrap";

const NavMenu: React.FC = () => {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
			collapseOnSelect
			fixed="top"
		>
			<Container fluid>
				<LinkContainer to="/">
					<Navbar.Brand className="ms-0">e-commerce</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					{/* <Nav className="mx-auto">
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
					</Nav> */}

					<Nav className="ms-auto me-3">
						<LinkContainer to="/login">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
						<LinkContainer
							to="/cart"
							className="d-flex justify-content-center"
						>
							<Nav.Link>
								<FiShoppingCart title="cart" size={24} />
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavMenu;
