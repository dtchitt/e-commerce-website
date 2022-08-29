import Card from 'react-bootstrap/Card';
import './ProductCard.css';

function ProductCard(){
  return(
    <Card className='p-2 shadow grow' style={{ width: '12rem', height: '16rem', margin: '0.5rem' }}>
      <Card.Img width='80%' height='60%' className='rounded p-1 shadow-sm mb-0 border' variant="top" src="#" alt="img"/>
      <Card.Body className='p-0'>
        <Card.Title>Product</Card.Title>
        <Card.Subtitle>Description description description</Card.Subtitle>
        <Card.Text className='mt-0'>
          $XX.XX
        </Card.Text>
      </Card.Body>
    </Card>

  );

}
export default ProductCard;