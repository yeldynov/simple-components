import React from 'react';
import classNames from 'classnames';
import useNavigation from '../hooks/useNavigation';

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export default function Link({
  to,
  children,
  className,
  activeClassName,
}: Props) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.ctrlKey || e.metaKey) return;

    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
