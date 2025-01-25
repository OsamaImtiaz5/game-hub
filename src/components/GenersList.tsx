import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGeners from "./hooks/useGeners";
import getCroppedImageUrl from "./services/image-url";

const GenersList = () => {
  const { data, error } = useGeners();

  return (
    <div>
      {error && <Text>{error}</Text>}

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
              <Text fontSize='lg'> {genre.name}</Text>
            </HStack>
          </List.Item>
        </List.Root>
      ))}
    </div>
  );
};

export default GenersList;
