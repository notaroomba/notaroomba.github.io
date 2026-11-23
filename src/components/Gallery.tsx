import gallery from "../data/gallery.json";

export interface Photo {
  src: string;
  alt: string;
  w: number;
  h: number;
}

export const photos = gallery as Photo[];

// Justified rows: each row keeps the photos' real shapes at one shared height and
// spans the full width, so every row (including the last) ends flush. `target` is
// roughly how many landscape photos' worth of width a row holds.
function rows(target: number) {
  const ratio = (p: Photo) => p.w / p.h;
  const total = photos.reduce((s, p) => s + ratio(p), 0);
  const count = Math.max(1, Math.round(total / target));
  const per = total / count;
  const out: Photo[][] = Array.from({ length: count }, () => []);
  let cum = 0;
  // each photo goes to the row its midpoint falls in, so rows come out evenly filled
  for (const p of photos) {
    out[Math.min(count - 1, Math.floor((cum + ratio(p) / 2) / per))].push(p);
    cum += ratio(p);
  }
  return out;
}
const desktopRows = rows(4);
const mobileRows = rows(2);

export function PhotoCell({ p, className = "", style }: { p: Photo; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`group relative overflow-hidden rounded-md bg-white/5 ${className}`} style={style}>
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
      <Rows rows={desktopRows} className="hidden md:flex" />
      <Rows rows={mobileRows} className="flex md:hidden" />
    </>
  );
}
