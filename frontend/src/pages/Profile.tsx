import React from 'react';
import { Button, Image, Container, Row, Col } from 'react-bootstrap';
import sampleImage from '../media/profileSample.png';

export default function Profile() {
	return (
		<Container className='py-4'>
			<Row>
				{/* left side: */}
				<Col xs={6} className='text-center'>
					<Image
						src={sampleImage}
						width={400}
						height={400}
						className='shadow border border-dark rounded-circle'
					/>
					<Row>
						<Col xs={10} className='my-3 mx-auto'>
							<h3 className='shadow rounded'>USERNAME</h3>
							<h3 className='shadow rounded'>EMAIL</h3>
							<Button variant='primary' className='shaodow'>
								Edit Profile
							</Button>
						</Col>
					</Row>
				</Col>
				{/* Right Side */}
				<Col className='p-3 bg-secondary rounded'>
					<Row className='d-flex justify-content-around my-3' style={{ height: '45%' }}>
						<Col xs={5} className='bg-light rounded shadow' style={{ width: '45%' }}>
							hello
						</Col>
						<Col xs={5} className='bg-light rounded shadow' style={{ width: '45%' }}>
							hello
						</Col>
					</Row>
					<Row className='d-flex justify-content-around my-3' style={{ height: '45%' }}>
						<Col xs={5} className='bg-light rounded shadow' style={{ width: '45%' }}>
							<Col xs={10} className='my-3 text-center mx-auto'>
								<h3 className='shadow'>SHIPPING ADDRESS</h3>
								<h3 className='shadow'>PAYMENT METHOD</h3>
								<Button variant='primary' className='shaodow'>
									EDIT BILLING/SHIPPING
								</Button>
							</Col>
						</Col>
						<Col xs={5} className='bg-light rounded shadow' style={{ width: '45%' }}>
							hello
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}
