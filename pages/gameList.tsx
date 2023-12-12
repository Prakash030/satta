// pages/GameList.js

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import "../styles.css";

const games = [
  { id: 1, name: "/SingleAnk", imageUrl: "/singleAnk.jpeg" },
  { id: 2, name: "/Jodi", imageUrl: "/jodi.jpeg" },
  { id: 3, name: "/SinglePatti", imageUrl: "/singlePatti.jpeg" },
  // Add more games as needed
];
const games2 = [
  { id: 1, name: "/DoublePatti", imageUrl: "/doublePatti.jpeg" },
  { id: 2, name: "/TripplePatti", imageUrl: "/tripplePatti.jpeg" },
  { id: 3, name: "/HalfSangam", imageUrl: "/halfSangam.jpeg" },
  // Add more games as needed
];

const GameList = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">
        <span
          style={{
            backgroundColor: "yellow",
            padding: "10px",
            borderRadius: "20%",
            marginLeft: "40%",
            fontWeight: "bold",
            fontSize: "30px",
            color: "black",
          }}
        >
          Select Bidding Option Here
        </span>
      </h1>
      <div className="game-list">
        {games.map((game) => (
          // <GameCard key={game.id} game={game} />
          <Link href={game.name} key={game.id}>
            <Image
              width={100}
              height={100}
              src={game.imageUrl}
              alt={game.name}
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
          </Link>
        ))}
      </div>
      <div className="game-list">
        {games2.map((game) => (
          <Link href={game.name} key={game.id}>
            <Image
              width={100}
              height={100}
              src={game.imageUrl}
              alt={game.name}
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
          </Link>
        ))}

        
      </div >



      <div style={{marginTop:"50px"}}>
      <Link href="/FullSangam" style={{marginLeft:"47.5%"}}>
          <Image
            width={100}
            height={100}
            src="/fullSangam.jpeg"
            alt="fullsangam"
            className="w-full h-32 object-cover mb-2 rounded-md"
          />
        </Link>
      </div>
    </div>
  );
};

export default GameList;

