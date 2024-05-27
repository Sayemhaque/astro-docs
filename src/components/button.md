---
import React from 'react';

// Define TypeScript interface for props
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

// React Button Component
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

// Export Button component
export default Button;
---

# Button Component Documentation

The `Button` component is a reusable UI element that triggers an action when clicked. It accepts a label and an optional click handler.

## Props

### `label` (string, required)

The text displayed on the button.

### `onClick` (function, optional)

A function to execute when the button is clicked.

## Usage

### Basic Usage

 
