import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success', duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center p-4 rounded-xl shadow-lg border transform transition-all duration-300 animate-slide-in ${
              toast.type === 'success' 
                ? 'bg-white border-green-100 text-gray-800' 
                : toast.type === 'error'
                ? 'bg-white border-red-100 text-gray-800'
                : 'bg-white border-blue-100 text-gray-800'
            }`}
          >
            <div className={`mr-3 p-1 rounded-full ${
                toast.type === 'success' ? 'bg-green-100 text-green-600' :
                toast.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
            }`}>
                {toast.type === 'success' && <CheckCircle size={16} />}
                {toast.type === 'error' && <AlertCircle size={16} />}
                {toast.type === 'info' && <Info size={16} />}
            </div>
            <p className="text-sm font-medium">{toast.message}</p>
            <button 
                onClick={() => removeToast(toast.id)}
                className="ml-4 text-gray-400 hover:text-gray-600"
            >
                <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
