import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const currentUser = user?.data || user; 

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
        <div className="flex item-center gap-20 justify-start">
          <div className="flex-shrink-0 z-50">
            <Link to="/">
              <img 
                src="/images/Logo.png" 
                alt="AltairFlow" 
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>


          <div className="hidden md:flex space-x-8 gap-8 items-center">
              <Link 
                to="/"
                className={`font-medium  text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-rent-orange' : 'text-white hover:text-rent-orange'
                }`}
              >
                Home
              </Link>
              <a 
                href="/#property"
                className={`font-medium  text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-rent-orange' : 'text-white hover:text-rent-orange'
                }`}
              >
                Property
              </a>
              <Link 
                to="/about"
                className={`font-medium  text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-rent-orange' : 'text-white hover:text-rent-orange'
                }`}
              >
                About us
              </Link>
              <Link 
                to="/contact"
                className={`font-medium  text-sm transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-rent-orange' : 'text-white hover:text-rent-orange'
                }`}
              >
                Contact
              </Link>
          </div>
          </div>

     
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
               <div className="relative group">
                  <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-rent-orange focus:outline-none">
                    <div className="w-8 h-8 rounded-full bg-rent-orange/10 flex items-center justify-center text-rent-orange">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className={!scrolled ? "text-white" : ""}>{currentUser?.email || 'My Account'}</span>
                    <svg className={`w-4 h-4 ${!scrolled ? "text-white" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
               
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-1 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                    <div className="px-4 py-3 border-b border-gray-50">
                      <p className="text-xs text-gray-500 mb-1">Signed in as</p>
                      <p className="text-sm font-bold text-gray-900 truncate">{currentUser?.email}</p>
                      <span className={`inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        currentUser?.role === 'owner' 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {currentUser?.role || 'Tenant'}
                      </span>
                    </div>

                    <div className="py-1">
                      {currentUser?.role === 'owner' ? (
                        <>
                          <Link to="/Dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-rent-orange group/item">
                            <svg className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-rent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Owner Dashboard
                          </Link>
                          <Link to="/add-property" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-rent-orange group/item">
                            <svg className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-rent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Add New Property
                          </Link>
                          <Link to="/my-listings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-rent-orange group/item">
                            <svg className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-rent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            My Listings
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-rent-orange group/item">
                            <svg className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-rent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            My Profile
                          </Link>
                          <Link to="/favorites" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-rent-orange group/item">
                            <svg className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-rent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Saved Homes
                          </Link>
                          <Link to="/bookings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-rent-orange group/item">
                            <svg className="w-4 h-4 mr-3 text-gray-400 group-hover/item:text-rent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            My Bookings
                          </Link>
                        </>
                      )}
                    </div>

                    <div className="border-t border-gray-50 mt-1">
                      <button 
                        onClick={() => {
                          logout();
                          window.location.href = '/';
                        }}
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </div>
               </div>
            ) : (
              <>
                <Link to="/login">
                  <Button 
                    variant="secondary" 
                    className={`!py-2 !px-6 !text-sm border-rent-orange text-rent-orange hover:bg-orange-50 ${
                       !scrolled && 'bg-white/90'
                    }`}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    variant="primary" 
                    className="!py-2 !px-6 !text-sm shadow-orange-500/30"
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>


          <div className="md:hidden flex items-center z-50">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors ${scrolled || isMobileMenuOpen ? 'text-gray-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? (
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
              ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
              )}
            </button>
          </div>
        </div>
      </div>

    
      <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden flex pt-24 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
         <div className="flex flex-col w-full h-full px-6 overflow-y-auto">
             <div className="space-y-6 mb-8">
                 <Link 
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-gray-800 hover:text-rent-orange transition-colors"
                 >
                    Home
                 </Link>
                 <a 
                    href="/#property"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-gray-800 hover:text-rent-orange transition-colors"
                 >
                    Property
                 </a>
                 <Link 
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-gray-800 hover:text-rent-orange transition-colors"
                 >
                    About us
                 </Link>
                 <Link 
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-gray-800 hover:text-rent-orange transition-colors"
                 >
                    Contact
                 </Link>
             </div>
             
             <div className="pt-8 border-t border-gray-100">
                {isAuthenticated ? (
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500">
                            Signed in as <span className="font-bold text-gray-900">{currentUser?.email}</span>
                        </p>
                        
                        <div className="space-y-4">
                            {currentUser?.role === 'owner' ? (
                                <>
                                    <Link to="/Dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700">Owner Dashboard</Link>
                                    <Link to="/add-property" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700">Add New Property</Link>
                                    <Link to="/my-listings" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700">My Listings</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700">My Profile</Link>
                                    <Link to="/favorites" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700">Saved Homes</Link>
                                    <Link to="/bookings" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-700">My Bookings</Link>
                                </>
                            )}
                            <button 
                                onClick={() => {
                                    logout();
                                    setIsMobileMenuOpen(false);
                                    window.location.href = '/'; 
                                }}
                                className="block text-lg font-medium text-red-600"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="secondary" className="w-full text-center py-4">Login</Button>
                        </Link>
                        <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="w-full text-center py-4">Register</Button>
                        </Link>
                    </div>
                )}
             </div>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
