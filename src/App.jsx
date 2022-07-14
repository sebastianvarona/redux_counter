import React from 'react';
import { useSelector } from 'react-redux';
import CounterButtons from './components/CounterButtons';

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="App">
      <header className="App-header flex flex-col items-center pt-24">
        <h1 className="text-6xl font-bold text-center">Redux Counter</h1>
        <div className="flex flex-col items-center gap-3">
          <p className="text-4xl font-medium pt-10 underline">
            Count is: {count}
          </p>
          <CounterButtons />
        </div>
      </header>
    </div>
  );
}

export default App;
