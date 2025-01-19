import { HStack,  } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { Switch } from "@/components/ui/switch";

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode}= useColorMode();
  return (
    <HStack>
      <Switch checked={colorMode === "dark"} onChange={toggleColorMode} colorScheme={'green'}>
        Dark mode
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
