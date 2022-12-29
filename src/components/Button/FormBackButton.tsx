import { FormBackButtonProps } from '../../utils/types';
const FormBackButton: React.FC<FormBackButtonProps> = ({ handleDecrementStep }) => {
  return (
    <div>
      <button type='button' className='form-back-btn' onClick={handleDecrementStep}>
        Back
      </button>
    </div>
  );
};

export default FormBackButton;
