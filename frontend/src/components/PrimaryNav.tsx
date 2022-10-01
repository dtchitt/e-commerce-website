import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { FiShoppingCart, FiX } from 'react-icons/fi';
import SearchBar from './SearchBar';

/**
 * Creates the main navbar. This will always display the site brand, login, cart links no matter how small screen is.
 * When the screen is to small, the searchbar will dissapear (it is then shown in the secondary nav)
 */
const PrimaryNav = () => {
	return (
		<Navbar bg='dark' variant='dark' sticky='top' className='pb-0'>
			<Container fluid className='px-0'>
				<LinkContainer className='ps-2' to='/'>
					<Navbar.Brand className='ms-0'>e-commerce</Navbar.Brand>
				</LinkContainer>
				<SearchBar bsStyle='d-none d-sm-inline-flex w-50 p3 m-auto' />
				<Nav style={{ marginRight: '0.70rem', position: 'relative', marginBottom: '1rem' }}>
					<LinkContainer to='/login'>
						<Nav.Link>Login</Nav.Link>
					</LinkContainer>
					<Container className='px-0'>
						<LinkContainer to='/cart' className='d-flex justify-content-center'>
							<Nav.Link>
								<FiShoppingCart title='Shopping Cart' size={24}></FiShoppingCart>
							</Nav.Link>
						</LinkContainer>
						<Container
							className='position-absolute px-0 d-flex justify-content-center align-items-center rounded-circle'
							style={{ width: '1.5rem', top: '1.3rem', left: '4.75rem', backgroundColor: 'aqua' }}
						>
							111
						</Container>
					</Container>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default PrimaryNav;
