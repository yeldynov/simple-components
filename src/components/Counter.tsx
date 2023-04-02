import useCounter from '../hooks/useCounter';
import Button from './Button';

type Props = {
  initialCount: number;
};

export default function Counter({ initialCount }: Props) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1 className='text-3xl'>Count is {count}</h1>
      <Button primary onClick={increment}>
        Increment
      </Button>
    </div>
  );
}
