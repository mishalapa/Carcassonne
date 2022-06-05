import React, { useState } from 'react'
import logo0 from '../assets/base/tail0.jpg'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const BaseCarts = ({data, point}) => {
  
  const [amount, setAmount] = useState(localStorage.getItem(point) ? +localStorage.getItem(point) : data[point][1])
  if(!localStorage.getItem(point)) {
    localStorage.setItem(point, data[point][1])
  }

  function decrement() {
    if(amount === 0) {
      return
    }
    localStorage.setItem(point, amount-1)
    setAmount(amount-1)
  }

  function increment() {
    if(amount > data[point][1] - 1) {
      return
    }
    localStorage.setItem(point, amount+1)
    setAmount(amount+1)
  }


  return (
    <div className='cart'>
      <img className='tail' src={amount > 0 ? data[point][0] : logo0} alt="pic" />
      <div className='cart__number'>
        <AiFillMinusCircle className='button' onClick={decrement} />
        <p className='number'> 
        {amount >=0 ? amount : 0}
        </p>
        <AiFillPlusCircle className='button' onClick={increment} />
      </div>
  </div>
  )
}

export default BaseCarts