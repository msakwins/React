import React from 'react';
import PropTypes from 'prop-types';

function AddToCartButton() {
  return (
    <button>Add to cart</button>
  );
}

function Data(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <span>{props.price}</span>
      <br />{props.description}
    </div>
  );
}

Data.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function ProductItem(props) {
  return (
    <div>
      <Data
        name={props.product.name}
        key={props.product.id}
        price={props.product.price}
        description={props.product.description}
      />
      <AddToCartButton />
    </div>
  );
}
ProductItem.propTypes = {
  product: PropTypes.object,
};
export default ProductItem;
