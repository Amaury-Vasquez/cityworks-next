import clsx from "clsx";
import { FC, HTMLProps } from "react";
import styles from "@/styles/components/image.module.scss";

interface ImageProps extends HTMLProps<HTMLImageElement> {
  caption?: string;
  shadow?: boolean;
  padding?: boolean;
}

const { image, withShadow, withPadding } = styles;

export const Image: FC<ImageProps> = ({
  src,
  alt,
  className,
  caption,
  shadow = false,
  padding = false,
  ...props
}) => (
  <div
    className={clsx(
      image,
      className,
      shadow && withShadow,
      padding && withPadding
    )}
  >
    <img src={src} alt={alt} {...props} />
    {caption && <figcaption>{caption}</figcaption>}
  </div>
);
