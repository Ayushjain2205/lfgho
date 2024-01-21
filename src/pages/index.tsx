import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";

import Layout from "../components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="flex flex-col items-center justify-center h-[665px] bg-[#90C0AD]">
      <img
        className="w-[260px] mb-[60px]"
        src="/svgs/entropay.svg"
        alt="Entropay Logo"
      />
      <ConnectKitButton />
    </div>
  );
}
