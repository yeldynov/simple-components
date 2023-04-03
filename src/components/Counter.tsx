import React, { useReducer } from 'react';
import Button from './Button';
import Panel from './Panel';

type Props = {
  initialCount: number;
};

interface State {
  count: number;
  valueToAdd: number;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'CHANGE_VALUE_TO_ADD'; payload: number }
  // | { type: 'ADD_VALUE'; payload: number }
  | { type: 'ADD_VALUE_TO_COUNT' };

const reducer = (state: State, action: Action) => {
  // Whatever gets returned will be the next state!
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'CHANGE_VALUE_TO_ADD':
      return {
        ...state,
        valueToAdd: action.payload,
      };
    // case 'ADD_VALUE':
    //   return {
    //     ...state,
    //     count: state.count + action.payload,
    //   };
    case 'ADD_VALUE_TO_COUNT':
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

export default function Counter({ initialCount }: Props) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: 'DECREMENT' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({ type: 'CHANGE_VALUE_TO_ADD', payload: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setCount(count + valueToAdd);
    // setValueToAdd(0);

    // TWO DISPATCH CALLS!
    // dispatch({ type: 'ADD_VALUE', payload: state.valueToAdd });
    // dispatch({ type: 'CHANGE_VALUE_TO_ADD', payload: 0 });

    // ALL IN ONE DISPATCH CALL!
    dispatch({ type: 'ADD_VALUE_TO_COUNT' });
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-3xl'>Count is {state.count}</h1>
      <div className='flex flex-row gap-3'>
        <Button secondary rounded onClick={decrement}>
          Decrement
        </Button>
        <Button secondary rounded onClick={increment}>
          Increment
        </Button>
      </div>
      <form className='mt-4' onSubmit={handleSubmit}>
        <label className='text-xl'>Add a lot</label>
        <input
          className='border rounded p-1 m-3 bg-gray-50 border-gray-300'
          type='number'
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}
