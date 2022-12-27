import { Link } from 'react-router-dom';
import BackButton from '../../components/Button/BackButton';
import './passwordUpdate.css';

const PasswordUpdate: React.FC = () => {
  return (
    <>
      <BackButton page='/loginsecurity' />
      <div className='page sign-in'>
        <h1 className='form-header'>Change Password</h1>

        <form action='' className='form login-form'>
          <div className='form-control'>
            <label htmlFor='currentPassword'>Current password</label>
            <div className='input-container'>
              <input type='password' placeholder='*******' name='currentPassword' />
            </div>
            <p className='password-update-forget-text-box'>
              <Link to='/resetpassword' className='passord-update-forget-text'>
                Forget Password
              </Link>{' '}
            </p>
          </div>
          <div className='form-control'>
            <h2 className='update-password-header'>Update Password</h2>
            <label htmlFor='password'>New Password</label>
            <div className='input-container'>
              <input type='password' placeholder='*******' name='password' />
            </div>
          </div>
          <div className='form-control password'>
            <label htmlFor='email'>Confirm Password</label>
            <div className='input-container'>
              <input type='password' placeholder='*******' name='email' />
            </div>
          </div>
          <button type='submit' className='submit-btn'>
            <Link to='/home' className='submit-btn-link'>
              Update
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default PasswordUpdate;
