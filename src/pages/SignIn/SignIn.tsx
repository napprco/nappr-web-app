import { Link } from 'react-router-dom';

import googleIcon from '../../assets/images/Google__G__Logo 1.png';
import facebookIcon from '../../assets/images/1260673-removebg-preview 1.png';

const SignIn: React.FC = () => {
  return (
    <div className='sign-in'>
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
            <Link to='signup'>Forget Password</Link>{' '}
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
          Login
        </button>
        <p>
          Do not have an account yet?{' '}
          <Link to='' className='signup-btn'>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
