import React from 'react';
import { cutWalletAddress } from '../../utils/cutWalletAddress';
import {useFetchGif} from "../../hooks/useFetchGif";

interface Props {
  message: string;
  timestamp: string;
  addressFrom: string;
  amount: number;
  addressTo: string;
  keyword: string;
}

export const TransactionCard: React.FC<Props> = ({
  message,
  timestamp,
  amount,
  addressFrom,
  addressTo,
  keyword,
}) => {
  const gifUrl = useFetchGif(keyword);

  return (
    <div className="flex bg-gray-700 m-4 flex-1 flex
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      flex-col p-3 rounded-md shadow-2xl
    ">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-base">
              From: {cutWalletAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-base">
              To: {cutWalletAddress(addressTo)}
            </p>
          </a>
          <p className="text-white text-base">
            Amount {amount}
          </p>
          {message && (
            <React.Fragment>
              <br />
              <p className="text-white text-base">
                Message: {message}
              </p>
            </React.Fragment>
          )}
        </div>
        <time className="block bg-black p-3 px-5 w-max rounded-3xl mt-5 shadow-2xl">
          <p className="text-white font-bold">{timestamp}</p>
        </time>
      </div>
    </div>
  );
};
