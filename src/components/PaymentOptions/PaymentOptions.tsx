import './paymentOptions.css';
import cardIcon from '../../assets/images/Credit Card.png';
import payPalIcon from '../../assets/images/PayPal.png';

const PaymentOptions: React.FC = () => {
  return (
    <div className='payment-options'>
      <h2 className='payment-options-header'>Pay with</h2>
      <p className='method-text'>Add payment method</p>
      <button type='button' className='single-payment-option'>
        <img src={cardIcon} alt='' />
        <p>Credit or Debit</p>
      </button>
      <button type='button' className='single-payment-option'>
        <img src={payPalIcon} alt='' />
        <p>Paypal</p>
      </button>
    </div>
  );
};

export default PaymentOptions;
