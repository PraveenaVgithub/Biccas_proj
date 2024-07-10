import React from 'react';
import './wish.css';

const WishList = ({ size, onToggle }) => {
  return (
    <div className="wish-icon" title="WishList" onClick={onToggle}>
      ❤️
      {size > 0 && (
        <div className="wish-badge">
          {size}
        </div>
      )}
    </div>
  );
};

export default WishList;
