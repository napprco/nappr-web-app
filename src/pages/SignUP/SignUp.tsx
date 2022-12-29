import { Link } from 'react-router-dom';

import BackButton from '../../components/Button/BackButton';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const SignUp: React.FC = () => {
  return (
    <>
      <BackButton page='/signin' />
      <form action=''>
        <div className='page sign-up'>
          <h1 className='form-header'>Signup to NAPPR</h1>
          <FirstStep />
        </div>
      </form>
    </>
  );
};

export default SignUp;
