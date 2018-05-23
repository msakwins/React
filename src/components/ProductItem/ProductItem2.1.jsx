import React from 'react';
import PropTypes from 'prop-types';

function AddToCartButton() {
  return (
    <button>Add to cart</button>
  );
}

function Price(props) {
  return (
    <div>
      Le prix est de {props.price.toFixed(2)} {props.currency}
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

function ProductItem() {
  return (
    <div>
      <Price price={5.98989} currency="£" />
      <AddToCartButton />
    </div>
  );
}
export default ProductItem;
