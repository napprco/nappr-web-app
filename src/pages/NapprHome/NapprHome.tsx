import React from 'react';

import './napprHome.css';
import userIcon from '../../assets/images/Male User.png';
import companyLogo from '../../assets/images/image 1.png';
import NapprMenu from '../../components/NapprMenu/NapprMenu';
import SearchInput from '../../components/SearchInput/SearchInput';
const NapprHome: React.FC = () => {
  return (
    <section className='nappr-home'>
      <div>
        <article className='nappr-home-header'>
          <div className='menu-bar'>
            <span>
              <i className='fa fa-bars' aria-hidden='true'></i>
            </span>
          </div>
          <div className='company-logo'>
            <img src={companyLogo} alt='' />
          </div>
          <div className='person-icon-container'>
            <img src={userIcon} alt='' />
          </div>
        </article>
        <SearchInput />
      </div>

      <NapprMenu />
    </section>
  );
};

export default NapprHome;
