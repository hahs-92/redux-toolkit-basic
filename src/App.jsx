import { useSelector, useDispatch } from 'react-redux'
//actions
import { increment, decrement } from './store/slices/counter'
import './App.css'


function App() {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count is: {counter}
          </button>
        </p>
      </header>
      <h1>J</h1>
    </div>
  )
}

export default App
