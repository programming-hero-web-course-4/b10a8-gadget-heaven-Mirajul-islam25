import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import { Helmet } from 'react-helmet-async';

const Home = () => {
      return (
            <div>
            <Helmet><title className='text-3xl'>Home</title></Helmet>
           <Banner></Banner>
           <Products></Products>
        </div>
      );
};

export default Home;