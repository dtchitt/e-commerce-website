import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from './SearchBar';

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
const SecondaryNav = () => {
	return (
		<Navbar collapseOnSelect bg='dark' variant='dark' expand='sm'>
			<SearchBar bsStyle='d-sm-none d-inline-flex w-75' />
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-center'>
				<Nav className='float-end'>
					<LinkContainer to='/product'>
						<Nav.Link>Products</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/'>
						<Nav.Link>Category #2</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/'>
						<Nav.Link>Category #3</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/'>
						<Nav.Link>Category #4</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/'>
						<Nav.Link>Category #5</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/'>
						<Nav.Link>Category #6</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default SecondaryNav;
