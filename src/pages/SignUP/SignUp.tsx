import { Link } from 'react-router-dom';

import BackButton from '../../components/Button/BackButton';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const SignUp: React.FC = () => {
  return (
    <>
      <BackButton page='/signin' />
      <form action=''>
        {/* <FirstStep /> */}
        <SecondStep />
      </form>
    </>
  );
};

export default SignUp;
