import { Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

type AdjustCartButtonProps = {
	id: number;
};

const AdjustCartButton = ({ id }: AdjustCartButtonProps) => {
	const { getItemCount, increaseCartCount, decreaseCartCount, removeFromCart } = useCart();

	return (
		<div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
			<div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
				<Button title='remove' onClick={() => decreaseCartCount(id)}>
					-
				</Button>
				<>
					<span className='fs-3'>{}</span>
					{getItemCount(id)} in cart
				</>
				<Button title='add' onClick={() => increaseCartCount(id)}>
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
