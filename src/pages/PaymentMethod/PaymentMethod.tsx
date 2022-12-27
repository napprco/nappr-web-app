import './paymentMethod.css';
import Button from '../../components/Button/Button';
import BackButton from '../../components/Button/BackButton';
import masterCardIcon from '../../assets/images/mastercard-logo-mastercard-logo-png-vector-download-19-removebg-preview 1.png';
const PaymentMethod: React.FC = () => {
  return (
    <>
      <BackButton page='/home' />
      <div className='payment-method'>
        <article className='payment-header'>
          <h1>Payment Methods </h1>
          <div>
            <button type='button'>+</button>
          </div>
        </article>
        <article className='payment-methods'>
          <div className='card-details'>
            <img src={masterCardIcon} alt='' />
            <div>
              <p>**********3572</p>
            </div>
          </div>
          <Button text='Remove' />
        </article>
      </div>
    </>
  );
};

export default PaymentMethod;
