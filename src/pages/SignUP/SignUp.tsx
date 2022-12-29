import { Link } from 'react-router-dom';
import { useState } from 'react';

import BackButton from '../../components/Button/BackButton';
import FirstStep from './FirstStep';
import ThirdStep from './ThirdStep';
import SecondStep from './SecondStep';

const SignUp: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const ConditionalComponent = () => {
    switch (page) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      default:
        return <FirstStep />;
    }
  };
  return (
    <>
      <BackButton page='/signin' />
      <div>
        <form action='' className='page sign-in'>
          {ConditionalComponent()}
          <button type='submit' className='submit-btn'>
            Next
          </button>
          <p className='form-question info-form-question'>
            Already have an account?
            <Link to='/signin' className='signup-btn'>
              Sign in
            </Link>{' '}
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
