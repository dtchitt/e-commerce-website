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
				onClick={displayPage}
			/>
			<Card.Body className='p-0'>
				<Card.Title className='py-1 m-0'>{name}</Card.Title>
				<Card.Subtitle>{description}</Card.Subtitle>
				{getItemCount(id) === 0 ? (
					<div className='d-flex text-center text-nowrap justify-content-between align-items-baseline'>
						<Button
							className='mt-1'
							style={{ width: '60%', height: '2rem' }}
							title={name}
							onClick={() => increaseCartCount(id)}
						>
							Add to Cart
						</Button>
						<Card.Text>{formatCurrency(price)}</Card.Text>
					</div>
				) : (
					<AdjustCartButton id={id} price={price} />
				)}
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
