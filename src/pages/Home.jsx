// src/pages/Home.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

const Home = ({ onAddToCart, onViewDetails }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
      const uniqueCategories = [...new Set(data.map((product) => product.category))];
      setCategories(uniqueCategories);
    };
    loadProducts();
  }, []);

  const handleFilter = (category) => {
    if (category) {
      setFilteredProducts(products.filter((product) => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSort = (sortType) => {
    const sorted = [...filteredProducts];
    if (sortType === "priceLowHigh") sorted.sort((a, b) => a.price - b.price);
    if (sortType === "priceHighLow") sorted.sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  return (
    <div>
      <ProductFilter categories={categories} onFilter={handleFilter} onSort={handleSort} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default Home;
