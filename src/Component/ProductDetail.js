import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../useApi'; 
import { useNavigate } from 'react-router-dom';

function ProductDetail() {

const param = useParams();

const {Product:props,loading:load} = useApi(`http://localhost:3000/products/${param.id}`);

console.log(props, load);

const nevigate = useNavigate();

    return (
        <>
        <marquee><h1>Product Detail</h1></marquee>
            <div className="card" style={{ width: 350,marginLeft: "450px" }} id='card'>
                <img className="card-img-top" src={props.img1} alt="Card image" id="img1" />
                <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: "center" }}>{props.id}</h4>
                    <p className="card-text" style={{ textAlign: "center" }}>{props.name}</p>
                    <p className="card-text" style={{ textAlign: "center" }}>{props.price}</p>
                    <p className="card-text" style={{ textAlign: "center" }}>{props.category}</p>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">AddToCart</a>
                  <button className="btn btn-secondary" style={{ marginLeft: "166px" ,marginTop: "-61px" }}
                  onClick={() =>{
                    setTimeout(() => {
                      nevigate('/product');
                    }, 500);
                  } 
                  }>
                  GoBack</button>
                </div>
            </div>
            
        </>
    );
}

export default ProductDetail;