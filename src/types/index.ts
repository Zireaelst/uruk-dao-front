import { ethers, BrowserProvider } from 'ethers';

export interface AppState {
  provider: BrowserProvider | null;
  signer: ethers.Signer | null;
  contract: ethers.Contract | null;
}

export interface NavigationProps {
  active: string;
  setActive: (active: string) => void;
}

export interface ComponentWithStateProps extends NavigationProps {
  state: AppState;
}