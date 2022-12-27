import { Link } from 'react-router-dom';

import googleIcon from '../../assets/images/Google__G__Logo 1.png';
import facebookIcon from '../../assets/images/1260673-removebg-preview 1.png';
import BackButton from '../../components/Button/BackButton';

const SignUp: React.FC = () => {
  return (
    <>
      <BackButton page='/signin' />
      <div className='page sign-up'>
        <h1 className='form-header'>Signup to NAPPR</h1>
        <form action='' className='form signup-form'>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <div className='input-container'>
              <input type='text' placeholder='abcde@gmail.com' name='email' />
            </div>
          </div>

          <p className='form-text'>Or</p>
          <div className='other-login-method facebook'>
            <div className='method-icon'>
              <img src={googleIcon} alt='' />
            </div>
            <p>Continue with Google</p>
          </div>
          <div className='other-login-method facebook'>
            <div className='method-icon'>
              <img src={facebookIcon} alt='' />
            </div>
            <p>Continue with Facebook</p>
          </div>
          <button type='button' className='submit-btn'>
            <Link to='/info' className='submit-btn-link'>
              Sign Up
            </Link>
          </button>
          <p className='form-question'>
            Already have an account?{' '}
            <Link to='/signin' className='signup-btn'>
              Signin
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
