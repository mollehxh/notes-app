import { ButtonBase } from '../button-base';
import './button.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  return <ButtonBase className="button" {...props} />;
};
