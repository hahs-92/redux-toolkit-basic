import { useSelector, useDispatch } from 'react-redux'
//actions
import {
  increment,
  decrement,
  incrementByAmount,
  incrementBy2
} from './store/slices/counter'
import './App.css'


function App() {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <p>
            count is: {counter}
        </p>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch(incrementBy2())}>
            Increment By 2
          </button>
          <button type="button" onClick={() => dispatch(incrementByAmount(6))}>
            Increment By 6
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
      </header>
      <h1>J</h1>
    </div>
  )
}

export default App
