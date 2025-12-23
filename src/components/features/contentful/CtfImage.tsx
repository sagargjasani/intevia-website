import NextImage from "next/image";

export const CtfImage = ({
  url,
  width,
  height,
  title,
  nextImageProps,
}: any) => {
  if (!url || !width || !height) return null;

  const blurURL = new URL(url);
  blurURL.searchParams.set("w", "10");
  return (
    <NextImage
      src={url}
      width={width}
      height={height}
      alt={title || ""}
      sizes="(max-width: 1200px) 100vw, 50vw"
      // placeholder="blur"
    />
  );
};
