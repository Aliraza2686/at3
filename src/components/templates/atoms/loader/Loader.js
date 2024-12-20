import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center z-50">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16 border-solid"></div>
    </div>
  );
};

export default Loader;
