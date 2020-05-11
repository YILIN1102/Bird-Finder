import React, { Fragment } from 'react';
import AboutImage from '../layout/AboutImage';

const About = () => {
  return (
    <Fragment>
      <AboutImage />
      <div className='about-text'>
        <h1>About This App</h1>
        <p>App to search birds by ZIP code.</p>
        <p>Version: 1.0.0</p>
      </div>
    </Fragment>
  );
};

export default About;
