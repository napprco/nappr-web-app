import { Link } from 'react-router-dom';
import { useState } from 'react';

import './orderSummary.css';
import masterCardIcon from '../../assets/images/mastercard-logo-mastercard-logo-png-vector-download-19-removebg-preview 1.png';
import visaIcon from '../../assets/images/imgbin-visa-credit-card-debit-card-visa-CVupnbKnhhXkYdQ3EY1sZ3ErQ-removebg-preview 1.png';
import payPalIcon from '../../assets/images/pp258-removebg-preview 1.png';
import BackButton from '../../components/Button/BackButton';
import SubscriptionSucessful from '../Subscription/SubscriptionSucessful';

const OrderSummary = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleCloseModal = () => setIsModal(false);

  const handleOpenModal = () => setIsModal(true);

  return (
    <>
      {isModal && <SubscriptionSucessful handleCloseModal={handleCloseModal} />}
      <BackButton page='/' />
      <div className='order-summary'>
        <article className='order-summary-header'>
          <h1>Order Summary</h1>
          <p>Monthly Premium Plan</p>
        </article>
        <article className='plan-duration'>
          <div className='duration-item'>
            <h3>Plan Duration</h3>
            <h3 className='duration-amount'>1 Month</h3>
          </div>
          <div className='duration-item'>
            <h3>Features</h3>
            <h3 className='plan-features'>10% discount on every nap and much more</h3>
          </div>
        </article>
        <article className='total'>
          <h3>Total</h3>
          <h3>$99</h3>
        </article>
        <article className='order-summary-payment'>
          <h2>Payment Method</h2>
          <div className='order-summary-payment-method'>
            <div className='order-summary-payment-method-icons'>
              <img src={visaIcon} alt='' />
              <img src={masterCardIcon} alt='' />
              <img src={payPalIcon} alt='' />
            </div>
            <div className='add-payment-btn'>
              <button type='button'>Add</button>
            </div>
          </div>
        </article>
        <article className='confirm-btn-container'>
          <button type='button' className='submit-btn' onClick={handleOpenModal}>
            <p className='submit-btn-link'>Confirm and Pay</p>
          </button>
        </article>
      </div>
    </>
  );
};

export default OrderSummary;
