import { ButtonBase } from '../button-base';
import './icon-button.scss';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const IconButton = (props: IconButtonProps) => {
  return <ButtonBase className="icon-button" {...props} />;
};
