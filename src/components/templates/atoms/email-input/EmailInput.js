import React, { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/16/solid';

const EmailInput = ({
  value = '',
  onValidEmail,
  placeholder = 'you@example.com',
  label = 'Email',
  required = true,
}) => {
  const [email, setEmail] = useState(value);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    if (!email) return required ? 'Email is required.' : '';
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid ? '' : 'Not a valid email address.';
  };

  const handleChange = (value) => {
    setEmail(value);
    const validationError = validateEmail(value);
    setError(validationError);

    if (!validationError && onValidEmail) {
      onValidEmail(value); // Notify parent of valid email
    }
  };

  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1 relative">
        <input
          id="email"
          name="email"
          type="email"
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? 'email-error' : undefined}
          value={email}
          onChange={(e) => handleChange(e.target.value)}
          className={`col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base 
            ${error ? 'text-red-900 outline outline-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:outline-red-600' : 'text-gray-900 outline-gray-300 focus:outline-blue-500'}
            sm:text-sm`}
        />
        {error && (
          <ExclamationCircleIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4 absolute right-3 top-2.5"
          />
        )}
      </div>
      {error && (
        <p id="email-error" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailInput;
