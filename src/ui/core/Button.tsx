import React, { ButtonHTMLAttributes } from "react";

type ButtonProps =
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'children' | 'type'>;

const Button: React.FC<ButtonProps> = ({type, onClick, children}) => {

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      py-1 px-3 rounded-md
      border-2
      border-blue-700 hover:border-blue-800
      bg-blue-600     hover:bg-blue-700
      `}
    >{children}</button>
  );
}

export default Button;
