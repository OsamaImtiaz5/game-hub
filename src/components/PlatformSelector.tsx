import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button, Link } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "./hooks/usePlatdorms";
const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <div>
      <MenuRoot >
        <MenuTrigger asChild>
          <Button bgColor={"gray.700"} color={"white"} focusRing={"none"}>
            Platforms <BiChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
            <MenuItem value={platform.name} key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default PlatformSelector;
