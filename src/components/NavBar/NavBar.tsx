import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import { ColorModeButton, ColorModeIcon } from '../ui/color-mode';
const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding='10px'>
        <Image src={logo} boxSize='60px' />
        <ColorModeButton/>
      </HStack>
    </div>
  );
}

export default NavBar