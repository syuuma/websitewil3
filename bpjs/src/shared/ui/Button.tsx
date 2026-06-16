/**
 * Button Component
 */

import React from 'react';
import { theme } from '@/shared/constants/theme';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900 disabled:bg-gray-300',
  secondary:
    'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-300',
  danger:
    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-gray-300',
  outline:
    'border-2 border-blue-700 text-blue-700 hover:bg-blue-50 active:bg-blue-100 disabled:border-gray-300 disabled:text-gray-300',
  ghost:
    'text-blue-700 hover:bg-blue-50 active:bg-blue-100 disabled:text-gray-300',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          inline-flex items-center justify-center gap-2
          font-medium rounded-md transition-colors duration-200
          disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {leftIcon && !isLoading && <span>{leftIcon}</span>}
        {isLoading && (
          <span className="animate-spin">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </span>
        )}
        {children}
        {rightIcon && !isLoading && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
