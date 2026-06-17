/**
 * Card Component
 */

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  bordered?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ hoverable = false, bordered = true, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          bg-white rounded-lg p-4 md:p-6
          ${bordered ? 'border border-gray-200' : 'shadow-md'}
          ${hoverable ? 'transition-shadow duration-200 hover:shadow-lg cursor-pointer' : ''}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center justify-between mb-4 pb-4 border-b border-gray-200 ${className}`}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`${className}`} {...props} />
  )
);

CardBody.displayName = 'CardBody';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center justify-end gap-2 mt-4 pt-4 border-t border-gray-200 ${className}`}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';
