import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h2 className="text-2xl mb-4">Лічильник: {count}</h2>
      <div className="flex justify-center gap-4">
        <button onClick={() => dispatch(increment())} className="bg-green-500 text-white px-4 py-2 rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
        <button onClick={() => dispatch(reset())} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
