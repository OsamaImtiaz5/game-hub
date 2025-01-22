import { Game } from "./hooks/useGames";
import { Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";


 interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  
  return (
    <Card.Root borderRadius={10} overflow="hidden" boxShadow="md">
        <Image src={game.background_image} alt={game.name} />
      <Card.Body >
        <Card.Title fontSize={'2xl'}>{game.name}</Card.Title>
        <PlatformiconList platforms={game.parent_platforms.map(p=>p.platform)} />
        </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
