import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H3 = styled.h3`
color: blue;
display: flex;
`;

const Button1 = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: tomato;
border: 2px red;
font-family: "Verdana", "Geneva", sans-serif;
color: white;
:hover {
    background: lightsalmon;
  }
  `;


function AddToCartButton() {
  return (
    <div>
      <Button1>Add to cart</Button1>
    </div>
  );
}

function ProductItem(props) {
  return (
    <div>
      <H3>{props.name}</H3>
      <span>{props.price}</span>
      <br />{props.description}
      <AddToCartButton />
    </div>
  );
}
ProductItem.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductItem;
