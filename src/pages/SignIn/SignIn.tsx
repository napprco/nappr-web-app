import { Link } from 'react-router-dom';

import googleIcon from '../../assets/images/Google__G__Logo 1.png';
import facebookIcon from '../../assets/images/1260673-removebg-preview 1.png';
import BackButton from '../../components/Button/BackButton';

const SignIn: React.FC = () => {
  return (
    <>
      <BackButton page='/' />
      <div className='page sign-in'>
        <h1 className='form-header'>Login to NAPPR</h1>
        <form action='' className='form login-form'>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <div className='input-container'>
              <input type='text' placeholder='abcde@gmail.com' name='email' />
            </div>
          </div>
          <div className='form-control password'>
            <label htmlFor='email'>Password</label>
            <div className='input-container'>
              <input type='text' placeholder='*******' name='email' />
            </div>
            <p>
              <Link to='/resetpassword'>Forget Password</Link>{' '}
            </p>
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
          <button type='submit' className='submit-btn'>
            <Link to='/info' className='submit-btn-link'>
              Login
            </Link>
          </button>
          <p>
            Do not have an account yet?{' '}
            <Link to='/signup' className='signup-btn'>
              Signup
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
