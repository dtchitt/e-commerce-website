import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import SellerNavbar from './SellerNavbar';
import { Outlet } from 'react-router-dom';

const SellerNavigation = () => {
	return (
		<>
			<SellerNavbar />
			<Outlet />
		</>
	);
};

export default SellerNavigation;
