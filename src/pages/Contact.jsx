import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackButton from '../components/ui/BackButton';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'We will get back to you as soon as possible.',
                confirmButtonColor: '#FF5A3C'
            });
            e.target.reset();
        }, 1500);
    };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
           <BackButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
                <p className="text-xl text-gray-500 mb-8">
                    Have questions about our properties or services? We're here to help. Chat with us or send us a message.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rent-orange shadow-sm shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                            <p className="text-gray-500">support@rentverse.com</p>
                            <p className="text-gray-500">info@rentverse.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rent-orange shadow-sm shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                            <p className="text-gray-500">+62 21 555-0123</p>
                            <p className="text-gray-500">Mon-Fri from 9am to 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rent-orange shadow-sm shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Visit Us</h3>
                            <p className="text-gray-500">Rentverse HQ, South Jakarta</p>
                            <p className="text-gray-500">Indonesia, 12345</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 h-fit">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Name" placeholder="Your Name" required />
                        <Input label="Email" type="email" placeholder="email@example.com" required />
                    </div>
                    <Input label="Subject" placeholder="How can we help?" required />
                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                        <textarea 
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rent-orange/20 focus:border-rent-orange outline-none h-32 resize-none transition-all"
                            placeholder="Tell us more about your inquiry..."
                            required
                        ></textarea>
                    </div>

                    <Button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2">
                        {loading ? 'Sending...' : <><Send size={18} /> Send Message</>}
                    </Button>
                </form>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
