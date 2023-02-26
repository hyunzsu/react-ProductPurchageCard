import React from 'react';
import './style.css';
import { Logo, PriceDiscount, Delivery } from './components/index';

export default function App() {
  return (
    <div className='App'>
      <Logo />
      <PriceDiscount />
      <Delivery />
    </div>
  );
}
