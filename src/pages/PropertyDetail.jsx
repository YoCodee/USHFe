import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import BackButton from '../components/ui/BackButton';
import { Bed, Bath, Hash, MapPin, Heart, Share2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { user } = useAuth(); 

  const [showBookingModal, setShowBookingModal] = React.useState(false);
  const [bookingData, setBookingData] = React.useState({
      date: '',
      time: '',
      notes: ''
  });

  const handleBookClick = () => {

      const currentUserRole = user?.data?.role || user?.role;
      
      if (currentUserRole === 'owner') {
           addToast("Property Owners cannot book visits. Please login as a Tenant or Register as a Tenant.", "error");
           return;
      }
      
      setShowBookingModal(true);
  }


  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setShowBookingModal(false);
    
    addToast("Booking success! We'll contact you shortly.", "success");
    
    setTimeout(() => {
        navigate('/bookings');
    }, 1500);
  };


  const property = {
    title: 'Luxury Villa in Bali',
    address: 'Ubud, Gianyar, Bali, Indonesia',
    price: 'Rp 45.000.000',
    description: 'Experience the ultimate luxury living in this stunning villa located in the heart of Ubud. Featuring modern amenities, a private pool, and breathtaking views of the rice terraces. Perfect for those seeking tranquility and comfort.',
    specs: { beds: 4, baths: 3, sqft: '450 Sqft' },
    images: ['/images/prop1.png', '/images/prop2.png'],
    features: ['Private Pool', 'Garden', 'Wi-Fi', 'Parking', 'Security', 'Gym Access']
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
         <div className="mb-6">
           <BackButton />
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[500px] mb-8 rounded-2xl overflow-hidden">
            <div className="h-full bg-gray-100">
                <img src={property.images[0]} alt="Main" className="w-full h-full object-cover " />
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
                <div className="bg-gray-100 overflow-hidden">
                    <img src={property.images[1]} alt="Side" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-800 flex items-center justify-center text-white relative overflow-hidden group cursor-pointer">
                    <img src={property.images[0]} alt="More" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" />
                    <span className="relative z-10 text-xl font-bold">+5 Photos</span>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
            <div className="lg:col-span-2">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                        <p className="text-gray-500 flex items-center text-lg">
                            <MapPin size={20} className="mr-2 text-rent-orange" /> {property.address}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-3 rounded-full border border-gray-200 hover:border-red-500 hover:text-red-500 transition-colors">
                            <Heart size={20} />
                        </button>
                        <button className="p-3 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>

                {/* Specs */}
                <div className="flex gap-8 py-6 border-y border-gray-100 mb-8">
                     <div className="flex items-center gap-3">
                         <div className="p-2 bg-orange-50 rounded-lg text-rent-orange"><Bed size={24} /></div>
                         <div><p className="font-bold text-gray-900">{property.specs.beds}</p><p className="text-xs text-gray-500">Bedrooms</p></div>
                     </div>
                     <div className="flex items-center gap-3">
                         <div className="p-2 bg-orange-50 rounded-lg text-rent-orange"><Bath size={24} /></div>
                         <div><p className="font-bold text-gray-900">{property.specs.baths}</p><p className="text-xs text-gray-500">Bathrooms</p></div>
                     </div>
                     <div className="flex items-center gap-3">
                         <div className="p-2 bg-orange-50 rounded-lg text-rent-orange"><Hash size={24} /></div>
                         <div><p className="font-bold text-gray-900">{property.specs.sqft}</p><p className="text-xs text-gray-500">Area</p></div>
                     </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {property.description}
                    </p>
                </div>

                 <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {property.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-rent-orange rounded-full mr-3"></span>
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar / Make Offer */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <div className="mb-6">
                        <p className="text-gray-500 text-sm">Monthly Rent</p>
                        <p className="text-3xl font-bold text-rent-orange">{property.price}</p>
                    </div>

                    <div className="space-y-4">
                        <Button onClick={handleBookClick} className="w-full py-4 text-lg shadow-orange-500/30">
                            Book a Visit
                        </Button>
                        <Button variant="secondary" className="w-full py-4 text-lg">
                            Contact Owner
                        </Button>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-6">
                        You won't be charged yet.
                    </p>
                </div>
            </div>
        </div>
      </main>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-scale-up">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Book a Visit</h2>
                <p className="text-gray-500 mb-6">Schedule a time to view this property.</p>
                
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input 
                            type="date" 
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rent-orange/20 focus:border-rent-orange outline-none"
                            onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                        <input 
                            type="time" 
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rent-orange/20 focus:border-rent-orange outline-none"
                            onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                        <textarea 
                            rows="3"
                            placeholder="Any specific requests?"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rent-orange/20 focus:border-rent-orange outline-none resize-none"
                            onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                        ></textarea>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                        <Button 
                            type="button" 
                            variant="secondary" 
                            onClick={() => setShowBookingModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">
                            Submit Booking
                        </Button>
                    </div>
                </form>
            </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetail;
