import { Container, Row, Col } from 'react-bootstrap';

export default function Analytics() {
	return (
		<Container fluid>
			<Row className='d-flex justify-content-around px-3 pt-4'>
				<Col xs={8}>
					<Row className='p-0 m-0'>
						<Col className='bg-white rounded me-1 shadow' style={{ minHeight: '50vh' }}>
							graphs
						</Col>
					</Row>
					<Row className='p-0 m-0'>
						<Col className='bg-white mt-4 rounded me-1 shadow' style={{ minHeight: '30vh' }}>
							graph options
						</Col>
					</Row>
				</Col>
				<Col xs={4} className='bg-white rounded shadow'>
					graph insights
				</Col>
			</Row>
		</Container>
	);
}
