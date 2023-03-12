import React, {
  useReducer,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
  useMemo,
  useCallback,
} from 'react';
import './style.css';
import Loginn from './loginn.js';
import Test from './testcallBack.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'less':
      return { less: state.less + 100 };
    default:
      return state;
  }
};
export const userContext = createContext();

export default function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0, less: 0 });
  const [user, setUser] = useState('booob');
  const [call, setCall] = useState('function called yo');
  const [data, setData] = useState('');
  const ref = useRef();

  useLayoutEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then((responce) => {
        return responce.json();
      })
      .then((data) => setData(data));
      console.log({random})
    console.log((ref.current.value = 'peace'));
  }, []);

  useEffect(() => {
    peace();
    setTimeout(() => (ref.current.value = `ultra ${count}`), 5000);
  }, [count]);

  function peace() {
    return <div>helo {count}</div>;
  }


 
  let random = useMemo(() => Math.random().toFixed(2), []);

  const callbackTest = useCallback(() => {
    return call;
  }, [call]);
  return (
    <userContext.Provider value={{ user }}>
      <div>{random}</div>
      <button
        style={{ padding: '10px' }}
        onClick={() => dispatch({ type: 'less' })}
      >
        press {count}{' '}
      </button>

      {peace()}

      <button
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        {' '}
        press{' '}
      </button>
      <h1>{state.count}</h1>
      <h1>{state.less}</h1>

      <input
        placeholder="enter here"
        ref={ref}
        onChange={() => {
          console.log(ref.current.value);
        }}
      />

      <Loginn />

    
      <button
        onClick={() => {
          setCall('peace');
          setUser('papay');
          console.log({random})
        }}
      >
        test call back{' '}
      </button>
      <Test callbackTest={callbackTest} />
    </userContext.Provider>
  );
}
