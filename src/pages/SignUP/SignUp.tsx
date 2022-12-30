import { Link } from 'react-router-dom';
import { useState } from 'react';

import FirstStep from './FirstStep';
import ThirdStep from './ThirdStep';
import SecondStep from './SecondStep';
import FormBackButton from '../../components/Button/FormBackButton';

import { FirstStepInputType, SecondStepInputType, ThirdStepInputType } from '../../utils/types';

const SignUp: React.FC = () => {
  const [secondStepFormData, setSecondStepFormData] = useState<SecondStepInputType>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
  });

  const [thirdStepFormData, setThirdStepFormData] = useState<ThirdStepInputType>({
    purpose: '',
    password: '',
    confirmPassword: '',
  });
  const [firstStepFormData, setFirstStepFormData] = useState<FirstStepInputType>({
    email: '',
    username: '',
  });
  const [page, setPage] = useState<number>(0);

  const handleIncrementStep = () => setPage(page + 1);
  const handleDecrementStep = () => setPage(page - 1);
  const handleSubmit = () => {
    if (page === 0) {
      console.log(firstStepFormData.email, firstStepFormData.username);
      if (firstStepFormData.username === '') {
        return alert('Please enter a valid username');
      }
    } else {
      setPage(page + 1);
    }
    if (page === 2) {
      setPage(0);
    }
  };

  const ConditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <FirstStep
            firstStepFormData={firstStepFormData}
            setFirstStepFormData={setFirstStepFormData}
          />
        );
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      default:
        return (
          <FirstStep
            firstStepFormData={firstStepFormData}
            setFirstStepFormData={setFirstStepFormData}
          />
        );
    }
  };
  return (
    <>
      {page > 0 && <FormBackButton handleDecrementStep={handleDecrementStep} />}
      <div>
        <form action='' className='page sign-in' onSubmit={handleSubmit}>
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
