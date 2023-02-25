import React from 'react';

const PriceDiscount = () => {
  return (
    <div className="discount">
      <span className="discount-percent">88%</span>
      <div className="discount-all">
        <span className="discount-real">56,760원</span>
        <div className='discount-move'>
          <span>6,370</span>
          <span>원</span>
        </div>
      </div>
    </div>
  );
};

export default PriceDiscount;
