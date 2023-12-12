import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface Props{
    gameName:string;
    gameNumber:string;
    gameTiming:string;
}

const GameBar = ({gameName,gameNumber,gameTiming}:Props) => {

   
    
  return (
    <div>
        <div className='bg-white flex justify-between my-2' >
          <Link href="https://demo44.codehap.in/panel-chart/sridevi"><div className='bg-red-800 mx-4 my-4 p-4 rounded-full text-2xl font-extrabold font-serif'>Panel</div></Link>
            <div className='flex flex-col text-black font-extrabold text-2xl'>
                <p>{gameName}</p>
                <p>{gameNumber}</p>
                <p>{gameTiming}</p>
            </div>
            <Link href={"/gameList"}>
            <button className='bg-red-800 mx-4 my-4 p-4 rounded-full text-2xl font-extrabold font-serif flex'>
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
  )
}

export default GameBar
