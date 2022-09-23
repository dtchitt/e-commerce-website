import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const LinkItem = ({ label, link, bsStyle }: { label: string; link: string; bsStyle?: string }) => {
	return (
		<LinkContainer to={link} className={bsStyle}>
			<Nav.Link>{label}</Nav.Link>
		</LinkContainer>
	);
};

export default LinkItem;