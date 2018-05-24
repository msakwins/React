import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button1 = styled.button`
display: inline-block;
border-radius: 2px;
width: 8rem;
height: 3rem;
background: #ffd644;
border: 2px blue;
font-family: "Verdana", "Geneva", sans-serif;
font-size: 16px;
color: white;
outline: none;
:hover {
    background: #758ff9;
  }
`;

const Img = styled.img`
height:52px;
width: 90px;
border: 2px solid #c0d190;
border-radius: 2px;
padding: 1rem;
padding-bottom: 1.3rem;
`;

const Struct = styled.div`
text-align: center;
display: inline-block;
margin-top: 3vw;
margin-left: 1vw;
margin-right: 1vw
margin-bottom: 2vw;
`;

const Item = styled.div`
background-color: white;
text-align: center;
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
    <Struct>
      <Item>
        <Img src={props.image} alt="Tomatoes" />
      </Item>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>{props.description}</div>
      <AddToCartButton />
    </Struct>
  );
}

ProductItem.propTypes = {
  image: PropTypes.any,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductItem;
