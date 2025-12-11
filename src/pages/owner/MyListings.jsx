import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/ui/BackButton';

const MyListings = () => {
 
  const myListings = [
    {
      id: 1,
      title: 'Luxury Apartment in CBD',
      location: 'Jakarta Selatan',
      price: 'Rp 15.000.000',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      views: 245
    },
    {
      id: 2,
      title: 'Cozy Studio Near University',
      location: 'Depok, Jawa Barat',
      price: 'Rp 3.500.000',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      views: 56
    }
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
           <BackButton />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
           <div>
              <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
              <p className="text-gray-500">Manage your property listings and view performance.</p>
           </div>
           <Link to="/add-property">
               <Button className="!w-auto flex items-center gap-2">
                   <Plus size={18} /> Add New Property
               </Button>
           </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
             {myListings.length > 0 ? (
                 <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                       <thead className="bg-gray-50">
                          <tr>
                             <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Property</th>
                             <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                             <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                             <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Stats</th>
                             <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                       </thead>
                       <tbody className="bg-white divide-y divide-gray-200">
                          {myListings.map((listing) => (
                             <tr key={listing.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                   <div className="flex items-center">
                                      <div className="h-16 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                         <img className="h-full w-full object-cover" src={listing.image} alt="" />
                                      </div>
                                      <div className="ml-4">
                                         <div className="text-sm font-bold text-gray-900">{listing.title}</div>
                                         <div className="text-sm text-gray-500">{listing.location}</div>
                                      </div>
                                   </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                   <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      listing.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                   }`}>
                                      {listing.status}
                                   </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                   {listing.price}<span className="text-gray-400 font-normal">/mo</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                   {listing.views} Views
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                   <div className="flex justify-end gap-2">
                                      <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                                         <Edit size={18} />
                                      </button>
                                      <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                                         <Trash2 size={18} />
                                      </button>
                                   </div>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
             ) : (
                <div className="text-center py-12">
                   <p className="text-gray-500">No listings found.</p>
                </div>
             )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyListings;
