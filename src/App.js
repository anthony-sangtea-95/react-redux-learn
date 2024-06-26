import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";
import { signIn } from "./slices/loggedSlice";

function App() {
  const counter = useSelector(state => state.counter.count);
  const isLogged = useSelector(state => state.isLogged.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br/>
      <h1>Sign In ? : {isLogged ? 'Yes': 'No'} </h1>
      <button onClick={() => dispatch(signIn())}>{ isLogged ? 'Logout': 'Login'}</button>
    </div>
  );
}

export default App;
