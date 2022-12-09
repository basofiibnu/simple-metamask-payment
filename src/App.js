import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";
import "./App.css";
import LandingPage from "./components/LandingPage";
import PaymentForm from "./components/PaymentForm";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState(0);
  const [accountData, setAccountData] = useState("");
  const [purchaseCode, setPurchaseCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState("voyage");
  const [nftPrice, setNftPrice] = useState("120000000000");

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non ethereum browser detected, you should install metamask");
    }

    return provider;
  };

  const currentProvider = detectCurrentProvider();
  const web3 = new Web3(currentProvider);

  const onConnect = async () => {
    try {
      setLoading(true);
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];

        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  const checkIfWalletConnected = () => {
    if (
      window.ethereum
        .request({ method: "eth_accounts" })
        .then(async (accounts) => {
          if (accounts.length > 0) {
            setIsConnected(true);
            const account = accounts[0];
            let ethBalance = await web3.eth.getBalance(account);
            setEthBalance(ethBalance);
            setAccountData(account);
          } else {
            setIsConnected(false);
          }
        })
    ) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  };

  function makePaymentRequest() {
    const sellerAddress = "0x6c8FC918CB848478C2946bcca7315692cFc552c7";
    const itemPriceInWei = nftPrice;

    if (accountData) {
      setLoading(true);
      window.ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            { from: accountData, to: sellerAddress, value: itemPriceInWei },
          ],
        })
        .then((response) => {
          toast.success("Purchase Success");
          setPurchaseCode(response);
          setLoading(false);
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
          console.log(error);
        });
    }
  }

  useEffect(() => {
    checkIfWalletConnected();
  }, []);
  return (
    <div>
      {!isConnected && (
        <LandingPage isLoading={loading} onConnect={() => onConnect()} />
      )}

      {isConnected && (
        <PaymentForm
          onPayment={() => makePaymentRequest()}
          onLoading={loading}
          purchaseCode={purchaseCode}
          variant={variant}
          setVariant={setVariant}
          price={nftPrice}
          setPrice={setNftPrice}
          web3={web3}
        />
      )}

      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
