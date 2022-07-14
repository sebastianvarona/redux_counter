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
    <div className="flex flex-wrap gap-4 pt-10 justify-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          className="text-lg font-medium p-2 rounded flex justify-center items-center bg-green-500/50 hover:bg-green-600/20"
          type="button"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="text-lg font-medium p-2 rounded flex justify-center items-center bg-blue-500/50 hover:bg-blue-600/20"
          type="button"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by 10
        </button>
      </div>
      <div className="text-lg font-medium p-2 rounded justify-center items-center hidden sm:flex">
        ||
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          className="text-lg font-medium p-2 rounded flex justify-center items-center bg-red-500/50 hover:bg-red-600/20"
          type="button"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="text-lg font-medium p-2 rounded flex justify-center items-center bg-orange-500/50 hover:bg-orange-600/20"
          type="button"
          onClick={() => dispatch(incrementByAmount(-10))}
        >
          Decrement by 10
        </button>
      </div>
    </div>
  );
}
