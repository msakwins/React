import React from 'react';

function AddToCartButton() {
  return (
    <button>Add to cart</button>
  );
}

function Price() {
  return (
    <div>5£</div>
  );
}

function ProductItem() {
  return (
    <div>
      <Price />
      <AddToCartButton />
    </div>
  );
}
export default ProductItem;
