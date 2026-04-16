import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseByAmount, decrement, increment, incrementByAmount } from './redux/features/counterSlice'
import { useState } from 'react';

function App() {

  const dispatch = useDispatch(); // perform action
  const count = useSelector((state) => state.counter.value); // use to show on the UIs
  const [num, setNum] = useState(0);


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {dispatch(increment())}} >Increment by 1</button>

      <button onClick={() => { dispatch(decrement()) }}>Decrement by 1</button>

      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <button onClick={() => { dispatch(incrementByAmount(Number(num))) }} >IncreaseBy {num}</button>

      <button onClick={() =>{dispatch(decreaseByAmount(Number(num)))}} >DecreaseBy {num}</button>
    </div>


  )
}

export default App
