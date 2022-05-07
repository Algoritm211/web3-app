import React, {useContext} from 'react';
import { BsInfoCircle, SiEthereum} from "react-icons/all";
import {Input} from "../Input/Input";
import Loader from "../Loader/Loader";
import {TransactionContext} from "../../context/TransactionContext";
import {Field, Form } from 'react-final-form';
import {composeValidators, minValueValidator, requiredValidator} from '../Input/validators';
import { cutWalletAddress } from '../../utils/cutWalletAddress';


const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';
export interface FormValues {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

const Welcome: React.FC = () => {
  const {
    currentAccount,
    isLoading,
    connectWallet,
    sendTransaction,
  } = useContext(TransactionContext);

  const onConnectWallet = () => {
    connectWallet();
    console.log('Connecting wallet')
  };

  const onSubmit = (values: FormValues) => {
    sendTransaction(values)
  }

  return (
    <div className='flex w-full flex-col mf:flex-row justify-center items-center py-10'>
      <div className='flex mf:flex-row flex-col items-start justify-between
      md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col mf:mr-10'>
          <h1 className='text-5xl text-left sm:text-5xl text-white text-gradient py-1'>
            Send crypto <br /> across the world
          </h1>
          <p className='text-left text-white font-light md:w-9/12 w-11/12 text-base '>
            Explore the world buy and sell cryptocurrencies around the world
          </p>
          {!currentAccount ? (<button
            type="button"
            onClick={onConnectWallet}
            className="flex flex-row justify-center items-center my-5 p-3
            bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"
          >
            <p className="text-white text-base font-semibold">Connect wallet</p>
          </button>) : (
            <div className="text-white">
              Your account is connected
            </div>
          )}

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

      {/* Card with form address */}
      <div className='flex flex-1 flex-col items-center justify-start w-full
        mf:mt-0 mt-10'>
        <div className='p-3 justify-end items-start flex-col rounded-xl h-40
          w-72 my-5 eth-card white-glassmorphism'>

          {/* Card */}

          <div className='flex justify-between flex-col w-full h-full'>
            <div className='flex justify-between items-start'>
              <div className='flex justify-center items-center w-10
                h-10 rounded-full border-2 border-white'>
                <SiEthereum fontSize={21} color='white'/>
              </div>
              <BsInfoCircle fontSize={17} color='white' />
            </div>
            <div>
              <p className='text-white font-light text-sm'>
                {cutWalletAddress(currentAccount) || 'Connect your wallet'}
              </p>
              <p className='text-white mt-1 font-bold text-lg'>
                Ethereum
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <Form<FormValues>
          onSubmit={onSubmit}
          render={({handleSubmit}) => {
            return (
              <form
                onSubmit={handleSubmit}
                className='p-5 sm:w-96 w-full flex flex-col
            justify-start items-center blue-glassmorphism'>
                <Field
                  name="addressTo"
                  type="text"
                  placeholder="Address to"
                  validate={requiredValidator}
                  component={Input}
                />
                <Field
                  name="amount"
                  type="number"
                  placeholder="Amount (ETH)"
                  validate={composeValidators(requiredValidator, minValueValidator(0))}
                  component={Input}
                />
                <Field
                  name="keyword"
                  type="text"
                  placeholder="Keyword (Gif)"
                  validate={requiredValidator}
                  component={Input}
                />
                <Field
                  name="message"
                  type="text"
                  placeholder="Enter message"
                  validate={requiredValidator}
                  component={Input}
                />

                <div className='h-1 w-full bg-gray-400 my-2' />

                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    type='submit'
                    className='text-white w-full mt-2 border p-2
              border-gray-400 rounded-full cursor-pointer hover:bg-gray-400 hover:text-black'
                  >
                    Send now
                  </button>
                )}
              </form>
            )
          }}
        />
      </div>
    </div>
  );
};

export default Welcome;
