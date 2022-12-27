import { Link } from 'react-router-dom';

import { BackButtonProps } from '../../utils/types';
const BackButton: React.FC<BackButtonProps> = ({ page }) => {
  return (
    <div className='back-btn'>
      <Link to={page} className='back-link'>
        Back
      </Link>
    </div>
  );
};

export default BackButton;
