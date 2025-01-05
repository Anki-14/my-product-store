import PropTypes from 'prop-types';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price.toFixed(2)}</p>
      <div>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
