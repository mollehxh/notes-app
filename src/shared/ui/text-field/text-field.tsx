import './text-field.scss';
import clsx from 'clsx';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
};

export const TextField = (props: TextFieldProps) => {
  const { icon, ...others } = props;

  return (
    <div className="text-field-container">
      {icon && <div className="text-field-icon">{icon}</div>}
      <input
        className={clsx('text-field', { 'text-field--has-icon': icon })}
        type="text"
        {...others}
      />
    </div>
  );
};
