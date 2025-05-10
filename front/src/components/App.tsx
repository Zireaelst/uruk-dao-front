import React, { useState, useEffect } from 'react';
import { ethers, Contract, BrowserProvider, JsonRpcSigner } from "ethers";
import Navigation from "./Navigation";
import { contractAddr } from "../constants/contract";
import contract from "../contracts/Uruk.json";
import Providers from './Providers';
import Background from './Background'; 
import Footer from './Footer'; // Footer bileşeni import ediliyor

interface AppState {
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
  contract: Contract | null;
}

interface AppProps {
  children: React.ReactNode;
}

// Define ethereum window interface
interface EthereumWindow extends Window {
  ethereum?: {
    on: (event: string, callback: () => void) => void;
    request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  };
}

export default function App({ children }: AppProps) {
  const [active, setActive] = useState('');

  const { abi: ABI } = contract;
  const [state, setState] = useState<AppState>({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractABI = ABI;
      try {
        const { ethereum } = window as EthereumWindow;
        if (ethereum) {
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
          
          const provider = new ethers.BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const contractInstance = new ethers.Contract(contractAddr, contractABI, signer);
          
          setState({ 
            provider, 
            signer, 
            contract: contractInstance 
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    
    connectWallet();
  }, [ABI]);

  // Define a type for child components with our custom props
  interface ChildProps {
    state?: AppState;
    active?: string;
    setActive?: React.Dispatch<React.SetStateAction<string>>;
  }

  return (
    <Providers>
      <Background /> {/* Arkaplan bileşenini burada ekliyoruz */}
      <div className="min-h-screen bg-transparent flex flex-col">
        <Navigation active={active} setActive={setActive} />
        <main className="container mx-auto px-4 pt-20 pb-8 flex-grow"> {/* flex-grow ekleyerek ana içeriğin esnemesini sağlıyoruz */}
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<ChildProps>, { 
                state, 
                active, 
                setActive 
              });
            }
            return child;
          })}
        </main>
        <Footer /> {/* Footer bileşenini buraya ekliyoruz */}
      </div>
    </Providers>
  );
}