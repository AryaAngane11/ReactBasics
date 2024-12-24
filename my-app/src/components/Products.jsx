import React, { useState, useEffect } from 'react';

const Products = () => {
  // Step 1: Initialize state for storing product details
  const [productDetails, setProductDetails] = useState([]);

  // Step 2: Fetch product data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products');
        const data = await response.json();
        if (data.status === 'SUCCESS') {
          setProductDetails(data.products); // Store fetched products in state
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="d-flex flex-wrap">
      {/* Step 3: Render products dynamically using map */}
      {productDetails.map((product) => (
        <div key={product.id} className="card m-3" style={{ width: '18rem' }}>
          <img src={product.image} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
