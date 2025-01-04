import PropTypes from 'prop-types';

const Header = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value); // Call the onSearch function passed as prop
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleInputChange}
      />
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
