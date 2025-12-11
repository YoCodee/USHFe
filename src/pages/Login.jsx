import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import AuthLayout from '../components/AuthLayout';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
    }
    
    try {
      await login(formData.email, formData.password);
      
      Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back to Rentverse!',
          timer: 1500,
          showConfirmButton: false
      });

      navigate('/');
    } catch (err) {
      setError(err.message || 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Login Now</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          onChange={handleChange}
        />
        
        <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            onChange={handleChange}
        />

        <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            onChange={handleChange}
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

        <Button type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Don't have a Rentverse account yet?{' '}
        <Link to="/register" className="font-bold text-rent-orange hover:text-orange-600">
          Register Now
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
