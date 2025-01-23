import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic:number
}

interface FetchGamesProps {
  count: number;
  results: Game[];
}
export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
        
    apiClient
      .get<FetchGamesProps>("/games", { signal })
      .then((res) => {
        console.log("API Response:", res.data); // Log the response data
        if (res.data && res.data.results) {
          setGames(res.data.results);
        } else {
          console.warn("No data in response");
        }
        setLoading(false);

      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        console.error("API Error:", err); // Log the error
        setError(err.message);
        setLoading(false);

      })
    return () => {
      controller.abort();
    };
  }, []);
  return { games, error , loading };
};
