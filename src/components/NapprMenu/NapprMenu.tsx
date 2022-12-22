import React from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../../assets/images/image 1.png';

const NapprMenu = () => {
  return (
    <section className='nappr-menu'>
      <article className='desktop-menu'>
        <span>
          <i className='fa fa-bars' aria-hidden='true'></i>
        </span>
      </article>
      <article className='mobile-menu'>
        <div className='menu-bar'></div>
        <div className='company-logo'>
          <img src={companyLogo} alt='' />
        </div>
        <div className='mobile-menu-list'>
          <Link to=''>About Us</Link>
          <Link to=''>Cancellation Policy</Link>
          <Link to=''>Hosting Resources</Link>
          <Link to=''>Health and Safety Updates </Link>
          <Link to=''>Help and Support</Link>
        </div>
      </article>
    </section>
  );
};

export default NapprMenu;
