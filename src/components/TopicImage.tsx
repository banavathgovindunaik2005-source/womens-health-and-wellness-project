import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface TopicImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function TopicImage({ src, alt, caption, className = '' }: TopicImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`bg-white border border-[#E3E7E5] p-3 ${className}`}>
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#EDF1EF]">
        {hasError ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F4F7F6] to-[#E4ECE9]"
            role="img"
            aria-label={alt}
          >
            <ImageOff className="w-6 h-6 text-[#525C58] mb-2" aria-hidden="true" />
            <p className="text-xs font-medium text-[#141A18]">{alt}</p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs text-[#525C58] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
