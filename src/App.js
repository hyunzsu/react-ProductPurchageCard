import React from 'react';
import './style.css';
import {
  Logo,
  PriceDiscount,
  Delivery,
  Counter,
  PurchageButton,
} from './components/index';

export default function App() {
  return (
    <div className='App'>
      <Logo />
      <PriceDiscount />
      <Delivery />
      <Counter />
      <PurchageButton />
    </div>
  );
}
