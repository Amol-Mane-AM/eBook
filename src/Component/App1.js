import React from 'react';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import PaymentPage from './PaymentPage';



function App1() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    debugger;
    axios.get('http://localhost:8080/product/allprod')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4" style={{ color: 'white' }}>Loading products...</div>;
  if (error) return <div className="text-center p-4" style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div className="text-center p-4" style={{ color: 'white' }}>
      <h1>All Product</h1>
      <p>All Product List</p>
      <ProductList productdata={products} />
    </div>
  );
}



export default App1;
