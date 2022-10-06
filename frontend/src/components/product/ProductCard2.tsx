import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../../styles/Effects.css';
import '../../styles/ProductCard.css';

type ProductCardProps = {
	id: number;
	name: string;
	description: string;
	imgUrl: string;
	itemUrl: string;
	price: number;
};

const ProductCard = ({ id, name, description, imgUrl, itemUrl, price }: ProductCardProps) => {
	const displayPage = () => {
		document.location.href = `${itemUrl}`;
	};
	return (
		<Card onClick={displayPage} className='p-2 shadow-sm grow' style={{ maxWidth: '12rem' }}>
			<Card.Img
				variant='top'
				src={imgUrl}
				height='150px'
				style={{ objectFit: 'fill' }}
				className='rounded p-1 mb-0 border grow'
			/>
			<Card.Body className='p-0'>
				<Container className='p-0 mb-2 mt-1 d-flex justify-content-between'>
					<Card.Title>{name}</Card.Title>
					<Button></Button>
					<Card.Text>{price}</Card.Text>
				</Container>
				<Card.Subtitle>{description}</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
