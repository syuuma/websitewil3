/**
 * Tabs Component
 */

import React, { useState } from 'react';

interface TabItem {
  label: string;
  value: string;
}

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultValue = items[0]?.value,
  onChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <div className={className}>
      <div className="flex border-b border-gray-200">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => handleTabChange(item.value)}
            className={`
              px-4 py-2 font-medium text-sm border-b-2 transition-colors
              ${
                activeTab === item.value
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className = '', ...props }, ref) => (
    <div ref={ref} className={`pt-4 ${className}`} {...props} />
  )
);

TabsContent.displayName = 'TabsContent';
