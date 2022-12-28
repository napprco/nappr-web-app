import './cardDetailsModal.css';
import cardIcon from '../../assets/images/Credit Card.png';
import { CardDetailsProps } from '../../utils/types';

import Button from '../Button/Button';
const CardDetailsModal: React.FC<CardDetailsProps> = ({ handleCloseCardDetailsModal }) => {
  return (
    <div className='card-detail-modal'>
      <div className='card-details-header-container'>
        <span className='card-details-close' onClick={handleCloseCardDetailsModal}>
          <i className='fa fa-times' aria-hidden='true'></i>
        </span>
        <h2 className='card-details-header'>Card Details</h2>
      </div>
      <form action='' className='form signup-form'>
        <div className='form-control card-number-input'>
          <div className='input-container '>
            <input type='number' placeholder='Card Number' name='cardNumber' />
          </div>
          <img src={cardIcon} alt='' />
        </div>

        <div className='card-details-form-group'>
          <div className='card-detail-form-item card-detail-form-tem-1'>
            <input type='text' placeholder='Card Expiry Date' name='cardExpiry' />
          </div>
          <div className='card-detail-form-item card-detail-form-tem-2'>
            <input type='text' placeholder='CVC' name='cvc' />
          </div>
        </div>
        <div className='form-control'>
          <div className='input-container'>
            <input type='text' placeholder='Postal Code' name='postalCode' />
          </div>
        </div>
        <div className='form-control'>
          <div className='input-container'>
            <input type='text' placeholder='Country or Region' name='country' />
          </div>
        </div>
        <article className='card-details-buttons'>
          <div>
            <button
              type='button'
              onClick={handleCloseCardDetailsModal}
              className='details-cancel-btn'
            >
              Cancel
            </button>
          </div>
          <div>
            <Button text='Add' />
          </div>
        </article>
      </form>
    </div>
  );
};

export default CardDetailsModal;
