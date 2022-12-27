import { Link } from 'react-router-dom';

import './subscription.css';
import subscriptionIcon from '../../assets/images/unlock-imei-iphone-removebg-preview 1.png';
import BackButton from '../../components/Button/BackButton';

const Subscription: React.FC = () => {
  return (
    <>
      <BackButton page='/home' />
      <div className='subscription'>
        <article className='subscription-header'>
          <h1>Subscription</h1>
          <p>You’re currently using our free plan. Buy subscription and unlock all features</p>
        </article>
        <article className='subscription-body'>
          <img src={subscriptionIcon} alt='' />
          <h3>Unlock all features</h3>
        </article>
        <div className='subscription-btn-container'>
          <button type='button' className='submit-btn '>
            <Link to='/' className='submit-btn-link subscription-link'>
              Buy Subscription
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscription;
