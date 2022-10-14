import ProductCard from '../components/product/ProductCard';
import testImage from '../media/sample.png';

function Home() {
	return (
		<div>
			{/* <CardGroup className='shadow rounded' style={{ maxWidth: 'fit-content', margin: '0.5rem' }}> */}
			<ProductCard
				id={0}
				name={'GG Item'}
				description={
					'The best items around what if this is a really long sentence does it make the card grow? no it doesnt it extends it vertically, which is preferred The best items around what if this is a really long sentence does it make the card grow? no it doesnt it extends it vertically, which is preferred'
				}
				imgUrl={testImage}
				price={500000}
				maxWidth={40}
			/>

			<ProductCard
				id={0}
				name={'GG Item'}
				description={
					'ich is preferred The best items around what if this is a really long sentence does it make the card grow? no it doesnt it extends it vertically, which is preferred'
				}
				imgUrl={testImage}
				price={6969}
			/>

			<ProductCard
				id={0}
				name={'GG Item'}
				description={
					'The best items around what if this is a really long sentence sdFFFFFFASDGSDS D SDGSDSDDSBSDBBDSdoes it make the card grow? no it doesnt it extends it vertically, which is preferred The best items around what if this is a really long sentence does it make the card grow? no it doesnt it extends it vertically, which is preferred'
				}
				imgUrl={testImage}
				price={420.71}
			/>
			{/* </CardGroup> */}
		</div>
	);
}

export default Home;
