import ProductCard from '../components/product/ProductCard';
import { CardGroup } from 'react-bootstrap';

function Home() {
	return (
		<div>
			<CardGroup className='shadow rounded' style={{ maxWidth: 'fit-content', margin: '0.5rem' }}>
				<ProductCard width={12} inCard={true} />
				<ProductCard width={12} inCard={true} />
			</CardGroup>
			<ProductCard width={12} inCard={false} />
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>Home</h1>
			<h1>scrolling test</h1>
			<h1>scrolling test</h1>
			<h1>scrolling test</h1>
			<h1>scrolling test</h1>
			<h1>scrolling test</h1>
			<h1>scrolling test</h1>
			<h1>scrolling test</h1>
			<h1>scrolling test</h1>
			<h1>scrolling test</h1>
		</div>
	);
}

export default Home;
