import React from 'react';


const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

const Welcome: React.FC = () => {
  const connectWallet = () => {
    // TODO make connecting wallet
    console.log('Connecting wallet')
  };
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex md:flex-row flex-col items-start justify-between
      md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col'>
          <h1 className='text-5xl text-left sm:text-5xl text-white text-gradient py-1'>
            Send crypto <br /> across the world
          </h1>
          <p className='text-left text-white font-light md:w-9/12 w-11/12 text-base '>
            Explore the world buy and sell cryptocurrencies around the world
          </p>
          <button
            type='button'
            onClick={connectWallet}
            className='flex flex-row justify-center items-center my-5 p-3
            bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600'
          >
            <p className='text-white text-base font-semibold'>Connect wallet</p>
          </button>

          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-tl-2xl ${commonStyles}`}>
              Reliability
            </div>
            <div className={`rounded-tr-2xl sm:rounded-none ${commonStyles}`}>
              Security
            </div>
            <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
              Web 3.0
            </div>
            <div className={`rounded-bl-2xl sm:rounded-none ${commonStyles}`}>
              Low-fees
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
