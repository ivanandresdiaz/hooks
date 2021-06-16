import React from 'react';
import initialState from '../initialState';
import Product from '../components/Products';

const Home = () => {
  return (
    <Product products={initialState.products} />
  );
}

export default Home;