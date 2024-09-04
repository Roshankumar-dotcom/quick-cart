import React, { useState, useEffect } from "react";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
  };
  
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <div className="price-rating">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
