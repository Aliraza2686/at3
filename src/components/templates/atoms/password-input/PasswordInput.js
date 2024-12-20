import { PasswordInput as MantinePasswordInput } from '@mantine/core';
import { useState } from 'react';

const PasswordInput = ({
  value,
  onChange,
  required = true,
  label = "Password",
  placeholder = "Enter your password",
  minLength = 8,
}) => {
  const [error, setError] = useState(null);

  const validatePassword = (password) => {
    if (!password) return required ? "Password is required" : null;
    if (password.length < minLength) return `Password must be at least ${minLength} characters`;
    return null;
  };

  const handleBlur = () => {
    setError(validatePassword(value));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-sm">{label}</label>
      <MantinePasswordInput
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange(event.currentTarget.value);
          setError(null);
        }}
        onBlur={handleBlur}
        error={error}
        required={required}
        classNames={{
          input: "border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200",
        }}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
