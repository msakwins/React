import React from 'react';
import products from './mockup/data';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <ProductList prodList={products} />
    </div>
  );
}
export default App;
