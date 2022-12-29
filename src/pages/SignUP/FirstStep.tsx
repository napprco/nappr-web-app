import { Link } from 'react-router-dom';

import googleIcon from '../../assets/images/Google__G__Logo 1.png';
import facebookIcon from '../../assets/images/1260673-removebg-preview 1.png';

const FirstStep: React.FC = () => {
  return (
    <div className='page sign-up'>
      <h1 className='form-header'>Signup to NAPPR</h1>
      <div className='form signup-form'>
        <div className='form-control'>
          <label htmlFor='email'>Username</label>
          <div className='input-container'>
            <input type='text' placeholder='Username' name='email' />
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default FirstStep;
