import { Link } from 'react-router-dom';

import BackButton from '../../components/Button/BackButton';
import FirstStep from './FirstStep';

const SignUp: React.FC = () => {
  return (
    <>
      <BackButton page='/signin' />
      <div className='page sign-up'>
        <h1 className='form-header'>Signup to NAPPR</h1>
        <FirstStep />
      </div>
    </>
  );
};

export default SignUp;
