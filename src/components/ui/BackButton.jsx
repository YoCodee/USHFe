import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ className = '', label = 'Back' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on root path (Landing)
  if (location.pathname === '/') return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className={`group flex items-center text-sm font-medium text-gray-500 hover:text-rent-orange transition-colors ${className}`}
    >
      <div className="p-1 rounded-full group-hover:bg-orange-50 mr-2 transition-colors">
        <ArrowLeft size={20} />
      </div>
      {label}
    </button>
  );
};

export default BackButton;
