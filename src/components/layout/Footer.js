import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({ icon, title }) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className='footer bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <div className='row'>
        <ul>
          <li>
            <Link to='/about' className='grey-text text-lighten-4 right'>
              {' '}
              Help
            </Link>
          </li>
          <li>
            <Link to='/about' className='grey-text text-lighten-4 right'>
              Privacy and Terms
            </Link>
          </li>
          <li>
            <Link to='/about' className='grey-text text-lighten-4 right'>
              User Agreement
            </Link>
          </li>
          <li className='footer-copyright'>
            <p>© {year} Copyright Information</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  title: 'Bird Finder',
  icon: 'fas fa-feather'
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Footer;
