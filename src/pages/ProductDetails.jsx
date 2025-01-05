// src/pages/ProductDetails.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchProductDetails } from "../api/api.js";

const ProductDetails = ({ productId, onAddToCart }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      const data = await fetchProductDetails(productId);
      setProduct(data);
    };
    loadProductDetails();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

ProductDetails.propTypes = {
  productId: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
