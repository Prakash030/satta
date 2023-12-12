"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WalletButtonsWithImage = () => {
  const handleWithdraw = () => {
    // Client-side logic for withdrawal
    alert("Contact 9876543210 for WithDrawl !!!");
  };

  // Use useEffect for client-side logic
  useEffect(() => {
    // Any client-side logic you want to perform when the component mounts

    // For example, you can add an event listener
    const handleClick = () => {
      console.log("Component clicked!");
    };

    document.addEventListener("click", handleClick);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div style={{ position: "relative" }}>
      <Image
        src="/poster.jpeg"
        width={2000}
        height={50}
        alt="Picture of poster"
        className=""
      />

      <div className="flex justify-between text-3xl bg-yellow-200 h-20">
        {/* Use dynamic import for client-side components */}
        <Link href="https://forms.gle/9umyNHsy4SMDdxrF6" className="bg-red-800 hover:bg-blue-700 text-white font-bold  px-4 rounded-full m-2 pt-4">
          <button>
            Add To Wallet
          </button>
        </Link>
        <button className="bg-red-800 hover:bg-blue-700 text-white font-bold  px-4 rounded-full m-2">
          Balance
        </button>
        {typeof window !== "undefined" && ( // Check if running on the client side
          <button
            className="bg-red-800 hover:bg-blue-700 text-white font-bold px-4 rounded-full m-2"
            onClick={handleWithdraw}
          >
            Withdraw
          </button>
        )}
      </div>
    </div>
  );
};

export default WalletButtonsWithImage;
