
import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md">
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
