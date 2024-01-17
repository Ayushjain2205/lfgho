import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";
import Layout from "../components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main>
        <h1>hello</h1>
        {/* <ConnectKitButton /> */}
      </main>
    </Layout>
  );
}
