import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const SellerNavbar = () => {
	return (
		<Navbar bg='dark' variant='dark' sticky='top'>
			<Container fluid>
				<Navbar.Brand href='/seller'>
					<h1>My Store</h1>
				</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='products'>
						<h3>Products</h3>
					</Nav.Link>
					<Nav.Link href='analytics'>
						<h3>Analytics</h3>
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link>Logout</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default SellerNavbar;
