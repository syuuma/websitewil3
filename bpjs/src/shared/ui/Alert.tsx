/**
 * Alert Component
 */

import React from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AlertType;
  title?: string;
  onClose?: () => void;
}

const typeStyles: Record<AlertType, string> = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
};

const iconColors: Record<AlertType, string> = {
  success: 'text-green-600',
  error: 'text-red-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { type = 'info', title, onClose, className = '', children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          border rounded-md p-4 flex items-start gap-3
          ${typeStyles[type]}
          ${className}
        `}
        {...props}
      >
        <div className="flex-1">
          {title && <h3 className="font-semibold mb-1">{title}</h3>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

/**
 * Badge Component
 */

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

const badgeVariants: Record<BadgeVariant, string> = {
  primary: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-sky-100 text-sky-800',
};

const badgeSizes: Record<'sm' | 'md', string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => (
    <span
      ref={ref}
      className={`
        inline-block font-medium rounded-full
        ${badgeVariants[variant]}
        ${badgeSizes[size]}
        ${className}
      `}
      {...props}
    />
  )
);

Badge.displayName = 'Badge';
