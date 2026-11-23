import gallery from "../data/gallery.json";

export interface Photo {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export const photos = gallery as Photo[];

// Tile size from the photo's shape: tall, wide or square, with a few promoted
// to large tiles so the mosaic doesn't look like a plain grid.
function tile(p: Photo, i: number) {
  const r = p.w / p.h;
  const big = i % 7 === 0;
  if (r < 0.85) return big ? "col-span-2 row-span-4" : "col-span-1 row-span-2";
  if (r > 1.25) return big ? "col-span-4 row-span-2" : "col-span-2 row-span-1";
  return big ? "col-span-2 row-span-2" : "col-span-1 row-span-1";
}

export function PhotoCell({ p, className = "" }: { p: Photo; className?: string }) {
  return (
    <div className={`group overflow-hidden rounded-md bg-white/5 ${className}`}>
      <img
        src={p.src}
        alt={p.alt}
        title={p.alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-[filter,transform] duration-500"
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 auto-rows-[90px] md:auto-rows-[140px] grid-flow-dense gap-2">
      {photos.map((p, i) => (
        <PhotoCell key={p.src} p={p} className={tile(p, i)} />
      ))}
    </div>
  );
}
