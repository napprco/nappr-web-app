import './subscription.css';
import successfulIcon from '../../assets/images/Credit card payment.png';
import { SubscriptionSuccessfulProps } from '../../utils/types';

const SubscriptionSucessful: React.FC<SubscriptionSuccessfulProps> = ({ handleCloseModal }) => {
  return (
    <div className='sub-successful'>
      <span className='sub-success-modal-close' onClick={handleCloseModal}>
        <i className='fa fa-times' aria-hidden='true'></i>
      </span>
      <h1>Subscription Sucessful</h1>
      <div className='sub-successful-body'>
        <img src={successfulIcon} alt='' />
        <h2>Congratulations</h2>
        <p> You.ve unlocked NAPPR’s premium features for a month</p>
      </div>
    </div>
  );
};

export default SubscriptionSucessful;
