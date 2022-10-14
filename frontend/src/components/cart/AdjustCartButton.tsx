import { Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

type AdjustCartButtonProps = {
	id: number;
};

const AdjustCartButton = ({ id }: AdjustCartButtonProps) => {
	const { getItemCount, increaseCartCount, decreaseCartCount, removeFromCart } = useCart();

	return (
		<div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
			<div className='d-flex align-items-center' style={{ gap: '.5rem' }}>
				<Button title='remove' onClick={() => decreaseCartCount(id)} style={{ width: '2rem' }}>
					-
				</Button>
				<span className='fs-4'>{getItemCount(id)}</span>
				in cart
				<Button
					title='add'
					onClick={() => increaseCartCount(id)}
					style={{ width: '2rem', paddingLeft: '0.563rem' }}
				>
					+
				</Button>
			</div>
			<Button title='remove' variant='danger' size='sm' onClick={() => removeFromCart(id)}>
				Remove From Cart
			</Button>
		</div>
	);
};

export default AdjustCartButton;
