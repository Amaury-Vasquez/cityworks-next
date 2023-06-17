import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { Image } from "@/components";
import { ImageType } from "@/interfaces";
import styles from "@/styles/components/carousel.module.scss";
import { CarouselButton } from "./CarouselButton";

const {
  carouselContainer,
  carousel,
  carouselImg,
  carouselSlide,
  carouselSlideFinished,
} = styles;

interface CarouselProps {
  images: ImageType[];
}

interface ActiveImage {
  first: number;
  second: number;
}

export const Carousel: FC<CarouselProps> = ({ images }) => {
  const [activeImages, setActiveImages] = useState<ActiveImage>({
    first: 0,
    second: 1,
  });
  const [sliding, setSliding] = useState(false);

  const handleBackButtonClick = () => {
    const len = images.length;
    const { first, second } = activeImages;
    if (first - 1 < 0) setActiveImages({ first: len - 1, second: 0 });
    else if (second - 1 < 0) {
      setActiveImages({ first: first - 1, second: len - 1 });
    } else {
      setActiveImages({ first: first - 1, second: second - 1 });
    }
    setSliding(true);
  };

  const handleNextButtonClick = () => {
    const len = images.length;
    const { first, second } = activeImages;
    if (first + 1 >= len) setActiveImages({ first: 0, second: 1 });
    else if (second + 1 >= len) {
      setActiveImages({ first: first + 1, second: 0 });
    } else {
      setActiveImages({ first: first + 1, second: second + 1 });
    }
    setSliding(true);
  };

  const handleButtonClick = (direction: "left" | "right") => {
    setSliding(true);
    setTimeout(() => {
      if (direction === "left") handleBackButtonClick();
      else handleNextButtonClick();
    }, 250);
  };

  const renderImg = (index: number) => {
    if (index >= images.length) return null;

    const { src, alt } = images[index];
    return (
      <Image
        src={src}
        alt={alt}
        className={clsx(
          carouselImg,
          sliding ? carouselSlide : carouselSlideFinished
        )}
        shadow
        caption={alt}
      />
    );
  };

  useEffect(() => {
    let render = true;

    if (render && sliding) {
      setTimeout(() => {
        setSliding(false);
      }, 250);
    }

    return () => {
      render = false;
    };
  }, [sliding]);

  return (
    <div className={carouselContainer}>
      <CarouselButton
        direction="left"
        handleClick={() => handleButtonClick("left")}
      />
      <div className={carousel}>
        {renderImg(activeImages.first)}
        {renderImg(activeImages.second)}
      </div>
      <CarouselButton
        direction="right"
        handleClick={() => handleButtonClick("right")}
      />
    </div>
  );
};
