import { arrayFromRange } from "../lib/utils";
import { Star } from "./Star";

interface StarsDisplayProps {
  starCount: number;
}

export const StarsDisplay = (props: StarsDisplayProps) => {
  const { starCount } = props;
  return (
    <>
      {arrayFromRange(1, starCount).map((currentStar) => (
        <Star key={currentStar} />
      ))}
    </>
  );
};
