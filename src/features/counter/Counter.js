import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice';




 const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
    <selection>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>  &nbsp;
          <button onClick={() => dispatch(decrement())}>-</button>  &nbsp;
          <button onClick={() => dispatch(reset())}>Reset</button> &nbsp;
          <button onClick={() => dispatch(incrementByAmount())}>incrementByAmount</button>
      
        </div>
    </selection>
  )
}


export default Counter