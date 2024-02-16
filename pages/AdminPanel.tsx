import React, { FormEvent, useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { NextApiRequest, NextApiResponse } from "next";
import "../styles.css";
import getUser from "./api/getUser";

interface FormData {
  [key: string]: string;
}

function AdminPanel() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getUser`, {
          method: "GET",
        });

        if (!response.ok) {
          console.error("Error fetching user data:");
          window.location.href = "/";
          return;
        }

        const user = await response.json();
        console.log("User:", user);

        if (user.result.role !== "admin") {
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Error handling result fetch:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (role !== "admin") {
  //     window.location.href = "/";
  //   }
  // }, [role]);

  interface GameResult {
    gameName: string;
    gameNumber: string;
  }

  const games = [
    "MILAN_MORNING",
    "SIVAJI",
    "KALYAN_MORNING",
    "SRIDEVI",
    "SIVA",
    "MADHUR_DAY",
    "MILAN_DAY",
    "KALYAN",
    "MAHARANI_DAY",
    "SIVAJI_NIGHT",
    "SRIDEVI_NIGHT",
    "MADHUR_NIGHT",
    "MILAN_NIGHT",
    "MAIN_BAJAR",
    "MAHARANI_NIGHT",
  ];

  const [gameResults, setGameResults] = useState<{
    [gameName: string]: string;
  }>({
    ["MILAN_MORNING"]: "",
    ["SIVAJI"]: "",
    ["KALYAN_MORNING"]: "",
    ["SRIDEVI"]: "",
    ["SIVA"]: "",
    ["MADHUR_DAY"]: "",
    ["MILAN_DAY"]: "",
    ["KALYAN"]: "",
    ["MAHARANI_DAY"]: "",
    ["SIVAJI_NIGHT"]: "",
    ["SRIDEVI_NIGHT"]: "",
    ["MADHUR_NIGHT"]: "",
    ["MILAN_NIGHT"]: "",
    ["MAIN_BAJAR"]: "",
    ["MAHARANI_NIGHT"]: "",
  });

  useEffect(() => {
    const fetchResults = async () => {
      // console.log("yes, I am called");
      try {
        const response = await fetch(`/api/getResult`, {
          method: "GET",
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to get game data");
        }

        const resultData = await response.json();
        // console.log("resultData", resultData.result);

        // Convert the result object into an array
        const resultArray: GameResult[] = Object.entries(resultData.result).map(
          ([gameName, gameNumber]) => ({
            gameName,
            gameNumber: gameNumber as string,
          })
        );

        // Map from the 2nd element to the 3rd last element
        const mappedResults = resultArray.slice(1, -3);

        // Convert the array of objects to an object with game names as keys
        const newGameResults = mappedResults.reduce(
          (acc, { gameName, gameNumber }) => {
            acc[gameName] = gameNumber;
            return acc;
          },
          {} as { [gameName: string]: string }
        );

        setGameResults(newGameResults);
      } catch (error) {
        console.error("Error getting game data:", error);
      }
    };

    fetchResults();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: FormData = {};

    games.forEach((game) => {
      const gameKey = game.replace(/\s/g, "_");
      formData[gameKey] = (event.target as any)[game].value;
    });

    try {
      const queryString = new URLSearchParams(formData).toString();

      const response = await fetch(`/api/createResult?${queryString}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create user");
      }

      console.log("Result created successfully!");
      alert("Result created successfully!");
    } catch (error) {
      console.error("Error creating Result:", error);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    game: string
  ) => {
    const value = event.target.value;
    setGameResults((prevResults) => ({
      ...prevResults,
      [game]: value,
    }));
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {Object.entries(gameResults).map(([game, result], index) => (
          <div className="input-container" key={index}>
            <label>{game}</label>
            <input
              type="text"
              name={game}
              value={result}
              onChange={(e) => handleInputChange(e, game)}
            />
          </div>
        ))}

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form" style={{ overflow: "scroll" }}>
        <div className="title">Results</div>
        {renderForm}
        {/*         <div>
          <button onClick={handleVerify}>Check</button>
        </div> */}
      </div>
    </div>
  );
}

export default AdminPanel;
