import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import AuthLayout from '../components/AuthLayout';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState('tenant'); 
  
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {

     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await register(formData.fullname, formData.email, formData.password, role);
      
      Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Your account has been created successfully.',
          timer: 2000,
          showConfirmButton: false
      });

      navigate('/login');
    } catch (err) {
      const errorMessage = err.response?.data?.detail 
         ? (Array.isArray(err.response.data.detail) ? err.response.data.detail[0].msg : err.response.data.detail)
         : 'Registration failed. Please try again.';
      
      setError(errorMessage);
      
      Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: errorMessage,
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Register Now</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        <Input
          label="Fullname"
          name="fullname"
          type="text"
          placeholder="budi siregar"
          required
          onChange={handleInputChange}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="budi siregar@gmail.com"
          required
          onChange={handleInputChange}
        />
        
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-gray-700">Role</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole('tenant')}
              className={`relative flex items-center justify-between px-4 py-3 border rounded-lg transition-all ${
                role === 'tenant' 
                  ? 'border-gray-300 ring-1 ring-gray-300 bg-white' 
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <span className="font-semibold text-gray-700">Tenant</span>
              <div className={`w-4 h-4 rounded-full border ${
                role === 'tenant' ? 'border-rent-orange bg-rent-orange' : 'border-gray-300 bg-gray-200'
              }`}></div>
            </button>

            <button
              type="button"
              onClick={() => setRole('owner')}
              className={`relative flex items-center justify-between px-4 py-3 border rounded-lg transition-all ${
                role === 'owner' 
                  ? 'border-gray-300 ring-1 ring-gray-300 bg-white' 
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <span className="font-semibold text-gray-700">Property Owner</span>
              <div className={`w-4 h-4 rounded-full border ${
                role === 'owner' ? 'border-rent-orange bg-rent-orange' : 'border-gray-300 bg-gray-200'
              }`}></div>
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            *Choose this if you are looking to search for and book an apartment
          </p>
        </div>

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="******************************"
          required
          onChange={handleInputChange}
        />
        
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="******************************"
          required
          onChange={handleInputChange}
        />

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-rent-orange focus:ring-rent-orange"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-500">
              By registering, I agree to <a href="#" className="font-medium text-rent-orange hover:text-orange-600">Rentverse Terms & Conditions and Privacy Policy</a>
            </label>
          </div>
        </div>

        <Button type="submit" disabled={loading} className="mt-4">
          {loading ? 'Creating Account...' : 'Next'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Already have a Rentverse account?{' '}
        <Link to="/login" className="font-bold text-rent-orange hover:text-orange-600">
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
