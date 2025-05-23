import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
interface Props {
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  let sekeletion = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        columnGap={"20px"}
        rowGap={"10px"}
        padding={"10px"}
      >
        {loading
          ? sekeletion.map((item) => (
              <GameCardContainer key={item}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : null}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
