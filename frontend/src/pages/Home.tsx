import ProductCard from '../components/product/ProductCard';
import { CardGroup } from 'react-bootstrap';
import ProductCardCart from '../components/product/ProductCardCart';

function Home() {
	return (
		<div>
			<CardGroup className='shadow rounded' style={{ maxWidth: 'fit-content', margin: '0.5rem' }}>
				<ProductCard width={12} inGroup={true} />
				<ProductCard width={12} inGroup={true} />
			</CardGroup>
			<ProductCard width={12} inGroup={false} />
			<ProductCardCart width={48} height={8} />
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
