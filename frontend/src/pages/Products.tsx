import ProductCard from '../components/product/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import testImage from '../media/sample.png';

export default function Products() {
	return (
		<Container fluid className=''>
			<Row>
				<Col xs={1}></Col>
				<Col className='text-center'>
					<ProductCard id={0} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
					<ProductCard id={1} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
					<ProductCard id={2} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
					<ProductCard id={3} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
					<ProductCard id={4} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
					<ProductCard id={5} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
					<ProductCard id={6} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
					<ProductCard id={7} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
					<ProductCard id={8} name={'yo'} description={'yo'} imgUrl={testImage} price={0} />
				</Col>
				<Col xs={1}></Col>
			</Row>
		</Container>
	);
}
