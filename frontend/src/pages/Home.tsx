import ProductCard2 from '../components/product/ProductCard2';
import testImage from '../media/sample.png';

function Home() {
	return (
		<div>
			{/* <CardGroup className='shadow rounded' style={{ maxWidth: 'fit-content', margin: '0.5rem' }}>
				<ProductCard width={12} inGroup={true} />
				<ProductCard width={12} inGroup={true} />
			</CardGroup>
			<ProductCard width={12} inGroup={false} /> */}
			<ProductCard2
				id={0}
				name={'GG Item'}
				description={
					'The best items around what if this is a really long sentence does it make the card grow? no it doesnt it extends it vertically, which is preferred'
				}
				imgUrl={testImage}
				itemUrl={'/'}
				price={5.99}
			/>
			{/* <ProductCardCart width={48} height={8} /> */}
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
