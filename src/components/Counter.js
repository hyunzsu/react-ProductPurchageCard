import React from 'react';

const Counter = () => {
  return (
    <div className='counter'>
      <div className='counter-button'>
        <button className='counter-minus'>-</button>
        <span className='counter-result'>1</span>
        <button className='counter-plus'>+</button>
      </div>
    </div>
  )
}

export default Counter;