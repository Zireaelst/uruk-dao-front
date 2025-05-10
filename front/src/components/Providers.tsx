"use client";

import React, { ReactNode } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  Theme,
  lightTheme,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProvidersProps {
  children: ReactNode;
}

// Create a custom theme by extending the light theme
const theme: Theme = {
  ...lightTheme(),
  blurs: {
    modalOverlay: 'blur(5px)',
  },
  colors: {
    accentColor: '#050c10',
    accentColorForeground: 'white',
    actionButtonBorder: 'transparent',
    actionButtonBorderMobile: 'transparent',
    actionButtonSecondaryBackground: 'white',
    closeButton: '#050c10',
    closeButtonBackground: 'white',
    connectButtonBackground: '#050c10',
    connectButtonBackgroundError: 'red',
    connectButtonInnerBackground: '#050c10',
    connectButtonText: 'white',
    connectButtonTextError: 'white',
    connectionIndicator: 'green',
    downloadBottomCardBackground: '#050c10',
    downloadTopCardBackground: '#050c10',
    error: '#050c10',
    generalBorder: '#050c10',
    generalBorderDim: '#050c10',
    menuItemBackground: '#050c10',
    modalBackground: '#050c10',
    modalBackdrop: 'rgba(0, 0, 0, 0.5)',
    modalBorder: '#050c10',
    modalText: 'white',
    modalTextDim: 'white',
    modalTextSecondary: 'white',
    profileAction: '#050c10',
    profileActionHover: '#050c10',
    profileForeground: '#050c10',
    selectedOptionBorder: '#050c10',
    standby: 'gray',
  },
  fonts: {
    body: 'system-ui, sans-serif',
  },
  radii: {
    actionButton: '15px',
    connectButton: '15px',
    menuButton: '15px',
    modal: '15px',
    modalMobile: '15px',
  },
  shadows: {
    connectButton: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    dialog: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    profileDetailsAction: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    selectedOption: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    selectedWallet: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    walletLogo: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  },
};

// Create config using the unified RainbowKit API
const config = getDefaultConfig({
  appName: 'Uruk DAO',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_WALLETCONNECT_PROJECT_ID', // Use a valid WalletConnect project ID - You need to get this from https://cloud.walletconnect.com/
  chains: [sepolia],
  ssr: true,
});

// Create a client
const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  // Use React.useMemo to avoid unnecessary re-renders
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={theme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}