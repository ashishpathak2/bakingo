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
  objectFit = "cover", // Default objectFit to cover
  objectPosition = "center", // Improved default objectPosition
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", // More common breakpoint
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative ${containerClassName} overflow-hidden`} // Overflow hidden for image containment
      style={{ width, height }} // Maintain aspect ratio using width and height
    >
      {/* Placeholder Image - Improved Styling */}
      <Image
        src={placeholder}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{
          objectFit: objectFit, // Use provided objectFit
          objectPosition: objectPosition,
        }}
        className={`transition-opacity duration-500 blur-sm absolute inset-0 w-full h-full
          ${loaded ? "opacity-0" : "opacity-100"} ${imageClassName}`}
      />

      {/* Main Image - Improved Styling */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{
          objectFit: objectFit, // Use provided objectFit
          objectPosition: objectPosition,
        }}
        className={`transition-opacity duration-500 absolute inset-0 w-full h-full
          ${loaded ? "opacity-100" : "opacity-0"} ${imageClassName}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}