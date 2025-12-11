import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PropertyCard from '../components/ui/PropertyCard';
import BackButton from '../components/ui/BackButton';

const Favorites = () => {
    const savedProperties = [
      {
        id: 1,
        title: 'Luxury Villa in Bali',
        address: 'Ubud, Bali',
        price: 'Rp 45.000.000',
        specs: { beds: 4, baths: 3, sqft: '450 Sqft' },
        image: '/images/prop1.png'
      },
      {
        id: 3,
        title: 'Modern Apartment in Jakarta',
        address: 'Sudirman, Jakarta',
        price: 'Rp 15.000.000',
        specs: { beds: 2, baths: 2, sqft: '120 Sqft' },
        image: '/images/prop2.png'
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Homes</h1>
            <p className="text-gray-500">Properties you've favorited to view later.</p>
        </div>

        {savedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <p className="text-gray-500">No favorite properties yet.</p>
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
