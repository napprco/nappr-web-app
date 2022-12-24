import { useContext } from 'react';

import { AppContext } from '../../appContext/appContext';
import './userAccount.css';
import userAvatar from '../../assets/images/Mask group 1.png';
import profileIcon from '../../assets/images/Edit Profile.png';
import paymentIcon from '../../assets/images/Card Security.png';
import subscribeIcon from '../../assets/images/Best Seller.png';
import napIcon from '../../assets/images/Sleeping in Bed.png';
import securityIcon from '../../assets/images/Privacy.png';

import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const UserAccount: React.FC = () => {
  const { isUserAccount, handleShowUserAccount } = useContext(AppContext);
  return (
    <div className={`user-account ${isUserAccount ? 'show-user-account' : ''}`}>
      <div className='user-account-contents'>
        <span className='account-close-btn' onClick={handleShowUserAccount}>
          <i className='fa fa-times' aria-hidden='true'></i>
        </span>
        <article className='user-account-header'>
          <div className='user-avatar'>
            <img src={userAvatar} alt='' />
          </div>
          <div className=' user-personal-details'>
            <h2>Tahir Ramzan</h2>
            <p>Joined in April 2022</p>
          </div>
        </article>
        <div className='divider'></div>
        <div className='user-account-info verification-section'>
          <h2>Identity Verification</h2>
          <p> Show others you’re a real person by geting the identity verification badge</p>
        </div>
        <div className='verify-btn'>
          <Button text='Get Verified' />
        </div>
        <div className='user-account-info user-account-info'>
          <h2>Account</h2>
          <ul className='user-account-items'>
            <li>
              <Link to='/home/editdetails' className='user-account-item'>
                <div className='user-account-item-icon'>
                  <img src={profileIcon} alt='' />
                </div>
                Personal Info
              </Link>
            </li>
            <li>
              <Link to='' className='user-account-item'>
                <div className='user-account-item-icon'>
                  <img src={paymentIcon} alt='' />
                </div>
                Payment Methods
              </Link>
            </li>
            <li>
              <Link to='' className='user-account-item'>
                <div className='user-account-item-icon'>
                  <img src={subscribeIcon} alt='' />
                </div>
                Subscription
              </Link>
            </li>
            <li>
              <Link to='' className='user-account-item nap'>
                <div className='user-account-item-icon'>
                  <img src={napIcon} alt='' />
                </div>
                My Nap Credit
              </Link>
            </li>
            <li>
              <Link to='/privacysetting' className='user-account-item'>
                <div className='user-account-item-icon'>
                  <img src={securityIcon} alt='' />
                </div>
                Privacy Settings
              </Link>
            </li>
          </ul>
        </div>
        <Link to='/' className='account-logout-btn'>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default UserAccount;
