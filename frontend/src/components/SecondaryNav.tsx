import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkList from './LinkList';
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
		<Navbar collapseOnSelect bg='dark' variant='dark' expand='sm' className='shadow pt-0'>
			<SearchBar bsStyle='d-sm-none d-inline-flex w-75' />
			<Navbar.Toggle aria-controls='responsive-navbar-nav' className='me-2 px-1 py-0 mt-1' />
			<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-center'>
			<Nav className='float-end'>{<LinkList />}</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default SecondaryNav;
