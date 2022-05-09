
# Web 3.0 Application

The main purpose of this application - build smart-contract, provide supporting transactions through MetaMask 
and save some data in blockchain.

⭐ Video of working application - [LINK](https://youtu.be/CjTYbHFdIFc)

### Run on your computer

1. Install dependencies in `client` and `smart_contract` folders with `npm install`

#### Smart contract

1. `cd ./smart_contract`
2. Deploy the contract with command `npm run deploy`
3. Copy address of deployed contract and paste to `contractAddress` field in `client/src/utils/constants`
4. Copy `artifacts/contracts/Transactions.sol/Transactions.json` file and paste to `client/src/utils`,
It's ABI (Contract application binary interface). This ABI contains all information about our contract


#### Frontend

1. Set all needed variables from `.env.example` to .env file
2. Run client with `npm run dev`, it will be available on `http://localhost:3000`
