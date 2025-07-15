import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem' }}>Лічильник: {count}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={() => dispatch(increment())} style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px' }}>+</button>
        <button onClick={() => dispatch(decrement())} style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px' }}>-</button>
        <button onClick={() => dispatch(reset())} style={{ backgroundColor: 'gray', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px' }}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
