import { FC } from "react";

interface CustomImageProps {
  src: string;
  altText: string;
  className?: string;
}

const CustomImage: FC<CustomImageProps> = ({ src, altText, className }) => {
  return <img src={src} alt={altText} className={className} />;
};

export default CustomImage;
