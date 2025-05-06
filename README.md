# Uruk DAO Frontend

This is the frontend application for the Uruk DAO project, built with [Next.js](https://nextjs.org) and web3 integration.

## About Uruk DAO

Uruk DAO is a decentralized autonomous organization platform that enables community governance and collaboration. The platform connects to blockchain smart contracts to provide voting, proposal creation, and community management features.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/src/app` - Next.js pages and app router structure
- `/src/components` - React components used throughout the application
- `/src/contracts` - Smart contract ABIs and addresses
- `/src/constants` - Configuration constants for contract interaction
- `/src/assets` - Images and other static assets
- `/public` - Public assets accessible directly

## Web3 Integration

This project uses:
- [RainbowKit](https://www.rainbowkit.com/) for wallet connection
- [wagmi](https://wagmi.sh/) for Ethereum hooks
- [ethers.js](https://docs.ethers.org/) for blockchain interaction

## Smart Contracts

The smart contracts for this project are located in the `/Users/toyguntez/Visual Studio /uruk-dao/web3/contracts` directory. The frontend interacts with the deployed Uruk.sol contract.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)
