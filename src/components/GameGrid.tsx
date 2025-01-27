import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "./hooks/useGeners";
interface Props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }:Props) => {
  const { data, error, loading } = useGames(selectedGenre);
  let sekeletion = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        columnGap={"10px"}
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
