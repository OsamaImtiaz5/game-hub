import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch';
const NavBar = () => {
  return (
    <div>
      <HStack colorPalette={'green'} justifyContent={"space-between"} padding="10px">
        <Image src={logo} boxSize="60px" />
        {/* <ColorModeButton /> */}
        <ColorModeSwitch/>
      </HStack>
    </div>
  );
}

export default NavBar