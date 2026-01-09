import React from "react";
import Logo from '../assets/gold-coin.svg?react'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

type CurrencyProps = {
  amount: number
}

const Currency = (props: CurrencyProps) => {
  const amount = formatter.format(props.amount);
  return <div
    className="p-1 bg-gray-800 flex items-center border border-gray-900 rounded-md divide-x divide-gray-900"
  >
    <Logo className="h-5 w-5 mr-1" />
    <span className="pl-2">{amount}</span>
  </div>;
};

export default Currency;
