import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import sampleImage from '../media/profileSample.png';

export default function Profile() {
	return (
		<Container>
			<Row className='w-100 h-100 p-0 m-0'>
				<Col xs={6}>
					<Image
						src={sampleImage}
						width={400}
						height={400}
						className='shadow border border-dark rounded-circle'
					/>
				</Col>
				<Col xs={6}></Col>
			</Row>
		</Container>
	);
}
