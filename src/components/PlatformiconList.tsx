import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "./hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformiconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    mac: FaApple,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon as={IconMap[platform.slug]} color="gray.500" key={platform.id} />

        // <Text key={platform.id}>{platform.name}</Text>
      ))}
    </HStack>
  );
};

export default PlatformiconList;
