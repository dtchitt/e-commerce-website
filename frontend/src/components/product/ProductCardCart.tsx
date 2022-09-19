import React from 'react';
import { Card } from 'react-bootstrap';
export default function ProductCardCart(props: { width: number }) {
	const width = props.width + 'rem';
	return (
		<Card style={{ width: width }}>
			<Card.Text>test</Card.Text>
		</Card>
	);
}
