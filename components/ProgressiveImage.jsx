import { useState } from "react";
import Image from "next/image";

export default function ProgressiveImage({
  src,
  placeholder,
  alt,
  width,
  height,
  containerClassName = "",
  imageClassName = "",
  objectPosition = "right bottom",
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${containerClassName}`} 
         style={{ width, height }}>
      {/* Placeholder Image */}
      <Image
        src={placeholder}
        alt={alt}
        fill
        priority={priority}
        style={{
          objectFit: 'cover',
          objectPosition: objectPosition,
        }}
        className={`transition-opacity duration-500 blur-sm 
          ${loaded ? 'opacity-0' : 'opacity-100'} ${imageClassName}`}
      />

      {/* Main Image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        style={{
          objectFit: 'cover',
          objectPosition: objectPosition,
        }}
        className={`transition-opacity duration-500 
          ${loaded ? 'opacity-100' : 'opacity-0'} ${imageClassName}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}