import { Link } from 'react-router-dom';

import BackButton from '../../components/Button/BackButton';

const ThirdStep: React.FC = () => {
  return (
    <div className='page sign-in'>
      <h1 className='form-header'>
        What is your purpose
        <br /> to use NAPPR ?
      </h1>

      <div className='form login-form'>
        <div className='form-control'>
          <h2 className='purpose-password-header'>Set Password</h2>
          <label htmlFor='email'> Password</label>
          <div className='input-container'>
            <input type='password' placeholder='*******' name='email' />
          </div>
        </div>
        <div className='form-control password'>
          <label htmlFor='email'>Confirm Password</label>
          <div className='input-container'>
            <input type='password' placeholder='*******' name='email' />
            <p id='password-match-text'>Both Passwords must match </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
