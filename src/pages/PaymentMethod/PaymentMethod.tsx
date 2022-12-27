import './paymentMethod.css';
import Button from '../../components/Button/Button';
import BackButton from '../../components/Button/BackButton';
const PaymentMethod: React.FC = () => {
  return (
    <div className='payment-method'>
      <BackButton page='/home' />
      <article className='payment-header'>
        <h2>Payment Methods </h2>
        <button type='button'>+</button>
      </article>
      <article className='payment-methods'>
        <div className='card-img'></div>
        <div className='card-details'></div>
        <Button text='Remove' />
      </article>
    </div>
  );
};

export default PaymentMethod;
