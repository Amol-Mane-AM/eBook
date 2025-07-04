/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
 
import { Link } from 'react-router-dom';

function Product(props) {
    return (
        <>
            <div className="card" style={{ width: 340 }} id='card'>
                <img className="card-img-top" src={props.img1} alt="Card image" id="img1" />
                <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: "center" }}>{props.id}</h4>
                    <p className="card-text" style={{ textAlign: "center" }}>{props.name}</p>
                    <p className="card-text" style={{ textAlign: "center" }}>{props.price}</p>
                    <p className="card-text" style={{ textAlign: "center" }}>{props.category}</p>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">AddToCart</a>
                <Link to={`/readmore/${props.id}`}>ReadMore</Link>  
                </div>
            </div>
        </>
    );
}

export default Product;