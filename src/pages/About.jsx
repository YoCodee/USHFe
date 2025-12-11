import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackButton from '../components/ui/BackButton';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
           <BackButton />
        </div>

        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                We are Rentverse, dedicated to simplifying your property search journey.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <img 
                    src="/images/prop3.png" 
                    alt="Our Team" 
                    className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    At Rentverse, we believe everyone deserves a place they can call home. Our platform bridges the gap between property owners and tenants, offering a seamless, secure, and transparent experience.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Founded in 2024, we started with a simple idea: make renting property as easy as booking a hotel. Today, we connect thousands of users with their dream homes across Indonesia.
                </p>
            </div>
        </div>

        <div className="bg-orange-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-rent-orange mx-auto mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Verified Listings</h3>
                    <p className="text-gray-500">Every property is vetted to ensure quality and authenticity.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-rent-orange mx-auto mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Secure Transactions</h3>
                    <p className="text-gray-500">Your payments and data are protected with bank-grade security.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-rent-orange mx-auto mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                    <p className="text-gray-500">Our dedicated team is here to help you anytime, anywhere.</p>
                </div>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default About;
