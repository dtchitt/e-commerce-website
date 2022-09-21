import Card from 'react-bootstrap/Card';
import '../../styles/Effects.css';
import '../../styles/ProductCard.css';
import sampleImage from '../../media/productSample.png';

type ProductCardProps = {
	width: number;
	inGroup: boolean;
};

//card with image placed on top along with price, description, and title below
function ProductCard({ width, inGroup }: ProductCardProps) {
	const widthREM = width + 'rem';
	const heightREM = width * (4 / 3) + 'rem';

	const displayPage = () => {
		document.location.href = '/product';
	};

	return (
		<Card
			onClick={displayPage}
			className={inGroup ? 'p-2 shade inGroup' : 'p-2 shadow-sm grow notInGroup'}
			style={{ width: widthREM, height: heightREM, maxWidth: widthREM, maxHeight: heightREM }}
		>
			<Card.Img
				width='80%'
				height='60%'
				style={{ objectFit: 'cover' }}
				className={inGroup ? 'shadow grow rounded p-0 mb-0' : 'shadow rounded p-0 mb-0'}
				variant='top'
				src={sampleImage}
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
