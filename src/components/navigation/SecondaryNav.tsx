import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import SearchBar from "./SearchBar";

//TODO
/**
 * Once we have a backend the links here should be redone to be dynamic based on analytics
 * For now, these are placeholders
 */

/**
 * Creates a navbar that has specific categories for the webshop.
 * When the screen is to small, the links turn into a dropdown menu and a search bar is added
 * This navbar IS NOT fixed to the top like the primary navbar is, it will be hidden when scrolling down the page
 */
const SecondaryNav: React.FC = () => {
	return (
		<Navbar
			collapseOnSelect
			bg="dark"
			variant="dark"
			className="d-block"
			expand="sm"
		>
			<Container fluid>
				<SearchBar bsStyle="d-sm-none d-inline-flex w-75" />
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="justify-content-center"
				>
					<Nav>
						<LinkContainer to="/category1">
							<Nav.Link>Popular #1</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/category2">
							<Nav.Link>Popular #2</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/category3">
							<Nav.Link>Popular #3</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/category4">
							<Nav.Link>Popular #4</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/category">
							<Nav.Link>Popular #5</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/category6">
							<Nav.Link>Popular #6</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default SecondaryNav;
