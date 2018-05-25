import React from 'react';
import styled from 'styled-components';
import ProductList from '../ProductList';
import Header from '../Header';

const All = styled.div`
width:100%;
`;

function Content() {
  return (
    <All>
      <Header />
      <ProductList />
    </All>
  );
}

export default Content;
