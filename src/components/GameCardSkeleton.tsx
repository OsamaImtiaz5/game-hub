import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
const GameCardSkeleton = () => {
  return (
    <div>
      <Card.Root>
        <Skeleton
          height="200px"
          width="200px"
          borderRadius={10}
          overflow="hidden"
        />
        <Card.Body>
          <SkeletonText />
        </Card.Body>
      </Card.Root>
    </div>
  );
};

export default GameCardSkeleton;
