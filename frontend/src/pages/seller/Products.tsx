import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { getReq } from '../../hooks/sendRequest';
import './styles/cms.css';

const Product = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getResult();
	}, []);

	const getResult = async () => {
		setProducts(await getReq('/seller/user/2/products'));
	};

	console.log(products);
	return (
		<Container fluid className=''>
			<Row>
				<Col xs={3} className='px-5 py-4 d-flex justify-content-around'>
					<Button className='px-4'>NEW</Button>
					<Button className='px-4'>SORT</Button>
				</Col>
				<Col></Col>
				<Col xs={3} className='px-5 py-4 d-flex justify-content-around'>
					<Button className='px-4'>EDIT</Button>
					<Button variant='danger' className='px-4'>
						DELETE
					</Button>
				</Col>
			</Row>
			<Row className='d-flex justify-content-around'>
				<Col xs={8} className='bg-white shadow mt-2 rounded' style={{ minHeight: '70vh' }}></Col>
				<Col xs={3} className='bg-white shadow mt-2 rounded' style={{ minHeight: '70vh' }}></Col>
			</Row>
		</Container>
	);
};

export default Product;
