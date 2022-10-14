import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Badge, Carousel, CarouselItem } from 'react-bootstrap';
import ProductCard from '../components/product/ProductCard';
import myImage from '../media/sample.png';
import testImage from '../media/sample.png';

export default function Product() {
	const price = (onSale: boolean) => {
		if (onSale) {
			return (
				<h4>
					$XX.XX <Badge bg='warning'>SALE</Badge>
				</h4>
			);
		} else {
			return <h4>$XX.XX</h4>;
		}
	};

	return (
		<>
			<Container className=''>
				<Row className='justify-content-start mt-3'>
					<Col xs={2}>
						<h2 className='mb-0'>Product Title</h2>
						<p className='mt-0'>product number</p>
					</Col>
				</Row>
				<Row className='justify-content-start'>
					<Col xs={8} className='p-3'>
						<Carousel variant='dark' className='shadow'>
							<CarouselItem className=''>
								<Image src={myImage} alt='' className='d-block w-100 img-fluid' />
							</CarouselItem>

							<CarouselItem className=''>
								<Image src={myImage} alt='' className='d-block w-100 img-fluid' />
							</CarouselItem>

							<CarouselItem className=''>
								<Image src={myImage} alt='' className='d-block w-100 img-fluid' />
							</CarouselItem>
						</Carousel>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col xs={7}>
						<h3>Product Title</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur aut
							repellat ducimus pariatur molestias voluptatum ad distinctio. Aut magnam laboriosam
							deserunt labore illo sunt distinctio ipsa neque asperiores enim.
						</p>
					</Col>
					<Col xs={5}>
						{price(true)}
						<Button className='mt-2'>Add to Cart</Button>
					</Col>
				</Row>
				<Row
					className='shadow my-5 py-1 d-flex flex-nowrap'
					style={{ overflowX: 'scroll', height: '19rem' }}
				>
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
					<ProductCard id={0} name={'GG Item'} description={''} imgUrl={testImage} price={500000} />
				</Row>
			</Container>
		</>
	);
}
