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
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platfomrs: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );
