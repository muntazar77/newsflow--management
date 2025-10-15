
import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, icon, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md flex items-start space-x-4 ${className}`}>
      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div className="text-2xl font-bold text-gray-900">{children}</div>
      </div>
    </div>
  );
};

export default Card;
