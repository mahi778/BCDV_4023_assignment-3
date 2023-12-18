# Assignment 03 - BCDV 4023 - Full Stack Blockchain Integration I - Week - 03

## Details

Name: `Anishkumar Pankajkumar Patel`

Student ID: `101504708`

Date: `9th December 2023`

## Summary of the project

- Use hardhat to deploy a price feed contract on Sepolia Testnet through Metamask and Alchemy.
- Use the deployed contract and the ABI to create a simple web application that displays the price of `BTC/ETH`, `BTC/USD`, `ETH/USD` and `LINK/USD`.

## How to run the application

- Clone the repository
- Change to `my-dapp-frontend` folder

### Backend

- Run `npm install` to install all the dependencies
- Update the contract in `contracts` folder if needed and the `hardhat.config.js` file with the correct network and account details
- create a `.env` file in the `my-dapp-backend` folder and add the following details
  - `SEPOLIA_URL` - Sepolia HTTPS API key from Alchemy
  - `PRIVATE_KEY` - Private key of the account used to deploy the contract
- Run `npx hardhat compile` to compile the contract
- Run `npx hardhat run scripts/deploy.js --network sepolia` to deploy the contract on Sepolia Testnet
- Save and Copy the contract address from the console log

### Frontend

- Change to `my-dapp-frontend` folder
- Run `npm install` to install all the dependencies
- Update the `contractAddress` in `src/App.js` file with the contract address copied from the console log
- Update the ABI in `src/contracts/currency.json` file
- Run `npm run dev` to start the application
- Open `http://localhost:5173` in the browser to view the application
  Note 1 : You will find the ABI in `my-dapp-backend/artifacts/contracts/priceFeed.sol/PriceFeed.json` file
  Note 2 : You only need to copy the `abi` from the `PriceFeed.json` file and paste it in `currency.json` file, and not everything.
