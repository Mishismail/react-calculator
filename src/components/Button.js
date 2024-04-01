//Button.js

import React from "react";
import "./Button.css";

const Button = ({
  children,
  color = "default",
  backgroundColor = "primary",
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      className={`button ${color} ${backgroundColor} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;