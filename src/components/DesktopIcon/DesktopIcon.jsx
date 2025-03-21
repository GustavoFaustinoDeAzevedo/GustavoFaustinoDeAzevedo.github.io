import React from 'react';

const DesktopIcon = ({ title, icon, onClick }) => {
  return (
    <div
      className="desktop-icon"
      onTouchStart={onClick}
      onDoubleClick={onClick}
    >
      <i className={`bi ${icon}`}></i>
      <span>{title}</span>
    </div>
  );
};

export default DesktopIcon;
