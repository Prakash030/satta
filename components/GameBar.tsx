import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { MdAccessTimeFilled } from "react-icons/md";


interface Props {
  gameName: string;
  gameNumber: string;
  gameTiming: string;
}

const isPlayButtonEnabled = (gameTiming: string): boolean => {
  const matchResult = gameTiming.match(
    /(\d+):(\d+)\s(AM|PM)\sto\s(\d+):(\d+)\s(AM|PM)/i
  );

  if (!matchResult) {
    return false;
  }

  const [, startHour, startMinute, startPeriod, endHour, endMinute, endPeriod] =
    matchResult;
  const isAM = (period: string) => period.toLowerCase() === "am";

  const currentDateTime = new Date();

  const convertTo24HourFormat = (hour: string, period: string) => {
    let resultHour = parseInt(hour, 10);
    if (!isAM(period) && resultHour !== 12) {
      resultHour += 12;
    }
    return resultHour;
  };

  const startTime = new Date();
  startTime.setHours(
    convertTo24HourFormat(startHour, startPeriod),
    parseInt(startMinute, 10),
    0,
    0
  );

  const endTime = new Date();
  endTime.setHours(
    convertTo24HourFormat(endHour, endPeriod),
    parseInt(endMinute, 10),
    0,
    0
  );

  return currentDateTime >= startTime && currentDateTime <= endTime;
};

