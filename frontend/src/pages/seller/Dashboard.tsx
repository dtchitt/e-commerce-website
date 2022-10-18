import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
	return (
		<Container fluid className=''>
			<Row className='d-flex justify-content-around'>
				<Col xs={8} className='bg-white shadow mt-2 rounded' style={{ minHeight: '85vh' }}></Col>
				<Col xs={3} className='bg-white shadow mt-2 rounded' style={{ minHeight: '85vh' }}></Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
