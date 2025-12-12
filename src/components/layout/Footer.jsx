import React from 'react';
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          

          <div className="space-y-6">
            <img 
              src="/images/Logo.png" 
              alt="AltairFlow" 
              className="h-12 w-auto brightness-0 invert" 
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              The trusted platform for finding your perfect home, whether you're buying, renting, or selling.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Youtube, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

     
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-rent-orange transition-colors">Property</a></li>
              <li><a href="#" className="hover:text-rent-orange transition-colors">Rent</a></li>
              <li><a href="#" className="hover:text-rent-orange transition-colors">Talk to an expert</a></li>
              <li><a href="#" className="hover:text-rent-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-rent-orange transition-colors">About us</a></li>
            </ul>
          </div>

     
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-rent-orange transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-rent-orange transition-colors">Guides & Articles</a></li>
              <li><a href="#" className="hover:text-rent-orange transition-colors">Real Estate News</a></li>
              <li><a href="#" className="hover:text-rent-orange transition-colors">Market Trends</a></li>
              <li><a href="#" className="hover:text-rent-orange transition-colors">Mortgage Calculator</a></li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest properties and real estate tips.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rent-orange"
              />
              <button 
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
