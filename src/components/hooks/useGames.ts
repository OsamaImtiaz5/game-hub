import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesProps {
  count: number;
  results: Game[];
}
export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    apiClient
      .get<FetchGamesProps>("/games", { signal })
      .then((res) => {
        console.log("API Response:", res.data); // Log the response data
        if (res.data && res.data.results) {
          setGames(res.data.results);
        } else {
          console.warn("No data in response");
        }
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        console.error("API Error:", err); // Log the error
        setError(err.message);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return { games, error };
};
