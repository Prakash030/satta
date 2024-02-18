// pages/GameList.js

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import "../styles.css";
import { useRouter } from 'next/router';
import "../styles.css";





const GameList = () => {


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getUser`, {
          method: "GET",
        });

        if (!response.ok) {
          console.error("Error fetching user data:");
          window.location.href = "/logIn";
          return;
        }

      } catch (error) {
        console.error("Error handling result fetch:", error);
      }
    };

    fetchData();
  }, []);


  const router = useRouter();
  const { gameName,gameTiming,isDisabled } = router.query;

  const games = [
    { id: 1, name: `/SingleAnk?gameName=${gameName}&gameType=SINGLE_ANK&gameTiming=${gameTiming}&isDisabled=${isDisabled}`, imageUrl: "/singleAnk.jpeg" },
    { id: 2, name: `/Jodi?gameName=${gameName}&gameType=JODI&gameTiming=${gameTiming}&isDisabled=${isDisabled}`, imageUrl: "/jodi.jpeg" },

  ];
  const games2 = [
    { id: 1, name: `/SinglePatti?gameName=${gameName}&gameType=SINGLE_PATTI&gameTiming=${gameTiming}&isDisabled=${isDisabled}`, imageUrl: "/singlePatti.jpeg" },
    { id: 2, name: `/DoublePatti?gameName=${gameName}&gameType=DOUBLE_PATTI&gameTiming=${gameTiming}&isDisabled=${isDisabled}`, imageUrl: "/doublePatti.jpeg" },
    { id: 3, name: `/TripplePatti?gameName=${gameName}&gameType=TRIPPLE_PATTI&gameTiming=${gameTiming}&isDisabled=${isDisabled}`, imageUrl: "/tripplePatti.jpeg" },
   
  ];

  return (
    <div className="container mx-auto my-8 .text">
      <h1 className="text-4xl font-bold mb-4">
        <span
          style={{
            backgroundColor: "yellow",
            padding: "10px",
            borderRadius: "20%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          Select Bidding Option Here
        </span>
      </h1>
      <div className="game-list gameCustom" >
        {games.map((game) => (
          // <GameCard key={game.id} game={game} />
          <Link href={game.name} key={game.id}>
            <Image
              width={200}
              height={200}
              src={game.imageUrl}
              alt={game.name}
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
          </Link>
        ))}
      </div>
      <div className="game-list" >
        {games2.map((game) => (
          <Link href={game.name} key={game.id}>
            <Image
              width={200}
              height={200}
              src={game.imageUrl}
              alt={game.name}
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
          </Link>
        ))}

        
      </div >

    </div>
  );
};

export default GameList;

