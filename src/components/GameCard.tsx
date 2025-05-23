import { Game } from "./hooks/useGames";
import { HStack, Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./services/image-url";
import Emojis from "./Emojis";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body>
        <Card.Title fontSize={"2xl"}>
          {game.name} <Emojis rating={game.rating_top} />{" "}
        </Card.Title>
        <HStack justifyContent={"space-between"} marginY={"10px"} flexWrap={"wrap"}>
          <PlatformiconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
