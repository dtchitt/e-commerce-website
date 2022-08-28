import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

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
					<Nav className="mx-auto">
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav className="ms-0">
						<LinkContainer to="/login">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/cart">
							<Nav.Link>
								<Image
									width="30"
									height="30"
									src={require("../media/shopping-cart.png")}
									fluid
									alt="cart"
								/>
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavMenu;
