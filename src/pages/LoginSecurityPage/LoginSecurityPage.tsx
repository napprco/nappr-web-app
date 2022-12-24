import { Link } from 'react-router-dom';

import './loginSecurityPage.css';
import phoneIcon from '../../assets/images/iPhone.png';

const LoginSecurityPage = () => {
  return (
    <div className='login-security-page'>
      <h2 className='setting-pages-header'>Login and Security</h2>
      <article className='login-security-item'>
        <div className='login-security-detail'>
          <h2>Password</h2>
          <p>Last Updated 6 days ago</p>
        </div>
        <Link to='/updatepassword' className='login-security-btn'>
          Change
        </Link>
      </article>
      <article className='login-security-item'>
        <div className='login-security-detail'>
          <h2>Device History</h2>
          <div className='login-history'>
            <div>
              <img src={phoneIcon} alt='' />
            </div>
            <div>
              <p>Newyork, 20 April 2022 at 01:13</p>
              <Link to='' className='login-security-btn'>
                Logout device
              </Link>
            </div>
          </div>
        </div>
        <Link to='' className='login-security-btn'>
          See All
        </Link>
      </article>
      <article className='login-security-item account-security'>
        <div className='login-security-detail'>
          <h2>Your Account Security</h2>
          <p>
            We’re always working on ways to increase safety in our community. That’s why we look at
            every account to make sure it’s as secure as possible
          </p>
        </div>
        <div className='progress-bar-container'>
          <div className='progress-bar'></div>
        </div>
        <p className='security-level-text'>Low</p>
        <Link to='' className='improve-securty-btn'>
          Improve
        </Link>
      </article>
    </div>
  );
};

export default LoginSecurityPage;
