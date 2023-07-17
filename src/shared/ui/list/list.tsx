import './list.scss';

type ListProps = {
  children: React.ReactNode;
};

export const List = (props: ListProps) => {
  const { children } = props;

  return <ul className="list">{children}</ul>;
};
