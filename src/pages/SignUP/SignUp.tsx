import { Link } from 'react-router-dom';
import { useState } from 'react';

import FirstStep from './FirstStep';
import ThirdStep from './ThirdStep';
import SecondStep from './SecondStep';
import FormBackButton from '../../components/Button/FormBackButton';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [page, setPage] = useState<number>(0);

  const handleIncrementStep = () => setPage(page + 1);
  const handleDecrementStep = () => setPage(page - 1);

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
      {page > 0 && <FormBackButton handleDecrementStep={handleDecrementStep} />}
      <div>
        <form action='' className='page sign-in'>
          {ConditionalComponent()}
          <button type='button' className='submit-btn' onClick={handleIncrementStep}>
            {page === 0 || page === 1 ? 'Next' : 'Sign up'}
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
