import clsx from 'clsx';
import './list-item.scss';

type ListItemProps = {
  children: React.ReactNode;
  selected?: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

export const ListItem = (props: ListItemProps) => {
  const { children, selected, onClick } = props;

  return (
    <li
      className={clsx('list-item', { 'list-item--selected': selected })}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
