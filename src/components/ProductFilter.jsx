import PropTypes from 'prop-types';

const ProductFilter = ({ categories, onFilter, onSort }) => {
  return (
    <div>
      <select onChange={(e) => onFilter(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => onSort('asc')}>Sort Asc</button>
      <button onClick={() => onSort('desc')}>Sort Desc</button>
    </div>
  );
};

ProductFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default ProductFilter;
