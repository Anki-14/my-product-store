// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Header from './components/Header';
import { CartContextProvider } from './context/CartContext'; // Correct import

const App = () => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <CartContextProvider> {/* Wrap the app with CartContextProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
};

export default App;
