import bullsEyes from "../../src/assets/bulls-eye.webp";
import thumbsup from "../../src/assets/thumbs-up.webp";
import meh from "../../src/assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  const EmojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "Recommended", boxSize: "20px" },
    5: { src: bullsEyes, alt: "Exceptional", boxSize: "30px" },
  };
  if (rating < 3) return null;
  return (
    <div>
      <Image {...EmojiMap[rating]}  marginTop={2}/>
    </div>
  );
};

export default Emojis;
