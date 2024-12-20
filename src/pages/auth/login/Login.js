import React, { useState } from 'react'
import { LockClosedIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { useToast } from '../../../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login_thunk } from '../../../store/auth';

export const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
const navigate = useNavigate()

const dispatch = useDispatch()


  const { showToast } = useToast();

  const validateForm = () => {
    const newError = {};
    if (!email) {
      newError.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = 'Invalid email address.';
    }

    if (!password) {
      newError.password = 'Password is required.';
    } else if (password.length < 6) {
      newError.password = 'Password must be at least 6 characters.';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

        // Validate form or make API call
        // if (email && password) {
        //     // Show success toast
        //     showToast({
        //       title: 'Successfully logged in!',
        //       body: 'You have successfully logged into your account.',
        //     }, 'success');
        //   } else {
        //     // Show error toast
        //     showToast({
        //       title: 'Error',
        //       body: 'Please enter both email and password.',
        //     }, 'error');
        //   }

          setIsSubmitting(true);

          dispatch(login_thunk({email, password})).then((response) => {
    if(response.payload) {
      navigate('/dashboard')
                showToast({
              title: 'Successfully logged in!',
              body: 'You have successfully logged into your account.',
            }, 'success');
    }
          }).finally(() => {
          setIsSubmitting(false);

          })
 
    // Simulate form submission
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   alert('Login Successful!');
    // }, 2000);
  };
  return (
    <div>
     <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`relative block w-full appearance-none rounded-t-md border ${
                  error.email ? 'border-red-500' : 'border-gray-300'
                } px-3 py-2 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
              {error.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <ExclamationCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                  {error.email}
                </p>
              )}
            </div>
            {/* Password Input */}
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`relative block w-full appearance-none rounded-b-md border ${
                  error.password ? 'border-red-500' : 'border-gray-300'
                } px-3 py-2 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {error.password && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <ExclamationCircleIcon className="h-5 w-5 mr-1 text-red-500" />
                  {error.password}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting ? 'cursor-not-allowed' : ''
              }`}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-blue-400 group-hover:text-blue-300"
                  aria-hidden="true"
                />
              </span>
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
