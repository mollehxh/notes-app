import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from '@tabler/icons-react';
import './sidebar.scss';
import { IconButton } from '../icon-button';
import { useState } from 'react';
import clsx from 'clsx';

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = (props: SidebarProps) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx('sidebar', { 'sidebar--open': isOpen })}>
      <div className="sidebar__button">
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IconChevronCompactLeft /> : <IconChevronCompactRight />}
        </IconButton>
      </div>
      {children}
    </div>
  );
};
