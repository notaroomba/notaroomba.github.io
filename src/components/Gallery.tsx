import gallery from "../data/gallery.json";

export interface Photo {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export const photos = gallery as Photo[];

// Justified rows: each row keeps the photos' real shapes at one shared height and
// spans the full width, so every row (including the last) ends flush. Rows follow a
// fixed 3, 4, 3, 5 pattern; a lone photo at the end joins the row before it.
const PATTERN = [3, 4, 3, 5];
function rows() {
  const out: Photo[][] = [];
  for (let i = 0, k = 0; i < photos.length; i += PATTERN[k++ % PATTERN.length]) {
    out.push(photos.slice(i, i + PATTERN[k % PATTERN.length]));
  }
  if (out.length > 1 && out[out.length - 1].length === 1) out[out.length - 2].push(...out.pop()!);
  return out;
}
const galleryRows = rows();

export function PhotoCell({ p, className = "", style }: { p: Photo; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`group relative overflow-hidden rounded-md bg-white/5 ${className}`} style={style}>
      <img
        src={p.src}
        alt={p.alt}
        title={p.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
      />
    </div>
  );
}

function Rows({ rows, className }: { rows: Photo[][]; className: string }) {
  return (
    <div className={`flex-col gap-2 ${className}`}>
      {rows.map((row, i) => {
        const sum = row.reduce((s, p) => s + p.w / p.h, 0);
        return (
          <div key={i} className="flex gap-2" style={{ aspectRatio: sum }}>
            {row.map((p) => (
              <PhotoCell key={p.src} p={p} className="h-full" style={{ flex: `${p.w / p.h} 1 0` }} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <Rows rows={galleryRows} className="flex" />
    </>
  );
}
