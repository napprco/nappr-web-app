import { useContext } from 'react';
import { AppContext } from '../../appContext/appContext';

import './napprHome.css';
import userIcon from '../../assets/images/Male User.png';
import companyLogo from '../../assets/images/image 1.png';
import NapprMenu from '../../components/NapprMenu/NapprMenu';
import SearchInput from '../../components/SearchInput/SearchInput';
const NapprHome: React.FC = () => {
  const { isMobileMenu, handleShowMobileMenu } = useContext(AppContext);
  return (
    <section className='nappr-home'>
      <div>
        <article className='nappr-home-header'>
          <div className='menu-bar' onClick={handleShowMobileMenu}>
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

      {isMobileMenu && <NapprMenu />}
    </section>
  );
};

export default NapprHome;
