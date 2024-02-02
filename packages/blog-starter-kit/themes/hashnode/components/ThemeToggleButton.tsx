import React, { useState } from 'react';
import { useThemeStore } from './contexts/themeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isSpinning, setIsSpinning] = useState(false);
  const isDark = theme === 'dark';

  const handleClick = () => {
    setIsSpinning(true); // Start spinning
    toggleTheme(); // Toggle the theme

    // Stop spinning after 0.6 seconds, adjust timing to match your CSS animation
    setTimeout(() => setIsSpinning(false), 600);
  };

  return (
    <button
      className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent p-2 text-sm font-semibold text-slate-600 hover:border hover:border-slate-400 dark:text-slate-300 dark:hover:border-slate-200"
      aria-label="darkmode"
      onClick={handleClick}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        className={`h-6 w-6 stroke-2 transition-transform duration-500 ${isSpinning ? 'rotate-180' : ''}`}
        style={{ transform: isSpinning ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        {isDark ? (
          <path
            d="M12 20v2m0-20v2m8 8h2M2 12h2m14 6 1.5 1.5m-15-15L6 6m12 0 1.5-1.5m-15 15L6 18m11-6a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M3 11.449C3 16.724 7.169 21 12.312 21c3.959 0 7.34-2.534 8.688-6.107a8.074 8.074 0 0 1-3.515.8c-4.571 0-8.277-3.8-8.277-8.489 0-1.961.648-3.767 1.737-5.204C6.45 2.678 3 6.65 3 11.449Z"
            stroke="#475569"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggleButton;
