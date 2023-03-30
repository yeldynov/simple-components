import React from 'react';
import useNavigation from '../hooks/useNavigation';

type Props = {
  path: string;
  children: React.ReactElement;
};

export default function Route({ path, children }: Props) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}
