import { Button as MantineButton, Loader } from '@mantine/core';
import { useState } from 'react';

const Button = ({
  children = "Submit",
  onClick,
  loading = false,
  disabled = false,
  variant = "filled",
  color = "blue",
}) => {
  const [isLoading, setIsLoading] = useState(loading);

  const handleClick = async () => {
    if (disabled || isLoading || !onClick) return;

    try {
      setIsLoading(true);
      await onClick();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MantineButton
      onClick={handleClick}
      disabled={disabled || isLoading}
      variant={variant}
      classNames={{
        root: `px-4 py-2 text-white font-medium rounded-md focus:ring focus:ring-blue-200 ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : `bg-${color}-500 hover:bg-${color}-600`
        }`,
      }}
    >
      {isLoading ? <Loader size="xs" /> : children}
    </MantineButton>
  );
};

export default Button;
