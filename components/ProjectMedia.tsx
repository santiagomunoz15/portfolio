'use client';
import { assetPath } from '@/lib/assets';
import { useState } from 'react';
import { Play, Square } from 'lucide-react';

export default function ProjectMedia({ name, alt }: { name: string; alt: string }) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const poster = assetPath(`${name}-poster.jpg`);

  return (
    <div className="project-media">
      {playing ? (
        <video
          src={assetPath(`${name}-demo.mp4`)}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-label={alt}
          onError={() => { setPlaying(false); setFailed(true); }}
        />
      ) : (
        <img src={poster} alt={alt} loading="lazy" decoding="async" />
      )}
      <button
        onClick={() => { setFailed(false); setPlaying(!playing); }}
        aria-pressed={playing}
      >
        {playing ? <Square size={11} /> : <Play size={11} />}
        {playing ? 'Stop demo' : 'Play project demo'}
      </button>
      {failed && <p className="media-error" role="status">Demo couldn’t load. Try playing it again.</p>}
    </div>
  );
}
