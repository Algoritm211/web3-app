import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className='flex justify-center items-center py-3'>
      <div className='animate-spin border-b-2 rounded-full h-32 w-32 border-red-700'/>
    </div>
  );
};

export default Loader;
