import { clsx } from 'clsx';
import './button-base.scss';

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const ButtonBase = (props: ButtonBaseProps) => {
  const { className, disabled, ...others } = props;

  return (
    <button
      className={clsx([
        'button-base',
        { 'button-base--disabled': disabled },
        className,
      ])}
      disabled={disabled}
      {...others}
    />
  );
};