const GameBar = ({ gameName, gameNumber, gameTiming }: Props) => {

  const gamesTimingValue = {
    "MILAN_MORNING": {
      fullName: "Milan Morning",
      openBidStart: "10:10 am",
      openBidEnd: "11:10 am",
      closeBidStart: "10:15 am",
      closeBidEnd: "11:15 am",
    },
    "SIVAJI": {
      fullName: "Sivaji",
      openBidStart: "11:25 am",
      openBidEnd: "12:25 pm",
      closeBidStart: "11:30 am",
      closeBidEnd: "12:30 pm",
    },
    "KALYAN_MORNING": {
      fullName: "Kalyan Morning",
      openBidStart: "10:55 am",
      openBidEnd: "11:55 am",
      closeBidStart: "11:00 am",
      closeBidEnd: "12:00 pm",
    },
    "SRIDEVI": {
      fullName: "Sridevi",
      openBidStart: "11:30 am",
      openBidEnd: "12:30 pm",
      closeBidStart: "11:35 am",
      closeBidEnd: "12:35 pm",
    },
    "SIVA": {
      fullName: "Siva",
      openBidStart: "12:25 pm",
      openBidEnd: "1:25 pm",
      closeBidStart: "12:30 pm",
      closeBidEnd: "1:30 pm",
    },
    "MADHUR_DAY": {
      fullName: "Madhur Day",
      openBidStart: "1:25 pm",
      openBidEnd: "2:25 pm",
      closeBidStart: "1:30 pm",
      closeBidEnd: "2:30 pm",
    },
    "MILAN_DAY": {
      fullName: "Milan Day",
      openBidStart: "2:15 pm",
      openBidEnd: "4:15 pm",
      closeBidStart: "2:15 pm",
      closeBidEnd: "4:15 pm",
    },
    "KALYAN": {
      fullName: "Kalyan",
      openBidStart: "3:40 pm",
      openBidEnd: "5:40 pm",
      closeBidStart: "3:45 pm",
      closeBidEnd: "5:45 pm",
    },
    "MAHARANI_DAY": {
      fullName: "Maharani Day",
      openBidStart: "5:10 pm",
      openBidEnd: "7:10 pm",
      closeBidStart: "5:15 pm",
      closeBidEnd: "7:15 pm",
    },
    "SIVAJI_NIGHT": {
      fullName: "Sivaji Night",
      openBidStart: "6:55 pm",
      openBidEnd: "7:55 pm",
      closeBidStart: "7:00 pm",
      closeBidEnd: "8:00 pm",
    },
    "SRIDEVI_NIGHT": {
      fullName: "Sridevi Night",
      openBidStart: "6:55 pm",
      openBidEnd: "7:55 pm",
      closeBidStart: "7:00 pm",
      closeBidEnd: "8:00 pm",
    },
    "MADHUR_NIGHT": {
      fullName: "Madhur Night",
      openBidStart: "8:25 pm",
      openBidEnd: "10:25 pm",
      closeBidStart: "8:30 pm",
      closeBidEnd: "10:30 pm",
    },
    "MILAN_NIGHT": {
      fullName: "Milan Night",
      openBidStart: "8:55 pm",
      openBidEnd: "10:55 pm",
      closeBidStart: "9:00 pm",
      closeBidEnd: "11:00 pm",
    },
    "MAIN_BAJAR": {
      fullName: "Main Bajar",
      openBidStart: "9:30 pm",
      openBidEnd: "12:00 am",
      closeBidStart: "9:35 pm",
      closeBidEnd: "12:05 am",
    },
    "MAHARANI_NIGHT": {
      fullName: "Maharani Night",
      openBidStart: "10:10 pm",
      openBidEnd: "12:10 am",
      closeBidStart: "10:15 pm",
      closeBidEnd: "12:15 am",
    },
  };


  const customGames = ["SIVAJI", "SIVA", "SIVAJI_NIGHT"];
  const isButtonEnabled = isPlayButtonEnabled(gameTiming);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getUser`, {
          method: "GET",
        });

        if (!response.ok) {
          console.error("Error fetching user data:");
          return;
        }

        const user = await response.json();

        if (user.result.role == "admin") {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Error handling result fetch:", error);
      }
    };

    fetchData();
  }, []);

  const isDisabled = gameNumber.slice(0, 5) !== "xxx-x" ? true : false;

  const isCustomGame = customGames.includes(gameName.toUpperCase());
  const bgColorClass = isCustomGame ? "bg-yellow-400" : "bg-white";

  return (
    <div>
      <div className={`flex justify-between my-2 ${bgColorClass}`}>
        <div className="flex">
          <Link
            href={`https://rrsattamatka.co.in/ResultCharts?gameName=${gameName}&chartType=PANEL CHART&isAdmin=${isAdmin}`}
          >
            <div className="bg-red-800 mx-4 my-4 p-4 rounded-full text-2xl font-extrabold font-serif button">
              Panel
            </div>
          </Link>
          <Link
            href={`https://rrsattamatka.co.in/ResultCharts?gameName=${gameName}&chartType=JODI CHART&isAdmin=${isAdmin}`}
          >
            <div className="bg-red-800  my-4 p-4 rounded-full text-2xl font-extrabold font-serif button">
              Jodi
            </div>
          </Link>
        </div>
        <div className="flex justify-center flex-col text-black font-extrabold text-2xl log">
          <p>{gameName}</p>
          <p>{gameNumber}</p>
          {/* <p>{gameTiming}</p> */}
          <p className="text-lg font-semibold text-gray-500 log">
            {isButtonEnabled
              ? "Betting is running !!!"
              : "Betting is closed !!!"}
          </p>
        </div>

        <div className="flex  items-center">
          <div className="flex  items-center log">
            <Popover placement="left" className="bg-red-500 px-2 py-1">
              <PopoverTrigger>
                <Button>
                <MdAccessTimeFilled color="black" size={20}/>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold log">
          {gamesTimingValue[gameName] && (
            <>
            <div className="flex border px-2 py-1 rounded-full border-white">
              <div className="mr-1">
                <strong>Open Bid Start: <br /></strong>{" "}
                {gamesTimingValue[gameName].openBidStart}
              </div>
              <div>
                <strong>Open Bid End: <br /></strong>{" "}
                {gamesTimingValue[gameName].openBidEnd}
              </div>
              </div>
              <div className="flex mt-2 border px-2 py-1 rounded-full border-white">
              <div className="mr-1">
                <strong>Close Bid Start: <br /></strong>{" "}
                {gamesTimingValue[gameName].closeBidStart}
              </div>
              <div>
                <strong>Close Bid End: <br /></strong>{" "}
                {gamesTimingValue[gameName].closeBidEnd}
              </div>
              </div>
            </>
          )}
        </div>
      </div>
    </PopoverContent>
            </Popover>
          </div>
          

          <Link
            href={`/gameList?gameName=${gameName}&gameTiming=${gameTiming}&isDisabled=${isDisabled}`}
          >
            <button
              className={`bg-red-800 mx-4 my-4 p-4 rounded-full text-2xl font-extrabold font-serif flex ${
                isButtonEnabled
                  ? "button"
                  : "cursor-not-allowed opacity-50 button"
              }`}
              disabled={!isButtonEnabled}
            >
              Play
              <Image
                src="/vector3.svg"
                width={35}
                height={35}
                alt="Arrow Icon"
                className="p-2 bg-white rounded-full ml-2 text-red-700"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameBar;
