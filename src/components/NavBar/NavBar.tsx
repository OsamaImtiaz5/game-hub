import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput";
const NavBar = () => {
  return (
    <div>
      <HStack colorPalette={"green"} padding="10px" justifyContent={"space-between"}>
        <Image src={logo} boxSize="60px" />

        <SearchInput />

        <ColorModeSwitch />
        {/* <ColorModeButton /> */}
      </HStack>
    </div>
  );
};

export default NavBar;
