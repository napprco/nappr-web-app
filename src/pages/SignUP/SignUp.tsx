import { Link } from 'react-router-dom';

import BackButton from '../../components/Button/BackButton';
import FirstStep from './FirstStep';
import ThirdStep from './ThirdStep';
import SecondStep from './SecondStep';

const SignUp: React.FC = () => {
  return (
    <>
      <BackButton page='/signin' />
      <form action=''>
        {/* <FirstStep /> */}
        {/* <SecondStep /> */}
        <ThirdStep />
        <button type='submit' className='submit-btn'>
          <p className='submit-btn-link'>Next</p>
        </button>
        <p className='form-question info-form-question'>
          Already have an account?
          <Link to='/signin' className='signup-btn'>
            Sign in
          </Link>{' '}
        </p>
      </form>
    </>
  );
};

export default SignUp;
