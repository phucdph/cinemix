import type { ImageProps } from "@mantine/core";
import { useState, useEffect } from "react";
import { Image as MantineImage } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import placeholderImg from "~/assets/images/placeholder.jpeg";

interface Props extends ImageProps {
  src?: string;
  placeholder?: string;
}

const ProgressiveImage: React.FC<Props> = (props) => {
  const { placeholder, src, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(placeholder || src);

  useEffect(() => {
    setImgSrc(placeholder || src);
  }, [placeholder, src]);

  const { inView, ref } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  useEffect(() => {
    if (src && inView) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
      };
      img.onerror = () => {
        setImgSrc(placeholderImg)
      }
    }
  }, [src, inView]);

  const customClass =
    placeholder && imgSrc === placeholder ? "loading" : "loaded";

  return (
    <MantineImage
      src={imgSrc}
      alt={props.alt || ""}
      sx={{
        transition: "filter 0.5s ease",
        ...(customClass === "loading"
          ? {
              filter: "blur(4px)",
              clipPath: "inset(0)",
            }
          : {
              filter: "blur(0px)",
            }),
      }}
      ref={ref}
      styles={{
        figure: {
          width: "100%",
          height: "100%",
        },
        imageWrapper: {
          width: "100%",
          height: "100%",
        },
      }}
      {...rest}
    />
  );
};
export default ProgressiveImage;
