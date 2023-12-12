import React from "react";
import Dashboard from "@/components/Dashboard";
import WalletButtonsWithImage from "@/components/WalletButtonsWithImage";
import GameBar from "@/components/GameBar";
import Image from "next/image";

import dbConnect from '../db';


dbConnect(); 

export default function HomePage() {

  return (
    <div className="bg-red-800">
      <Dashboard />
      <WalletButtonsWithImage />
      <div className="bg-red-800">
        <div className="bg-purple-600 rounded-full flex items-center justify-center h-16 text-yellow-300 text-3xl font-extrabold mt-2">
          Live Results !!!
        </div>

        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
        <GameBar
          gameName="SRIDEVI"
          gameNumber="468-31-234"
          gameTiming="12:00 PM - 1:00 PM"
        />
      </div>

      <div className=" flex items-center justify-center flex-col mt-4">
        <div className="w-1/2 bg-white text-3xl font-extrabold text-black rounded-full flex items-center justify-center py-2">
          FREQUENTLY ANSWERED QUESTIONS ??
        </div>
        <div className="bg-blue-900 my-4 h-auto w-full">
          <p className="m-0 flex items-center justify-center">
            {" "}
            Q1: How can I win Matka ?
          </p>
          <p className="m-0">
            Ans: Satta matka is the game of numbers where we choose a number to
            bid on and earn better. There are some set rules which we need to
            follow like start betting with fewer amounts, this will keep you at
            low risk. Second is, control your temptation when you are losing
            continuously.
          </p>
        </div>
        <div className="bg-blue-900 my-4 h-auto w-full">
          <p className="m-0 flex items-center justify-center">
            {" "}
            Q2: How can I get Satta number ?
          </p>
          <p className="m-0">Ans: Satta numbers are chosen like</p>
          <ul className="m-0 pl-[29px]">
            <li className="mb-0">
              3 random numbers are chosen from 0 to 9 which are called OPEN. Let
              say we got 2, 5 and 9
            </li>
            <li className="mb-0">
              These numbers are added then like 2 + 5 + 9 = 16
            </li>
            <li className="mb-0">
              If addition goes above 10 then last digit is considered. Here 6
            </li>
            <li className="mb-0">
              In same way another number is calculated which is called CLOSE.
              Let say we got 8, 0 and 3. So 8 + 0 + 3 = 11. Then close digit is
              1
            </li>
            <li>Final number will be 61</li>
          </ul>
        </div>
        <div className="bg-blue-900 my-4 h-auto w-full">
          <p className="m-0 flex items-center justify-center">
            {" "}
            Q3: How Satta Matka Works ?
          </p>
          <p className="m-0">{`Ans: There are so many Satta companies running Satta Matka games & drawing results / day. A random number drawn by Satta Company persons and if you are lucky & this is the same number on which you bet then you will be paid multiple times of your actual money.`}</p>
        </div>
        <div className="bg-blue-900 my-4 h-auto w-full">
          <p className="m-0 flex items-center justify-center">
            {" "}
            Q4: What is Satta Matka ?
          </p>
          <p className="m-0">
            Ans: If you ever heard this word SATTA, you must be aware about the
            complete phrase satta matka. Actually Satta Matka is a form of
            gambling originated in India before independence. Modern days Satta
            Mtka is based on numbers which has been gueesed by player to win.
            The winning player is known as Satta King.
          </p>
        </div>
      </div>

      <div className="bg-red-950 my-4 h-auto w-full">
        <p className="m-0 flex items-center justify-center">
          <b> DISCLAIMER:-</b>
        </p>
        <p className="m-0 font-itim">
          Viewing This WebSite Is On Your Own Risk.. All The information Shown
          On Website Is Based on Numerology and Astrology for Information
          Purposes .. We Are Not Associated with Any Illegal Matka Business or
          Gamblers.. We Warn You That Matka Gambling in Your Country May be
          Banned or Illegal... We Are Not Responsible For Any Issues or Scam...
          We Respect All Country Rules/Laws... If You Not Agree With Our Site
          Disclaimer... Please Quit Our Site Right Now.
          Copying/Promoting/Publishing Any of Our Content in Any Type Of Media
          or Other Source is Illegal and against Law.
        </p>
        <Image
          src="/bottomBar.jpeg"
          width={2000}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div></div>
    </div>
  );
}
