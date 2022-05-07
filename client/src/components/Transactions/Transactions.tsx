import React, {useContext} from 'react';
import dummyData from "../../utils/dummyData";
import {TransactionContext} from "../../context/TransactionContext";
import {TransactionCard} from "./TransactionCard";

const Transactions: React.FC = () => {
  const {currentAccount} = useContext(TransactionContext);
  const transactionsBlock = dummyData.reverse().map((transaction) => {
    return (
      <TransactionCard key={transaction.id} {...transaction} />
    )
  })
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20
    gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Your latest transactions
          </h3>
        ): (
          <h3 className="text-white text-3xl text-center my-2">
            Please connect your account to see latest changes
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center">
          {transactionsBlock}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
