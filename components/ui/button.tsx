
import React from 'react';

export function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
}
