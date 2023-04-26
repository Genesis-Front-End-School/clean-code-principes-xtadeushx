import { clsx } from 'clsx';

import styles from './button.module.scss';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button';
  dataTestId: string;
  className?: string;
};

const Button = ({
  children,
  onClick,
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
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
