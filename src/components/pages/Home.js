import React, { Fragment } from 'react';
import HomeImage from '../layout/HomeImage';

const Home = () => {
  return (
    <Fragment>
      <HomeImage />
      <div className='home-text text-center all-center '>
        <h1>Bird Finder</h1>
        <p>
          The Bird-Spotting application that lets you discover common, rare, and
          exotic birds near you.
        </p>
        <p>Can you find them ALL?</p>
        <a className='btn btn-dark p-3 m-1' href='/my search'>
          Let's Get It Started
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
