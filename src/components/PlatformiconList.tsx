import React from 'react'
import { Platforms } from './hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {FaWindows,FaPlaystation, FaXbox,FaApple, FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe}from 'react-icons/bs' 
import { IconType } from 'react-icons';


interface Props {
  platforms: Platforms[];
}
 
const PlatformiconList = ({platforms}:Props) => {
     const IconMap:{ [key:string]:IconType } = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        android: FaAndroid,
        linux: FaLinux,
        mac: FaApple,
        web: BsGlobe,

    }
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
         <Icon as={IconMap[platform.slug]} color='gray.500'/>

        // <Text key={platform.id}>{platform.name}</Text>
      ))}
    </HStack>
  );
}

export default PlatformiconList