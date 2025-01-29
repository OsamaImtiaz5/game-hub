import { GameQuery } from "@/App";
import useData from "./useData";
import { Genre } from "./useGeners";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery:GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platfomrs: gameQuery.platform?.id } },
    [gameQuery]
  );
