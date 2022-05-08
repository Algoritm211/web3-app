import React, {useEffect, useState} from "react";
import {ethers} from "ethers";
import {contractABI, contractAddress} from "../utils/constants";
import {FormValues} from "../components/Welcome/Welcome";

interface Transaction {
  addressTo: string;
  addressFrom: string;
  keyword: string;
  message: string;
  timestamp: string;
  // Getting amount in ETH (because it hex of GWEI)
  amount: number;
}

interface TransactionContextValues {
  transactions: Transaction[]
  isLoading: boolean,
  connectWallet: () => void,
  currentAccount: string | undefined,
  sendTransaction: (data: FormValues) => void,
}

export const TransactionContext = React.createContext({} as TransactionContextValues);
const {ethereum} = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

  return transactionContract;
}

type Props = {
  children?: React.ReactNode
};

export const TransactionProvider: React.FC<Props> = ({children}) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount') || 0);
  const [transactions, setTransactions] = useState([]);

  const getAllTransactions = async () => {
    try {
      if (!ethereum) {
        return alert('Please install metamask to use application');
      }

      const transactionContract = getEthereumContract()
      const rawTransactions = await transactionContract.getAllTransactions();

      const structuredTransactions = rawTransactions.map((transaction: Record<string, any>) => {
        return {
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          keyword: transaction.keyword,
          message: transaction.message,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          // Getting amount in ETH (because it hex of GWEI)
          amount: parseInt(transaction.amount._hex) / (10 ** 18),
        }
      })

      console.log(structuredTransactions)

      setTransactions(structuredTransactions)
    } catch (error) {
      console.log(error)
      throw new Error('Some error was occurred while getting all transactions')
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return alert('Please install metamask to use application');
      }

      const accounts = await ethereum.request({method: 'eth_accounts'})

      if (accounts.length !== 0) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log('No connected accounts found')
      }

      console.log('eth_accounts', accounts);
    } catch (error) {
      console.log(error)
      throw new Error('Some error was occurred in connected to wallet check')
    }
  }

  const checkIfTransactionsExist = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTransactionsCount()
      localStorage.setItem('transactionCount', transactionCount);
    } catch (error) {
      console.log(error)
      throw new Error('Some error was occurred when checking transactions')
    }
  }

  const connectWallet = async () => {
   try {
     if (!ethereum) {
       return alert('Please install Metamask to use application');
     }
     const accounts = await ethereum.request({method: 'eth_requestAccounts'});
     console.log('eth_requestAccounts', accounts);
     setCurrentAccount(accounts[0]);
     getAllTransactions();
   } catch (error) {
     console.log(error)
     throw new Error('Some error was occurred in wallet connect process')
   }
  }

  const sendTransaction = async (transactionInfo: FormValues) => {
    try {
      if (!ethereum) {
        return alert('Please install Metamask to use application');
      }

      const transactionContract = getEthereumContract();
      const {addressTo, amount, message, keyword} = transactionInfo;
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208', // 21_000 GWEI
          value: parsedAmount._hex,
        }]
      })

      const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

      setIsLoading(true)
      console.log(`Waiting for ${transactionHash.hash}`);

      await transactionHash.wait();
      console.log(`Success for ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionsCount();
      setTransactionCount(transactionCount.toNumber());
      localStorage.setItem('transactionCount', transactionCount);
      getAllTransactions();
    } catch (error) {
      console.log(error)
      throw new Error('Some error was occurred when sending transactions')
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    void checkIfWalletIsConnected();
    void checkIfTransactionsExist();
  }, [])

  return (
    <TransactionContext.Provider value={{
      transactions,
      currentAccount,
      isLoading,
      connectWallet,
      sendTransaction,
    }}>
      {children}
    </TransactionContext.Provider>
  )
}
