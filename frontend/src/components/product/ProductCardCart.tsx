import React from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import '../../styles/Effects.css';
import sampleImage from '../../media/productSample.png';

type ProductCardCartProps = {
	width: number;
	height: number;
};

export default function ProductCardCart({ width, height }: ProductCardCartProps) {
	const widthREM = width + 'rem';
	const heightREM = height + 'rem';
	const imgSizeREM = height * 0.8 + 'rem';

	const displayPage = () => {
		document.location.href = '/product';
	};

	return (
		<Card className='shadow m-2' style={{ width: widthREM, height: heightREM }}>
			<Row className='p-0 w-100 h-100'>
				<Col xs={8}>
					<Row className='grow-sm p-0 w-100 h-100'>
						<Col onClick={displayPage} xs={4} className='px-4 d-flex align-items-center'>
							<Card.Img
								width={imgSizeREM}
								height={imgSizeREM}
								style={{
									minWidth: imgSizeREM,
									minHeight: imgSizeREM,
									maxWidth: imgSizeREM,
									maxHeight: imgSizeREM,
									objectFit: 'cover',
								}}
								className='rounded p-0 mb-0 shadow'
								src={sampleImage}
								alt='img'
							/>
						</Col>
						<Col onClick={displayPage} className='px-0 d-flex align-items-center' xs={8}>
							<Card.Body className='text-left'>
								<Card.Title>Product Title</Card.Title>
								<Card.Subtitle>Product Variation Info</Card.Subtitle>
							</Card.Body>
						</Col>
					</Row>
				</Col>
				<Col xs={3}></Col>
				<Col className='px-0 d-flex align-items-center' xs={1}>
					<Row>
						<Col>
							<p>$XX.XX</p>
						</Col>
						<Col>
							<Form>
								<Form.Label>Quantity</Form.Label>
								<Form.Control type='number' />
							</Form>
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
}
