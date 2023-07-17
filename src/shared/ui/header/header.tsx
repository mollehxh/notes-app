import './header.scss';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = (props: HeaderProps) => {
  return <header className="header" {...props} />;
};
