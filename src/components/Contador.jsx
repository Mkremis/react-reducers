import React, { useReducer } from 'react';
const initialState = { contador: 0 };
const init = (initialState) => ({ contador: initialState.contador + 100 });
const TYPES = {
  INCREMENT: 'INCREMENT',
  INCREMENT_5: 'INCREMENT_5',
  DECREMENT: 'DECREMENT',
  DECREMENT_5: 'DECREMENT_5',
  RESET: 'RESET',
};
function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}
const Contador = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });
  // const sumar = () => setCount(count + 1);
  // const restar = () => setCount(count - 1);
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={sumar5}>+5</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
        <button onClick={reset}>Reset</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
