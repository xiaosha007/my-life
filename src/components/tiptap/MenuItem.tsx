import React from 'react';
import { IconType } from 'react-icons';
import './styles/MenuItem.css';

// FIXME: change the any type
export const MenuItem = ({
  icon,
  title,
  action,
  isActive = null,
}: {
  icon?: IconType;
  title?: string;
  action?: any;
  isActive?: any;
}) => {
  return (
    <button
      className={`menu-item${
        isActive && isActive() ? ' is-active' : ''
      } text-white`}
      onClick={action}
      title={title}
    >
      {icon && React.createElement(icon, { className: 'mx-auto h-16 w-16' })}
    </button>
  );
};
