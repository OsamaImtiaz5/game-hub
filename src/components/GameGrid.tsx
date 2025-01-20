import React, { useState, useEffect } from "react";
import apiClient from "./services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesProps {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get<FetchGamesProps>("/games")
      .then((res) => {
        console.log("API Response:", res.data); // Log the response data
        if (res.data && res.data.results) {
          setGames(res.data.results);
        } else {
          console.warn("No data in response");
        }
      })
      .catch((err) => {
        console.error("API Error:", err); // Log the error
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id} className="text-white">
            {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
