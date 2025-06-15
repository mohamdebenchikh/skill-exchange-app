import React from 'react';
import BackButton from "./back-button";

interface AppHeaderProps {
  // Title props
  title?: string | React.ReactNode;
  
  // Left side props
  leftSide?: React.ReactNode;
  showBackButton?: boolean;
  
  // Right side props
  rightSide?: React.ReactNode;
  
  // Styling props
  className?: string;
}

export default function AppHeader({
  title,
  leftSide,
  showBackButton = true,
  rightSide,
  className = ""
}: AppHeaderProps) {
  
  const renderLeftSide = () => {
    // If custom leftSide is provided, use it
    if (leftSide) {
      return <div className="flex items-center gap-2">{leftSide}</div>;
    }

    // Default behavior: show back button if enabled
    if (showBackButton) {
      return (
        <div className="flex items-center gap-2">
          <BackButton />
        </div>
      );
    }

    return null;
  };

  const renderRightSide = () => {
    return rightSide ? (
      <div className="flex items-center gap-2">
        {rightSide}
      </div>
    ) : null;
  };

  const renderTitle = () => {
    if (!title) return null;

    // If title is a string, wrap it in default styling
    if (typeof title === 'string') {
      return (
        <h2 className="text-lg font-bold text-primary">
          {title}
        </h2>
      );
    }

    // If title is a React component, render it as-is
    return title;
  };

  return (
    <div className={`h-14 px-4 w-full flex sticky top-0 z-10 items-center bg-background ${className}`}>
      {/* Left side */}
      <div className="absolute left-4">
        {renderLeftSide()}
      </div>

      {/* Center - Title (always centered) */}
      <div className="flex-1 flex justify-center items-center">
        {renderTitle()}
      </div>

      {/* Right side */}
      <div className="absolute right-4">
        {renderRightSide()}
      </div>
    </div>
  );
}