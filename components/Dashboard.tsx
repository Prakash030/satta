import React from "react";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex justify-between bg-gray-400 items-center">
      <div className="flex items-center">
        <Image
          src="/vector2.svg"
          width={35}
          height={35}
          alt="Picture of the author"
          className="m-2"
        />
        <p className="text-blue-700 text-xl font-bold">Dashboard</p>
      </div>
      <div className="text-black text-3xl font-bold pr-8">SATTA MATKA</div>
      {/* <button className=" text-blue-700 text-lg mr-8 font-bold font-serif" onClick={}>
        Sign In/Register
      </button> */}
      <Link href="/signIn">
        <button className=" text-blue-700 text-lg mr-8 font-bold font-serif">
          Sign In/Register
        </button>
        </Link>
    </div>
  );
};

export default Dashboard;
