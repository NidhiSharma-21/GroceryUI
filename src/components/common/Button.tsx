import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
  children: React.ReactNode;
}

const baseStyle = 'rounded-xl font-semibold py-3 px-4 transition-colors duration-150 focus:outline-none';
const variants = {
  primary: 'bg-[#53B175] text-white shadow-lg',
  secondary: 'bg-white text-[#53B175] border border-[#53B175]',
  icon: 'bg-transparent p-2',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      style={{ fontFamily: 'Roboto', fontSize: 16 }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 