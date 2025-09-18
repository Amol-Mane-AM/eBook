// src/components/Product.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import defaultImg from '../img/Productimgcolour.webp';
import { ThemeContext } from '../Context/ThemeContext';

function Product({ product }) {
  const navigate = useNavigate();
  const { user } = useContext(ThemeContext);

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login'); // Redirect to login if user not logged in
    } else {
      navigate(`/productview/${product.id}`); // Navigate to Booking Page
    }
  };

  return (
    <div className="card product-card shadow rounded"
      style={{ width: '18rem', margin: '1rem', backgroundColor: '#bdd8f2' }}>
      <img
        src={product.imageUrl || defaultImg}
        className="card-img-top"
        alt={product.name || 'Product'}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.category || 'No description'}</p>
        <p className="text-success fw-bold">₹{product.price?.toFixed(2)}</p>
          <p className="card-text">{product.user || 'No User'}</p>
        {/* ✅ Always show Buy Now button */}
       {(!product.user && user?.role !== 'ADMIN') && (
  <button className="btn btn-primary w-100 mt-2" onClick={handleBuyNow}>
    Buy Now
  </button>
)}

      </div>
    </div>
  );
}

export default Product;
