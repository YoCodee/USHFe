import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; // Keep generic or rename
import OwnerDashboard from './pages/owner/Dashboard';
import AddProperty from './pages/owner/AddProperty';
import MyListings from './pages/owner/MyListings';
import Landing from './pages/Landing';

import Profile from './pages/Profile';

import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';



const SmartDashboard = () => {
    const { user } = useAuth();
    if (user?.role === 'owner' || user?.data?.role === 'owner') {
        return <OwnerDashboard />;
    }

    return <Navigate to="/profile" replace />; 
}


import Favorites from './pages/Favorites';
import Bookings from './pages/Bookings';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/dashboard" element={<SmartDashboard />} />
          
          <Route path="/profile" element={<Profile />} />
          
  
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          
 
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/my-listings" element={<MyListings />} />
        </Routes>
      </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
