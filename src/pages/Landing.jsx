import React from 'react';
import { Search } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PropertyCard from '../components/ui/PropertyCard';
import Button from '../components/ui/Button';

// Mock data
const stats = [
  { value: '750+', label: 'Successfully built over 750 unique homes tailored to each client\'s vision.' },
  { value: '200+', label: 'Expertise in building functional and inspiring spaces, from offices to retail.' },
  { value: '15+', label: 'A decade of dedicated expertise ensuring timeless quality.' },
  { value: '50+', label: 'Honored with numerous industry awards for our innovative .' },
];

const properties = [
  {
    id: 1,
    title: 'Georgetown Residence',
    address: '123 Main St, Georgetown, Penang',
    price: 'RM750,000',
    specs: { beds: 3, baths: 2, sqft: '1200 Sqft' },
    image: '/images/prop3.png'
  },
  {
    id: 2,
    title: 'Bayan Lepas Condo',
    address: '456 Ocean View, Bayan Lepas, Penang',
    price: 'RM520,000',
    specs: { beds: 2, baths: 2, sqft: '950 Sqft' },
    image: '/images/prop3.png'
  },
  {
    id: 3,
    title: 'Tanjung Bungah Villa',
    address: '789 Hillside Dr, Tanjung Bungah, Penang',
    price: 'RM1,200,000',
    specs: { beds: 4, baths: 3, sqft: '2500 Sqft' },
    image: '/images/prop3.png'
  },
  {
    id: 4,
    title: 'Butterworth Apartment',
    address: '101 City Rd, Butterworth, Penang',
    price: 'RM380,000',
    specs: { beds: 2, baths: 1, sqft: '700 Sqft' },
    image: '/images/prop3.png'
  },
  {
    id: 5,
    title: 'Balik Pulau Farmhouse',
    address: '202 Green Valley, Balik Pulau, Penang',
    price: 'RM900,000',
    specs: { beds: 5, baths: 4, sqft: '3000 Sqft' },
    image: '/images/prop3.png'
  },
  {
    id: 6,
    title: 'Seberang Perai Terrace',
    address: '303 Gardenia Ave, Seberang Perai, Penang',
    price: 'RM450,000',
    specs: { beds: 3, baths: 2, sqft: '1100 Sqft' },
    image: '/images/prop3.png'
  },
];

const Landing = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      

      <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gray-900">
        <img 
          src="/images/Hero.png" 
          alt="Luxury Home" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Build Your Dream Home Live <br /> the Lifestyle You Crave.
          </h1>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto font-light">
            Realize your dream home. We craft spaces that are functional, inspiring joy, tranquility, and connection.
          </p>
        </div>
      </div>

      {/* Overlapping Search Bar */}
      <div className="relative z-20 -mt-10 px-4">
          <div className="bg-white p-4 rounded-2xl shadow-xl max-w-4xl mx-auto flex items-center">
            <div className="flex-1 flex items-center px-4">
              <Search className="text-gray-400 mr-4" size={28} />
              <input 
                type="text" 
                placeholder="Search by locations (e.g., Georgetown)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 text-lg bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <Button className="!w-auto !py-4 !px-10 !text-lg !rounded-xl">
              Search
            </Button>
          </div>
      </div>

 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-rent-orange">
              Trusted by Hundreds, Recognized for Excellence.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="px-4">
                <h3 className="text-4xl font-serif text-rent-orange mb-4">{stat.value}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[200px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section  className="py-16 bg-gray-50/50" id="property">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-rent-orange">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Find the property that defines your lifestyle"}
            </h2>
            {searchQuery && (
               <p className="text-gray-500 mt-2">Found {filteredProperties.length} properties</p>
            )}
          </div>
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
               <p className="text-xl text-gray-500">No properties found matching your search.</p>
               <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-rent-orange font-semibold hover:underline"
               >
                  Clear search
               </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
