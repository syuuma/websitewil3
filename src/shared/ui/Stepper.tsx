/**
 * Stepper Component
 */

import React from 'react';

interface Step {
  label: string;
  status?: 'complete' | 'active' | 'incomplete';
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => (
  <div className="flex items-center justify-between">
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center">
          <div
            className={`
              w-10 h-10 rounded-full flex items-center justify-center font-semibold
              transition-colors
              ${
                index < currentStep
                  ? 'bg-green-600 text-white'
                  : index === currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }
            `}
          >
            {index < currentStep ? '✓' : index + 1}
          </div>
          <p className="text-xs md:text-sm font-medium mt-2 text-center max-w-xs">
            {step.label}
          </p>
        </div>

        {index < steps.length - 1 && (
          <div
            className={`
              flex-1 h-1 mx-2 transition-colors
              ${index < currentStep ? 'bg-green-600' : 'bg-gray-200'}
            `}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);
