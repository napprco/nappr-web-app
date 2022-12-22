import React from 'react';

import './searchInput.css';
import searchIcon from '../../assets/images/Vector2.png';
const SearchInput: React.FC = () => {
  return (
    <div className='search-input'>
      <input type='text' placeholder='Search Places' />
      <div className='search-icon-container'>
        <img src={searchIcon} alt='' />
      </div>
    </div>
  );
};

export default SearchInput;
