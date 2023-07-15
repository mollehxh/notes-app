import './app-shell.scss';

type AppShellProps = {
  children: React.ReactNode;
  topSlot?: React.ReactNode;
  leftSlot?: React.ReactNode;
};

export const AppShell = (props: AppShellProps) => {
  const { children, topSlot, leftSlot } = props;

  return (
    <div className="app-shell">
      <div className="app-shell__top-slot">{topSlot}</div>
      <div className="app-shell__left-slot">{leftSlot}</div>
      <main className="app-shell__main">{children}</main>
    </div>
  );
};
