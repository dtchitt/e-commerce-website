import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard.css';

function ProductCard(){
  return(
      <div id="card" className="container-fluid shadow m-1 p-2 text-center rounded">
        <div className="row mx-auto image-container shadow bg-light rounded grow">
        </div>
        <div className="row mt-1">
          <div className="col-7">
            <h4>Title</h4>
          </div>
          <div className="col-5">
            <p>msg</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <h5>$xx.xx</h5>
          </div>
        </div>
      </div>
  );

}
export default ProductCard;