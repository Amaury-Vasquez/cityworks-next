import { FC } from "react";
import styles from "@/styles/components/carousel.module.scss";
import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";

interface CarouselButtonProps {
  direction: "left" | "right";
  handleClick: () => void;
}

export const CarouselButton: FC<CarouselButtonProps> = ({
  direction,
  handleClick,
}) => {
  return (
    <button className={styles.carouselButton} onClick={handleClick}>
      {direction === "left" ? (
        <AiOutlineStepBackward />
      ) : (
        <AiOutlineStepForward />
      )}
    </button>
  );
};
