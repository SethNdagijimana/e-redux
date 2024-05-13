import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

import { useState } from 'react';




 const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
      setIncrementAmount(0);
      dispatch(reset())
    }

  return (
    <selection>
        <p className='text-center text-4xl'>{count}</p>
        <div className='flex flex-col mt-2'>
          <button onClick={() => dispatch(increment())} className='bg-black text-white mt-2 rounded text-2xl'>+</button>  &nbsp;
          <button onClick={() => dispatch(decrement())} className='bg-black text-white rounded text-2xl'>-</button>  &nbsp;
          {/* <button onClick={() => dispatch(reset())} className='bg-black text-white rounded text-2xl'>Reset</button> &nbsp;
          <button onClick={() => dispatch(incrementByAmount())} className='bg-black text-white rounded text-2xl'>incrementByAmount</button> */}
      
        </div>

        <input type='text' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>

        <div className='flex flex-col mt-2 space-y-2'>
          <button onClick={() => dispatch(incrementByAmount(addValue))} className='bg-black text-white rounded text-2xl'>Add Amount</button>
          <button onClick={resetAll} className='bg-black text-white rounded text-2xl'>Reset All</button>
        </div>
    </selection>
  )
}


export default Counter