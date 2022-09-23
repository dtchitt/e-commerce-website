import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import SearchBar from './SearchBar';

/**
 * Creates the main navbar. This will always display the site brand, login, cart links no matter how small screen is.
 * When the screen is to small, the searchbar will dissapear (it is then shown in the secondary nav)
 */
const PrimaryNav = () => {
	return (
		<Navbar bg='dark' variant='dark' sticky='top' className='pb-0'>
			<Container fluid>
				<LinkContainer to='/'>
					<Navbar.Brand className='ms-0'>e-commerce</Navbar.Brand>
				</LinkContainer>
				<SearchBar bsStyle='d-none d-sm-inline-flex w-50 p3 m-auto' />
				<Nav className='me-3'>
					<LinkContainer to='/login' className='me-2'>
						<Nav.Link>Login</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/cart' className='d-flex justify-content-center'>
						<Nav.Link>
							<FiShoppingCart title='Shopping Cart' size={24} />
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default PrimaryNav;
