import gallery from "../data/gallery.json";

export interface Photo {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export const photos = gallery as Photo[];

// Square tiles, with a few 2x2 ones. The number of big tiles is picked so the
// total cell count is a multiple of 8 (and 4), so the grid ends in a flat row.
const big = new Set<number>();
{
  const n = photos.length;
  let k = 0;
  while ((n + 3 * k) % 8 !== 0) k++;
  // offsets zig-zag the big tiles across the 8 columns instead of stacking them on the left
  for (let i = 0; i < k; i++) big.add(Math.min(n - 1, Math.floor((i * n) / k) + [0, 6, 2, 4][i % 4]));
}

export function PhotoCell({ p, className = "" }: { p: Photo; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-md bg-white/5 ${className}`}>
      <img
        src={p.src}
        alt={p.alt}
        title={p.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-[filter,transform] duration-500"
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 grid-flow-dense gap-2">
      {photos.map((p, i) => (
        <PhotoCell key={p.src} p={p} className={big.has(i) ? "col-span-2 row-span-2 aspect-square" : "aspect-square"} />
      ))}
    </div>
  );
}
