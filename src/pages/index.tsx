import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>hello</h1>
      <ConnectKitButton />
    </main>
  );
}
