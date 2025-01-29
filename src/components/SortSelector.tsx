import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "./ui/menu"
import { BiChevronDown } from "react-icons/bi";

const SortSelector = () => {
  //   if (error) return null;
  return (
    <div>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button bgColor={"gray.700"} color={"white"} focusRing={"none"}>
            Order: By Relevance <BiChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="Relevance">Relevance</MenuItem>
          <MenuItem value="Date">Date Added</MenuItem>
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="Release">Release Date</MenuItem>
          <MenuItem value="Popularity">Popularity</MenuItem>
          <MenuItem value="Rating">Average Rating</MenuItem>
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default SortSelector;
