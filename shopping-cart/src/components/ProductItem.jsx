import PropTypes from 'prop-types';

const ProductItem = ({ name, price, quantity, onIncrement, onDecrement }) => {
  const total = price * quantity;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-muted">${price.toFixed(2)} each</p>
          </div>
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-secondary btn-sm" 
              onClick={onDecrement}
              disabled={quantity <= 0}
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button 
              className="btn btn-outline-secondary btn-sm" 
              onClick={onIncrement}
            >
              +
            </button>
          </div>
          <div className="text-end">
            <p className="mb-0">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default ProductItem; 