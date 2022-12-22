import React from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../../assets/images/image 1.png';

const NapprMenu = () => {
  return (
    <section className='nappr-menu'>
      <article className='desktop-menu'>
        <div className='company-logo'>
          <img src={companyLogo} alt='' />
        </div>
        <div className='desktop-menu-list'>
          <Link to='' className='desktop-menu-item'>
            About Us
          </Link>
          <Link to='' className='desktop-menu-item'>
            Cancellation Policy
          </Link>
          <Link to='' className='desktop-menu-item'>
            Hosting Resources
          </Link>
          <Link to='' className='desktop-menu-item'>
            Health and Safety Updates{' '}
          </Link>
          <Link to='' className='desktop-menu-item'>
            Help and Support
          </Link>
          <Link to='' className='desktop-menu-item'>
            Terms and Conditions
          </Link>
          <Link to='' className='desktop-menu-item'>
            Privacy Policy
          </Link>
        </div>
      </article>
      <article className='mobile-menu'>
        <div className='mobile-menu-header'>
          {/* <div className='menu-bar'>
            <span>
              <i className='fa fa-bars' aria-hidden='true'></i>
            </span>
          </div> */}
          <div className='company-logo'>
            <img src={companyLogo} alt='' />
          </div>
        </div>
        <div className='divider'></div>
        <div className='mobile-menu-list'>
          <Link to='' className='mobile-menu-item'>
            About Us
          </Link>
          <Link to='' className='mobile-menu-item'>
            Cancellation Policy
          </Link>
          <Link to='' className='mobile-menu-item'>
            Hosting Resources
          </Link>
          <Link to='' className='mobile-menu-item'>
            Health and Safety Updates{' '}
          </Link>
          <Link to='' className='mobile-menu-item'>
            Help and Support
          </Link>
          <div className='mobile-menu-footer'>
            <Link to='' className='mobile-menu-item'>
              Terms and Conditions
            </Link>
            <Link to='' className='mobile-menu-item'>
              Privacy Policy
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default NapprMenu;
