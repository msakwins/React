import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem';


function ProductList(props) {
  console.log(props.prodList);
  return (
    props.prodList.map((prod) => (<ProductItem product={prod} />))
  );
}
ProductList.propTypes = {
  prodList: PropTypes.array.isRequired,
};
export default ProductList;
