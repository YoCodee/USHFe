import React, { useState } from 'react';
import { Bed, Bath, Hash, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

const PropertyCard = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToast } = useToast();

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newState = !isLiked;
    setIsLiked(newState);
    
    if (newState) {
        addToast("Added to your favorites!", "success");
    } else {
        addToast("Removed from favorites", "info");
    }
  };

  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 relative">
        <div className="relative aspect-[4/3] overflow-hidden">
          <span className="absolute top-4 left-4 bg-rent-orange text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
            For Rent
          </span>
          <button 
            onClick={handleLike}
            className={`absolute top-4 right-4 p-2 rounded-full z-20 transition-colors backdrop-blur-sm ${
                isLiked ? 'bg-white text-red-500' : 'bg-white/80 text-gray-400 hover:text-red-500 hover:bg-white'
            }`}
          >
             <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          </button>
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{property.title}</h3>
          <p className="text-gray-500 text-sm mb-3 line-clamp-1">{property.address}</p>
          <p className="text-rent-orange font-bold text-lg mb-4">{property.price}<span className="text-sm text-gray-400 font-normal">/mo</span></p>
          
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-gray-100">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center text-gray-700 font-bold mb-1">
                <Bed size={16} className="mr-1.5" />
                <span>{property.specs.beds}</span>
              </div>
              <span className="text-xs text-gray-400">Bedrooms</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center border-l border-gray-100">
              <div className="flex items-center text-gray-700 font-bold mb-1">
                <Bath size={16} className="mr-1.5" />
                <span>{property.specs.baths}</span>
              </div>
              <span className="text-xs text-gray-400">Bathrooms</span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center border-l border-gray-100">
              <div className="flex items-center text-gray-700 font-bold mb-1">
                <Hash size={16} className="mr-1.5" />
                <span>{property.specs.sqft}</span>
              </div>
              <span className="text-xs text-gray-400">Total Area</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
