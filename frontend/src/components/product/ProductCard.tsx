import Card from 'react-bootstrap/Card';
import '../../styles/Effects.css';
import '../../styles/ProductCard.css';

//card with image placed on top along with price, description, and title below
function ProductCard(props: { width: number; inGroup: boolean }) {
	const width = props.width + 'rem';
	const height = props.width * (4 / 3) + 'rem';
	const displayPage = () => {
		document.location.href = '/product';
	};

	return (
		<Card
			onClick={displayPage}
			className={props.inGroup ? 'p-2 shade inGroup' : 'p-2 shadow-sm grow notInGroup'}
			style={{ width: width, height: height, maxWidth: width, maxHeight: height }}
		>
			<Card.Img
				width='80%'
				height='60%'
				className={props.inGroup ? 'grow rounded p-1 mb-0 border' : 'rounded p-1 mb-0 border'}
				variant='top'
				src='#'
				alt='img'
			/>
			<Card.Body className='p-0'>
				<Card.Title>Product</Card.Title>
				<Card.Subtitle>Description description description</Card.Subtitle>
				<Card.Text className='mt-0'>$XX.XX</Card.Text>
			</Card.Body>
		</Card>
	);
}
export default ProductCard;
