import React from 'react';
import Counter from '../components/Counter';

type Props = {
  initialCount: number;
};

export default function CounterPage({ initialCount }: Props) {
  return <Counter initialCount={initialCount} />;
}
