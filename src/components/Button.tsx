import className from 'classnames';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  outline?: boolean;
  rounded?: boolean;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  [x: string]: any; // for the ...rest props like event handlers
};

export default function Button({
  children,
  outline,
  rounded,
  success,
  danger,
  warning,
  primary,
  secondary,
  ...rest
}: Props) {
  const classes = twMerge(
    className(rest.className, 'flex items-center px-3 py-1.5 border', {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationName: ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }: Props) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be used simultaneously'
      );
    }
  },
};
