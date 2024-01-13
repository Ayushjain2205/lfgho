import "@/styles/globals.css";
// Import statements remain the same in JavaScript

import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

// In JavaScript, we don't specify types, so the AppProps import is removed

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

// Function parameters and JSX stay the same in JavaScript
export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
