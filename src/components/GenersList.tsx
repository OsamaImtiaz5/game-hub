import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGeners, { Genre } from "./hooks/useGeners";
import getCroppedImageUrl from "./services/image-url";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}
const GenersList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, loading } = useGeners();
  if (loading) return <Spinner />;
  if (error) return null;
  return (
    <div>
      <Heading size="2xl" marginBottom={3}>Genres</Heading>
      {data.map((genre) => (
        <List.Root key={genre.id}>
          <List.Item listStyleType="none" paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius={8}
                objectFit='cover'
              />
              <Link fontSize="lg" fontWeight={genre.id===selectedGenre?.id ? 'bold':''} onClick={() => onSelectedGenre(genre)}>
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
