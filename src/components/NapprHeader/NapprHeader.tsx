import { useContext } from 'react';
import companyLogo from '../../assets/images/image 1.png';
import userIcon from '../../assets/images/Male User.png';

import { AppContext } from '../../appContext/appContext';
import SearchInput from '../SearchInput/SearchInput';

const NapprHeader: React.FC = () => {
  const { handleShowMobileMenu } = useContext(AppContext);
  return (
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
  );
};

export default NapprHeader;
