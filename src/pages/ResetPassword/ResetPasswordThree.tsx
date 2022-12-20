import { Link } from 'react-router-dom';
const ResetPasswordThree: React.FC = () => {
  return (
    <div className='page sign-in'>
      <h1 className='form-header'>Password Reset</h1>
      <p className='reset-guide-text'>
        Your new password must be different from previous used password
      </p>
      <form action='' className='form login-form'>
        <div className='form-control'>
          <label htmlFor='email'>New Password</label>
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
        <button type='submit' className='submit-btn'>
          <Link to='/info' className='submit-btn-link'>
            Reset
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
  );
};

export default ResetPasswordThree;
