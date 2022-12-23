import { useContext } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../../assets/images/image 1.png';
import userIcon from '../../assets/images/Male User.png';
import { AppContext } from '../../appContext/appContext';

const NapprMenu: React.FC = () => {
  const { isMobileMenu, handleShowMobileMenu } = useContext(AppContext);
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
        <div className='user-icon'>
          <img src={userIcon} alt='' />
        </div>
      </article>
      <div className={`mobile-menu-container ${isMobileMenu ? 'show-mobile-menu' : ''}`}>
        <span className='close-btn' onClick={handleShowMobileMenu}>
          <i className='fa fa-times' aria-hidden='true'></i>
        </span>
        <article className='mobile-menu'>
          <div className='mobile-menu-header'>
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
      </div>
    </section>
  );
};

export default NapprMenu;
