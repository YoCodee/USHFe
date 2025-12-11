import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackButton from '../components/ui/BackButton';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';

const Bookings = () => {
  // Dummy Booking Data
  const bookings = [
    {
        id: 'BK-001',
        title: 'Modern Apartment in Jakarta',
        image: '/images/prop2.png',
        location: 'Sudirman, Jakarta',
        date: '15 Dec 2025',
        time: '14:00 PM',
        status: 'Confirmed'
    },
    {
        id: 'BK-002',
        title: 'Cozy House in Bandung',
        image: '/images/prop1.png',
        location: 'Dago, Bandung',
        date: '20 Dec 2025',
        time: '10:30 AM',
        status: 'Pending'
    }
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
         <div className="mb-6">
           <BackButton className="bg-white/50 p-2 rounded-lg hover:bg-white" />
        </div>

         <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
            <p className="text-gray-500">Schedule of your property visits.</p>
        </div>

        <div className="space-y-6">
            {bookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                        <img src={booking.image} alt={booking.title} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 w-full text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                             <h3 className="text-xl font-bold text-gray-900">{booking.title}</h3>
                             <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide inline-block ${
                                 booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                             }`}>
                                 {booking.status}
                             </span>
                        </div>
                        <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 mb-4">
                            <MapPin size={16} /> {booking.location}
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 pt-4 border-t border-gray-50">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <Calendar size={18} className="text-rent-orange" />
                                <span className="font-medium">{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <Clock size={18} className="text-rent-orange" />
                                <span className="font-medium">{booking.time}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-auto flex justify-center">
                         {booking.status === 'Confirmed' ? (
                             <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium cursor-default">
                                 <CheckCircle size={18} /> Rescheduled
                             </button>
                         ) : (
                             <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                                 Manage Booking
                             </button>
                         )}
                    </div>
                </div>
            ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Bookings;
