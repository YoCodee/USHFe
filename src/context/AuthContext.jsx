import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('password', password);

      const response = await api.post('/api/v1/login', formData);
      console.log('Login Full Response:', response);
      const data = response.data;
      
 
      if (data.status === 'failed') {
        throw new Error(data.message || 'Login failed');
      }


      const userData = {
        email: email,
        ...data 
      };
      
      setUser(userData);
      return true;

    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (fullname, email, password, role) => {
    try {
      const formData = new URLSearchParams();
      formData.append('fullname', fullname);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('role', role);

      await api.post('/api/v1/register', formData);
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
