import { useState } from 'react';

interface BatikImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackTitle?: string;
}

export function BatikImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  style,
  fallbackTitle,
}: BatikImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-surface-container-high via-secondary-container/40 to-surface-container-lowest"
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-12 h-12 text-primary/50 mb-3"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="1" />
          <path
            d="M32 8 C35 20, 40 24, 32 32 C24 24, 29 20, 32 8 Z M32 56 C35 44, 40 40, 32 32 C24 40, 29 44, 32 56 Z M8 32 C20 35, 24 40, 32 32 C24 24, 20 29, 8 32 Z M56 32 C44 35, 40 40, 32 32 C40 24, 44 29, 56 32 Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <span className="font-headline-sm text-primary text-sm leading-snug">
          {fallbackTitle || alt}
        </span>
        <span className="font-label-sm text-on-surface-variant uppercase tracking-widest mt-1 opacity-75">
          Chamathkara Atelier
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      style={style}
      loading="lazy"
    />
  );
}
