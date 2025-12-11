import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Shield, MapPin, Phone, Calendar } from 'lucide-react';

import BackButton from '../components/ui/BackButton';

const Profile = () => {
  const { user, logout } = useAuth();


  const userProfile = {
    fullname: user?.fullname || 'Pengguna Setia',
    email: user?.email || 'user@example.com',
    role: user?.role || 'Tenant',
    joinDate: 'December 2025',
    phone: '+62 812-3456-7890',
    location: 'Jakarta, Indonesia',
    bio: 'Looking for a comfortable apartment near the city center.'
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
           <BackButton />
        </div>
        
   
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="h-24 bg-gradient-to-r from-rent-orange/90 to-orange-400"></div>
          <div className="px-8 pb-8">
            <div className="relative flex items-end -mt-12 mb-6">
              <div className="w-24 h-28 rounded-full border-4 border-white bg-white shadow-md overflow-hidden flex items-center justify-center">
                 <span className="text-4xl font-bold text-rent-orange">
                    {userProfile.email.charAt(0).toUpperCase()}
                 </span>
              </div>
              <div className="ml-6 mb-2">
                <h1 className="text-2xl font-bold text-gray-900 capitalize">
                  {userProfile.email.split('@')[0]}
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    userProfile.role === 'owner' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {userProfile.role}
                  </span>
                  <span>• Joined {userProfile.joinDate}</span>
                </div>
              </div>
              
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                   Basic Information
                </h3>
                 <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-rent-orange shrink-0">
                          <Mail size={20} />
                       </div>
                       <div>
                          <p className="text-sm font-medium text-gray-500">Email Address</p>
                          <p className="text-gray-900 font-semibold">{userProfile.email}</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                          <Shield size={20} />
                       </div>
                       <div>
                          <p className="text-sm font-medium text-gray-500">Account Role</p>
                          <p className="text-gray-900 font-semibold capitalize">{userProfile.role}</p>
                       </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                          <Calendar size={20} />
                       </div>
                       <div>
                          <p className="text-sm font-medium text-gray-500">Member Since</p>
                          <p className="text-gray-900 font-semibold">{userProfile.joinDate}</p>
                       </div>
                    </div>
                 </div>
              </div>

               {/* Additional Details */}
               <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                     Contact & Location
                  </h3>
                  <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4 shadow-sm">
                     <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="flex items-center text-gray-600">
                           <Phone size={18} className="mr-3 text-gray-400" /> Phone
                        </span>
                        <span className="font-medium text-gray-900">{userProfile.phone}</span>
                     </div>
                     <div className="flex items-center justify-between py-2 border-b border-gray-50">
                        <span className="flex items-center text-gray-600">
                           <MapPin size={18} className="mr-3 text-gray-400" /> Location
                        </span>
                        <span className="font-medium text-gray-900">{userProfile.location}</span>
                     </div>
                     <div className="pt-2">
                        <p className="text-sm text-gray-500 mb-1">About</p>
                        <p className="text-gray-700 leading-relaxed text-sm">
                           {userProfile.bio}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
