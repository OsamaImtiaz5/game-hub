import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGeners, { Genre } from "./hooks/useGeners";
import getCroppedImageUrl from "./services/image-url";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenersList = ({ onSelectedGenre }: Props) => {
  const { data, error, loading } = useGeners();
  if (loading) return <Spinner />;
  if (error) return null;
  return (
    <div>
      {data.map((genre) => (
        <List.Root key={genre.id}>
          <List.Item listStyleType="none" paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius={8}
              />
              <Link fontSize="lg" onClick={() => onSelectedGenre(genre)}>
                {" "}
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        </List.Root>
      ))}
    </div>
  );
};

export default GenersList;
