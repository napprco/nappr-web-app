import { ThirdStepProps } from '../../utils/types';
const ThirdStep: React.FC<ThirdStepProps> = ({ setThirdStepFormData, thirdStepFormData }) => {
  return (
    <div>
      <h1 className='form-header'>
        What is your purpose
        <br /> to use NAPPR ?
      </h1>
      <div className='form-control '>
        <h2 className='purpose-label'>I am </h2>
        <select
          name='city'
          className='city-options'
          onChange={(e) =>
            setThirdStepFormData({
              ...thirdStepFormData,
              purpose: e.target.value,
            })
          }
        >
          <option value='B'>Nappr</option>
          <option value='C'>City Two</option>
          <option value='D'>City Three</option>
          <option value='E'>City Four</option>
        </select>
      </div>
      <div className=' login-form'>
        <div className='form-control'>
          <h2 className='purpose-password-header'>Set Password</h2>
          <label htmlFor='email'> Password</label>
          <div className='input-container'>
            <input
              type='password'
              placeholder='*******'
              onChange={(e) =>
                setThirdStepFormData({
                  ...thirdStepFormData,
                  password: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className='form-control password'>
          <label htmlFor='email'>Confirm Password</label>
          <div className='input-container'>
            <input
              type='password'
              placeholder='*******'
              onChange={(e) =>
                setThirdStepFormData({
                  ...thirdStepFormData,
                  confirmPassword: e.target.value,
                })
              }
            />
            <p id='password-match-text'>Both Passwords must match </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
