import { Link } from 'react-router-dom';
import { useState } from 'react';
import { REGISTER_URL } from '../../utils/constants';

import FirstStep from './FirstStep';
import ThirdStep from './ThirdStep';
import SecondStep from './SecondStep';
import FormBackButton from '../../components/Button/FormBackButton';

import { FirstStepInputType, SecondStepInputType, ThirdStepInputType } from '../../utils/types';

const SignUp: React.FC = () => {
  const [firstStepFormData, setFirstStepFormData] = useState<FirstStepInputType>({
    email: '',
    username: '',
  });
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

  const [page, setPage] = useState<number>(0);
  const handleIncrementStep = () => {
    console.log(firstStepFormData.email);
    setPage(page + 1);
  };
  const handleDecrementStep = () => setPage(page - 1);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (page === 0) {
      if (
        firstStepFormData.username.trim() === '' ||
        !/\S+@\S+\.\S+/.test(firstStepFormData.email)
      ) {
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
        const headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer',
          mode: 'cors',
        };
        try {
          const userDetails = await fetch(REGISTER_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify({
              username: 'Ebimene',
              lastName: 'Agent',
              // email: firstStepFormData.email,
              // firstName: secondStepFormData.firstName,
              // lastName: secondStepFormData.lastName,
              // city: secondStepFormData.city,
              // phoneNumber: secondStepFormData.phoneNumber,
              // purpose: thirdStepFormData.purpose,
              // password: thirdStepFormData.password,
            }),
          });
          const responseData = await userDetails.json();
          if (responseData.status === 200) {
            console.log(responseData);
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
        } catch (err) {
          console.log(err);
        }
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
        <form className='page sign-in' onSubmit={handleSubmit}>
          {ConditionalComponent()}
          <button type='submit' className='submit-btn'>
            {page === 2 ? 'Sign up' : 'Next'}
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
