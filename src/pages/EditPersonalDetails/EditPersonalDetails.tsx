import { Link } from 'react-router-dom';

import './editPersonalDetails.css';

const EditPersonalDetails = () => {
  return (
    <div className='page sign-in'>
      <h1 className='form-header'>Edit Personal Information</h1>

      <form action='' className='form login-form'>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name</label>
          <div className='input-container'>
            <input type='text' value='Tahir' name='firstName' />
          </div>
        </div>
        <div className='form-control password'>
          <label htmlFor='lastName'>Last Name</label>
          <div className='input-container'>
            <input type='text' value='Ramzan' name='lastName' />
          </div>
        </div>
        <Link to='' className='edit-info-item'>
          <div>
            <h3>Email</h3>
            <p> abcdef@gmail.com</p>
          </div>
          <span>
            {' '}
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </span>
        </Link>
        <Link to='' className='edit-info-item'>
          <div>
            <h3>Emergency Contact</h3>
            <p>Not Provided</p>
          </div>
          <span>
            {' '}
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </span>
        </Link>{' '}
        <Link to='' className='edit-info-item'>
          <div>
            <h3>Government ID</h3>
            <p>Not Provided</p>
          </div>
          <span>
            {' '}
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </span>
        </Link>
        <button type='submit' className='submit-btn'>
          <Link to='' className='submit-btn-link'>
            Save
          </Link>
        </button>
      </form>
    </div>
  );
};

export default EditPersonalDetails;
