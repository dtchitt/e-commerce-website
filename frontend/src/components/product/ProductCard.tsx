import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils';
import AdjustCartButton from '../cart/AdjustCartButton';

type ProductCardProps = {
	id: number;
	name: string;
	description: string;
	imgUrl: string;
	price: number;
	maxWidth?: number;
};

//TODO: Add sale visual
const ProductCard = ({ id, name, description, imgUrl, price, maxWidth }: ProductCardProps) => {
	const displayPage = () => (document.location.href = `/${name.replace(/\s/g, '')}`);
	const width: string = !maxWidth ? '14rem' : maxWidth + 'rem';
	const { getItemCount, increaseCartCount } = useCart();

	return (
		<Card className='p-2 shadow-sm grow' style={{ maxWidth: width }}>
			<Card.Img
				variant='top'
				src={`${imgUrl}`}
				height={Number(width) * (4 / 3) + 'rem'}
				style={{ objectFit: 'cover' }}
				className='rounded p-1 mb-1 border grow'
				alt={name}
				title={name}
			/>
			<Card.Body className='p-0'>
				<Container className='p-0 mb-1 mt-1 d-flex justify-content-between'>
					<Card.Title style={{ whiteSpace: 'nowrap' }}>{name}</Card.Title>
					<Card.Text>{formatCurrency(price)}</Card.Text>
				</Container>
				<Card.Subtitle>{description}</Card.Subtitle>
				{getItemCount(id) === 0 ? (
					<Button
						className='mt-1 w-100'
						style={{ width: '5rem', height: '2.5rem' }}
						title={name}
						onClick={() => increaseCartCount(id)}
					>
						Add to Cart
					</Button>
				) : (
					<AdjustCartButton id={id} />
				)}
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
