import { Link } from 'react-router-dom';

import './privacySetting.css';

const PrivacySetting = () => {
  return (
    <div className='privacy-setting'>
      <h1 className='setting-pages-header'>Privacy Settings</h1>
      <Link to='/loginsecurity' className='privacy-setting-item'>
        <div>
          <h3>Login and Security</h3>
          <p>Password and Login activity</p>
        </div>
        <span>
          {' '}
          <i className='fa fa-angle-right' aria-hidden='true'></i>
        </span>
      </Link>
      <Link to='' className='privacy-setting-item'>
        <div>
          <h3>Notification</h3>
          <p>Manage your notification</p>
        </div>
        <span>
          {' '}
          <i className='fa fa-angle-right' aria-hidden='true'></i>
        </span>
      </Link>{' '}
      <Link to='' className='privacy-setting-item'>
        <div>
          <h3>Manage your account</h3>
          <p>Deactivate or Delete your account</p>
        </div>
        <span>
          {' '}
          <i className='fa fa-angle-right' aria-hidden='true'></i>
        </span>
      </Link>
    </div>
  );
};

export default PrivacySetting;
