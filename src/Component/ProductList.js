// src/pages/ProductList.js
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Product from "./Product";
import { ThemeContext } from '../Context/ThemeContext';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(ThemeContext);

  useEffect(() => {
    axios.get("http://localhost:8080/product/allprod")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(product => {
    debugger;
    if (!user) {
      return !product.user;
    }
    if (user.role === 'ADMIN') {
      return true;
    }
    return !product.user || product.user === user.username;
  });

  return (
    <div className="container mt-4">
  {filteredProducts.length === 0 ? (
    <div className="text-center text-muted fs-4 mt-5">
      📚 No books available.
    </div>
  ) : (
    <div className="row">
      {filteredProducts.map(product => (
        <div key={product.id} className="col-md-4">
          <Product product={product} />
        </div>
      ))}
    </div>
  )}
</div>

  );
}

export default ProductList;
