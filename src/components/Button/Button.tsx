import React from 'react';
import { ButtonProps } from '../../utils/types';
import './button.css';

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className='nappr-btn'>
      <button type='button'>{text}</button>
    </div>
  );
};

export default Button;
