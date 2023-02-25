import React from 'react';
import './style.css';
import { Logo, PriceDiscount } from './components/index';

export default function App() {
  return (
    <div className="App">
      <Logo />
      <PriceDiscount />
    </div>
  );
}
