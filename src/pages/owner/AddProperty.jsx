import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Home, MapPin, DollarSign, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/ui/BackButton';

const AddProperty = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/my-listings');
    }, 1500);
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      
      <main className="max-w-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
           <BackButton />
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Add New Property</h1>
            <p className="text-gray-500 mb-8">Fill in the details to list your property on Rentverse.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Property Title"
                placeholder="e.g. Modern Apartment in City Center"
                icon={Home}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Input
                    label="Price (per month)"
                    type="number"
                    placeholder="e.g. 500"
                    icon={DollarSign}
                    required
                 />
                 <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-700 ml-1">Property Type</label>
                    <div className="relative">
                        <select className="block w-full rounded-xl border-gray-200 bg-gray-50 border text-gray-900 focus:border-rent-orange focus:ring-rent-orange p-3 appearance-none">
                            <option>Apartment</option>
                            <option>House</option>
                            <option>Villa</option>
                            <option>Studio</option>
                        </select>
                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                           <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                 </div>
              </div>

              <Input
                label="Location / Address"
                placeholder="e.g. 123 Main St, Jakarta"
                icon={MapPin}
                required
              />

              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700 ml-1">Photo Upload</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-rent-orange hover:text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rent-orange">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                  <Button type="button" variant="secondary" className="!w-auto" onClick={() => navigate(-1)}>Cancel</Button>
                  <Button type="submit" disabled={loading} className="!w-auto bg-rent-orange hover:bg-orange-600">
                    {loading ? 'Publishing...' : 'Publish Listing'}
                  </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddProperty;
