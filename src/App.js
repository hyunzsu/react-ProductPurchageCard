import React from 'react';
import './style.css';
import {
  Logo,
  PriceDiscount,
  Delivery,
  Counter,
  TotalAmount,
} from './components/index';

export default function App() {
  return (
    <div className='App'>
      <Logo />
      <PriceDiscount />
      <Delivery />
      <Counter />
      <TotalAmount />
    </div>
  );
}
