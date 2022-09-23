import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LinkItem from '../components/LinkItem';

function Cart() {
	return (
		<>
			<Container className='d-flex' style={{ marginTop: '5%' }}>
				<h3>Cart</h3>
				<LinkItem label={'Keep Shopping'} link={'/'} bsStyle='ms-auto nav'></LinkItem>
			</Container>
			<Container className='d-flex align-middle'>
				<Container className='bg-warning' style={{ width: '70vw' }}>
					<Stack gap={3}>
						<h1>hi</h1>
						<h1 className='bg-success'>hi</h1>
					</Stack>
				</Container>
				<Container style={{ width: '35vw' }}>
					<Row className='bg-transparent'>Cart</Row>
					<Row className='bg-warning'>
						<Col className='bg-success'>hi</Col>
						<Col className='bg-warning'>hi</Col>
						<Col className='bg-info d-flex justify-content-center'>hi</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}

export default Cart;