import { Link } from 'react-router-dom';
const SecondStep: React.FC = () => {
  return (
    <div>
      <h1 className='form-header'>Add Your Info</h1>
      <div className=' login-form'>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name</label>
          <div className='input-container'>
            <input type='text' placeholder='Tahir' name='firstName' />
          </div>
        </div>
        <div className='form-control password'>
          <label htmlFor='lastName'>Last Name</label>
          <div className='input-container'>
            <input type='text' placeholder='Ramzan' name='lastName' />
            <p id='password-match-text'>
              Make Sure it matches the name on your Government ID. <Link to=''>Learn More</Link>
            </p>
          </div>
        </div>
        <div className='form-control '>
          <select name='city' id='' className='city-options'>
            <option value='B'>City One</option>
            <option value='C'>City Two</option>
            <option value='D'>City Three</option>
            <option value='E'>City Four</option>
          </select>
        </div>

        <div className='form-control '>
          <label htmlFor='lastName'>Phone No</label>
          <div className='number-input-control'>
            <select name='call-code' id='' className='call-code'>
              <option value='+234'>+1</option>
              <option value='C'>+234</option>
              <option value='D'>+342</option>
              <option value='E'>+63</option>
            </select>
            <div className='number-input'>
              <input type='number' placeholder='09022946610' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
