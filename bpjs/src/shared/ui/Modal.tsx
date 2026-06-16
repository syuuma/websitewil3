/**
 * Modal Component
 */

import React, { useEffect } from 'react';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  closeButton?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      closeButton = true,
      size = 'md',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <div
          ref={ref}
          className={`
            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-white rounded-lg shadow-xl z-50 w-full mx-4
            ${sizeStyles[size]}
            ${className}
          `}
          {...props}
        >
          {closeButton && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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
          {children}
        </div>
      </>
    );
  }
);

Modal.displayName = 'Modal';

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`px-6 py-4 border-b border-gray-200 ${className}`}
      {...props}
    />
  )
);

ModalHeader.displayName = 'ModalHeader';

interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`px-6 py-4 ${className}`} {...props} />
  )
);

ModalBody.displayName = 'ModalBody';

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-200 ${className}`}
      {...props}
    />
  )
);

ModalFooter.displayName = 'ModalFooter';
