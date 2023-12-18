import "./App.css";
import CurrencySelector from "./components/CurrencySelector";
import contractABI from "./contracts/currency.json";

// Replace with your contract address
const contractAddress = "0xf6fa6dd9Cb6d448B2046E6f59760304C34b069E0";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Name : Anishkumar Pankajkumar Patel</p>
        <p>Student ID : 101504708</p>
        <p>BCDV 4023 - Full Stack Blockchain Integration I</p>
        <p>Assignment 03</p>
        <p>Date : 9th December 2023</p>
        <h1>Crypto Price Feed </h1>
        <h1> dApp</h1>
        <CurrencySelector
          contractAddress={contractAddress}
          contractABI={contractABI}
        />
      </header>
    </div>
  );
}

export default App;
