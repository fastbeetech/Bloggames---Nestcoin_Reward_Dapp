import Input from "./components/Input";
import Nav from "./components/Nav";
import { useEffect, useState } from 'react';
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState(); // state variable to set account.
  
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);
  return (
    <div>
      <Nav />
      <div>Your account is: {account}</div>
      <Input />
    </div>
  );
}

export default App;
