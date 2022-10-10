import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import SellerNavbar from './SellerNavbar';
import { Outlet } from 'react-router-dom';
import './styles/cms.css';

const SellerNavigation = () => {
	return (
		<div className='cms-background' style={{ minHeight: '100vh' }}>
			<SellerNavbar />
			<Outlet />
		</div>
	);
};

export default SellerNavigation;
