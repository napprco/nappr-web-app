import { Link } from 'react-router-dom';

import BackButton from '../../components/Button/BackButton';

const ResetPasswordTwo: React.FC = () => {
  return (
    <>
      <BackButton page='/resetpassword' />
      <div className='page reset-two'>
        <h1 className='form-header'>Password Reset</h1>
        <p className='reset-guide-text'>
          We’ve sent you a 4-digit code on your provided email. Please enter it below.
        </p>
        <form action='' className='form reset-form'>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <div className='input-container'>
              <input type='text' placeholder='abcde@gmail.com' name='email' />
            </div>
          </div>

          <button type='button' className='submit-btn get-code-btn'>
            <Link to='/resetpasswordthree' className='submit-btn-link'>
              Resend Code
            </Link>
          </button>
          <p className='form-question'>
            Already have an account?
            <Link to='/signup' className='signup-btn'>
              Signup
            </Link>{' '}
          </p>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordTwo;
