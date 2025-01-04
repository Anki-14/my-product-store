import { useState, useEffect } from 'react';
import { fetchProducts } from '../api/api';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import Header from '../components/Header'; // Import Header

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    getProducts();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Header onSearch={handleSearch} /> {/* Pass handleSearch to Header */}
      <ProductFilter products={products} setFilteredProducts={setFilteredProducts} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
