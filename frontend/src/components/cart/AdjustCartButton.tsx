import { Button, Card } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils';

type AdjustCartButtonProps = {
	id: number;
	price: number;
};

const AdjustCartButton = ({ id, price }: AdjustCartButtonProps) => {
	const { getItemCount, increaseCartCount, decreaseCartCount, removeFromCart } = useCart();

	return (
		<div className='d-flex align-items-center flex-column' style={{ gap: '.2rem' }}>
			<div className='d-flex align-items-center' style={{ gap: '.5rem' }}>
				<Button title='remove' onClick={() => decreaseCartCount(id)} style={{ width: '2rem' }}>
					-
				</Button>
				<div className='text-nowrap'>{`${getItemCount(id)}\nin cart`}</div>
				<Button
					title='add'
					onClick={() => increaseCartCount(id)}
					style={{ width: '2rem', paddingLeft: '0.563rem' }}
				>
					+
				</Button>
				<Card.Text>{formatCurrency(price)}</Card.Text>
			</div>
			<Button
				title='remove'
				variant='danger'
				size='sm'
				className='align-self-start'
				onClick={() => removeFromCart(id)}
			>
				Remove From Cart
			</Button>
		</div>
	);
};

export default AdjustCartButton;
