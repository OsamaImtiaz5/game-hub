import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGeners from "./hooks/useGeners";
import getCroppedImageUrl from "./services/image-url";

const GenersList = () => {
  const { data, error, loading } = useGeners();
  if (loading) return <Spinner />;
  if (error) return null;
  return (
    <div>
      {data.map((genre) => (
        <List.Root>
          <List.Item key={genre.id} listStyleType="none" paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg"> {genre.name}</Text>
            </HStack>
          </List.Item>
        </List.Root>
      ))}
    </div>
  );
};

export default GenersList;
