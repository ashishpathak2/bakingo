import { useState } from "react";
import Image from "next/image";

export default function ProgressiveImage({ src, placeholder, alt, width, height, className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Placeholder Image */}
      <Image
        src={placeholder}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: "contain" }}
        className={`absolute inset-0 transition-opacity duration-500 blur-sm  ${loaded ? "opacity-0" : "opacity-100"}`}
        priority
      />

      {/* Full Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ objectFit: "contain" }}
        className={`absolute inset-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
