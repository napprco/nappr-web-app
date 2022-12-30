// import googleIcon from '../../assets/images/Google__G__Logo 1.png';
// import facebookIcon from '../../assets/images/1260673-removebg-preview 1.png';
import { FirstStepProps } from '../../utils/types';

const FirstStep: React.FC<FirstStepProps> = ({ firstStepFormData, setFirstStepFormData }) => {
  return (
    <div>
      <h1 className='form-header'>Signup to NAPPR</h1>
      <div className=' signup-form'>
        <div className='form-control'>
          <label htmlFor='email'>Username</label>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Username'
              value={firstStepFormData.username}
              onChange={(e) =>
                setFirstStepFormData({
                  ...firstStepFormData,
                  username: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <div className='input-container'>
            <input
              type='text'
              placeholder='abcde@gmail.com'
              value={firstStepFormData.email}
              onChange={(e) =>
                setFirstStepFormData({
                  ...firstStepFormData,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* <p className='form-text'>Or</p>
        <div className='other-login-method facebook'>
          <div className='method-icon'>
            <img src={googleIcon} alt='' />
          </div>
          <p>Continue with Google</p>
        </div>
        <div className='other-login-method facebook'>
          <div className='method-icon'>
            <img src={facebookIcon} alt='' />
          </div>
          <p>Continue with Facebook</p>
        </div> */}
      </div>
    </div>
  );
};

export default FirstStep;
