import { Link } from 'react-router-dom';

import BackButton from '../../components/Button/BackButton';

const ResetPassword: React.FC = () => {
  return (
    <>
      <BackButton page='/signin' />
      <div className='page sign-up'>
        <h1 className='form-header'>Password Reset</h1>
        <p className='reset-guide-text'>
          Enter the email associated with your account, and we’ll send you a verification code
        </p>
        <form action='' className='form reset-form'>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <div className='input-container'>
              <input type='text' placeholder='abcde@gmail.com' name='email' />
            </div>
          </div>

          <button type='button' className='submit-btn get-code-btn'>
            <Link to='/resetpasswordtwo' className='submit-btn-link'>
              Get Code
            </Link>
          </button>

          <p className='form-question'>
            Already have an account?{' '}
            <Link to='/signup' className='signup-btn'>
              Signup
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
