import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter'>
      <div className='counter-button'>
        <button className='counter-minus' onClick={onDecrease}>-</button>
        <span className='counter-result'>{count}</span>
        <button className='counter-plus' onClick={onIncrease}>+</button>
      </div>
    </div>
  )
}

export default Counter;