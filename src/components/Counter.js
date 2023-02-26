import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1)
  const [amount, setAmount] = useState(6370)

  const onIncrease = () => {
      setCount(count + 1);
      setAmount(6370 * (count + 1))
  };

  const onDecrease = () => {
    if (count >= 1) {
      setCount(count - 1);
      setAmount(6370 * (count - 1))
    }
  };

  return (
    <div className='counter'>
      <div className='counter-button'>
        <button className='counter-minus' onClick={onDecrease}>-</button>
        <span className='counter-result'>{count}</span>
        <button className='counter-plus' onClick={onIncrease}>+</button>
      </div>
    <div className='total'>
    <div className='totalFirst'>
      <span>총 상품 금액</span>
      <img src="assets/ExpandImg.svg" alt="툴팁 이미지"/>
    </div>
    <div className='totlaSecond'>
      <span className='totalSecond-text'>총 수량 </span>
      <span className='totalSecond-number' onClick={onIncrease}>{count}</span>
      <span className='totalSecond-text'>개</span>
      <span className='line'>|</span>
      <span className='totalSecond-amount'>{amount}</span>
      <span className='totalSecond-amount'>원</span>
    </div>
  </div>
    </div>
  )
}

export default Counter;