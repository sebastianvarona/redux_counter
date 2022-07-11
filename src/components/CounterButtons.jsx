import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../features/counter/counterSlice';

export default function CounterButtons() {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 pt-10">
      <button
        className="text-lg font-medium p-2 rounded flex justify-center items-center hover:bg-green-500/20"
        type="button"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="text-lg font-medium p-2 rounded flex justify-center items-center hover:bg-blue-500/20"
        type="button"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment by 10
      </button>
      <div className="text-lg font-medium p-2 rounded flex justify-center items-center">
        ||
      </div>
      <button
        className="text-lg font-medium p-2 rounded flex justify-center items-center hover:bg-red-500/20"
        type="button"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="text-lg font-medium p-2 rounded flex justify-center items-center hover:bg-orange-500/20"
        type="button"
        onClick={() => dispatch(incrementByAmount(-10))}
      >
        Decrement by 10
      </button>
    </div>
  );
}
