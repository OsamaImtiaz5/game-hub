import { Box } from "@chakra-ui/react";
interface Prop {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: Prop) => {
  return (
    <Box width="250px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
