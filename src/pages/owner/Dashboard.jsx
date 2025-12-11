import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { BarChart3, TrendingUp, Users, DollarSign, Home } from 'lucide-react';

import BackButton from '../../components/ui/BackButton';

const Dashboard = () => {
  const stats = [
    { label: 'Total Revenue', value: 'Rp 45.2M', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Active Listings', value: '12', icon: Home, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Views', value: '1,234', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Leads', value: '89', icon: Users, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];


  const activities = [
    { user: 'Budi Santoso', action: 'viewed', target: 'Luxury Apartment in CBD', time: '2 mins ago' },
    { user: 'Siti Aminah', action: 'inquired about', target: 'Cozy Studio', time: '1 hour ago' },
    { user: 'Rudi Hartono', action: 'booked a visit for', target: 'Villa in Bali', time: '3 hours ago' },
  ];

  function Home(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
  }

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
           <BackButton />
        </div>
        
        <div className="mb-8">
           <h1 className="text-2xl font-bold text-gray-900">Owner Dashboard</h1>
           <p className="text-gray-500">Welcome back! Here's what's happening with your properties.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                       <stat.icon size={24} />
                    </div>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                 <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 
           <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                 <button className="text-sm text-rent-orange font-medium hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                 {activities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 shrink-0">
                          {activity.user.charAt(0)}
                       </div>
                       <div>
                          <p className="text-sm text-gray-900">
                             <span className="font-bold">{activity.user}</span> {activity.action} <span className="font-bold">{activity.target}</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>


           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                 <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-rent-orange hover:bg-orange-50 transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-rent-orange">Add New Property</span>
                    <TrendingUp size={18} className="text-gray-400 group-hover:text-rent-orange" />
                 </button>
                 <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-rent-orange hover:bg-orange-50 transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-rent-orange">Promote Listing</span>
                    <BarChart3 size={18} className="text-gray-400 group-hover:text-rent-orange" />
                 </button>
                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-rent-orange hover:bg-orange-50 transition-all group">
                    <span className="font-medium text-gray-700 group-hover:text-rent-orange">View Reports</span>
                    <TrendingUp size={18} className="text-gray-400 group-hover:text-rent-orange" />
                 </button>
              </div>
           </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
