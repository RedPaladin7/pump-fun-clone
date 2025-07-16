import { ethers } from "ethers"

function Header({ account, setAccount }) {
  async function connectHandler() {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
    // just returns strings of addresses
    const account = ethers.getAddress(accounts[0])
    // confirms the address is valid
    setAccount(account)
  }

  return (
    <header>
      <p className="brand">fun.pump</p>

      {account ? (
        <button onClick={connectHandler} className="btn--fancy">[{account.slice(0, 6) + '...' + account.slice(28, 42)}]</button>
      ) : (
        <button onClick={connectHandler} className="btn--fancy">[ connect ]</button>
      )}
    </header>
  );
}

export default Header;