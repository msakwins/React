import React from 'react';
import products from '../../mockup/data';
import ProductItem from '../ProductItem';

function ProductList() {
  return (
    <div>
      {products.map((item) =>
        (<ProductItem
          image={item.image}
          name={item.name}
          price={item.price}
          description={item.description}
          key={item.id}
        />))
      }
    </div>
  );
}

export default ProductList;
