import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  [x: string]: any; // for the ...rest props like event handlers
};

export default function Panel({ children, className, ...rest }: Props) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
