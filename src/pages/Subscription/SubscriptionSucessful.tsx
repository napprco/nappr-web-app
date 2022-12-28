import './subscription.css';
import successfulIcon from '../../assets/images/Credit card payment.png';

const SubscriptionSucessful: React.FC = () => {
  return (
    <div className='sub-successful'>
      <h1>SubscriptionSucessful</h1>
      <div className='sub-succesful-body'>
        <img src={successfulIcon} alt='' />
      </div>
    </div>
  );
};

export default SubscriptionSucessful;
