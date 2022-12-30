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
  // const handleIncrementStep = () => {
  //   console.log(firstStepFormData.email);
  //   setPage(page + 1);
  // };
  const handleDecrementStep = () => setPage(page - 1);
  const handleSubmit = () => {
    if (page === 0) {
      if (firstStepFormData.username.trim() === '' || firstStepFormData.email.trim() === '') {
        return alert('Fill your details correctly');
      } else {
        setPage(page + 1);
      }
    }
    if (page === 1) {
      if (
        secondStepFormData.city.trim() === '' ||
        secondStepFormData.firstName.trim() === '' ||
        secondStepFormData.lastName.trim() === '' ||
        secondStepFormData.phoneNumber.trim() === '' ||
        secondStepFormData.city.trim() === ''
      ) {
        return alert('Check to fill every field correctly');
      } else {
        setPage(page + 1);
      }
    }
    if (page === 2) {
      if (
        thirdStepFormData.purpose.trim() === '' ||
        thirdStepFormData.password.trim().length < 3 ||
        thirdStepFormData.confirmPassword.trim() !== thirdStepFormData.password.trim()
      ) {
        alert('Ensure that the fields are filled properly');
      } else {
        setFirstStepFormData({
          email: '',
          username: '',
        });
        setSecondStepFormData({
          city: '',
          firstName: '',
          lastName: '',
          phoneNumber: '',
        });
        setThirdStepFormData({
          purpose: '',
          password: '',
          confirmPassword: '',
        });
        setPage(0);
      }
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
        return (
          <SecondStep
            secondStepFormData={secondStepFormData}
            setSecondStepFormData={setSecondStepFormData}
          />
        );
      case 2:
        return (
          <ThirdStep
            thirdStepFormData={thirdStepFormData}
            setThirdStepFormData={setThirdStepFormData}
          />
        );
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
        <form action='' className='page sign-in'>
          {ConditionalComponent()}
          <button type='button' className='submit-btn' onClick={handleSubmit}>
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
