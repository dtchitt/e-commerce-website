import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const MainNav: React.FC = () => {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			collapseOnSelect
			fixed="top"
			expand="sm"
		>
			<Container fluid>
				<LinkContainer to="/">
					<Navbar.Brand className="ms-0">e-commerce</Navbar.Brand>
				</LinkContainer>
				<Form className="d-flex w-50 p3 m-auto">
					<Form.Control
						type="search"
						placeholder="Search"
						className="me-0 rounded-0 rounded-start border-0 shadow-none"
						aria-label="Search"
					/>
					<Button
						variant="light"
						className="rounded-0 rounded-end shadow-none"
					>
						Search
					</Button>
				</Form>
				<Nav className="me-3">
					<LinkContainer to="/login" className="me-2">
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
			</Container>
		</Navbar>
	);
};

export default MainNav;
