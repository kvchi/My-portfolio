/* eslint-disable react/prop-types */
export default function OptimizedImage({
  src,
  webpSrcSet,
  sizes,
  pictureClassName = '',
  ...imageProps
}) {
  return (
    <picture className={pictureClassName}>
      {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
      <img src={src} {...imageProps} />
    </picture>
  );
}
