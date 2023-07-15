import { clsx } from 'clsx';
import './button-base.scss';

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const ButtonBase = (props: ButtonBaseProps) => {
  const { className, ...others } = props;

  return <button className={clsx(['button-base', className])} {...others} />;
};
