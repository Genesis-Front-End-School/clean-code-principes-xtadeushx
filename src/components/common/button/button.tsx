import { clsx } from 'clsx';

import styles from './button.module.scss';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
  dataTestId: string;
  className?: string;
};

const Button = ({
  children,
  type,
  dataTestId,
  className = '',
  ...rest
}: TButtonProps) => {
  return (
    <button
      data-test-id={dataTestId}
      className={clsx(styles.button, className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
