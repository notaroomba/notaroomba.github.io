import { motion } from "motion/react";
import { useMemo } from "react";
import { photos } from "./Gallery";

// Photos drifting around the about section, in place of the old tech logos.
// Black and white until hovered, like the gallery.
const PICKS = [1, 3, 4, 35, 6, 8, 36, 12, 14, 45, 16, 24, 53, 28, 32, 7];

export default function FloatingPhotos() {
  const items = useMemo(
    () =>
      PICKS.map((n) => photos[n - 1])
        .filter(Boolean)
        .map((p, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          return {
            p,
            left: 4 + col * 24 + (Math.random() - 0.5) * 8,
            top: 4 + row * 24 + (Math.random() - 0.5) * 8,
            dx: (Math.random() - 0.5) * 80,
            dy: (Math.random() - 0.5) * 80,
            rot: (Math.random() - 0.5) * 16,
            drot: (Math.random() - 0.5) * 12,
            dur: 18 + Math.random() * 14,
          };
        }),
    [],
  );

  return (
    <div className="relative h-[110vh] md:h-[120vh] mt-8">
      {items.map(({ p, left, top, dx, dy, rot, drot, dur }, i) => (
        <motion.div
          key={p.src}
          className="absolute group w-28 md:w-44 lg:w-52 hover:z-30"
          style={{ left: `${left}%`, top: `${top}%` }}
          initial={{ opacity: 0, y: 40, rotate: rot }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ x: [0, dx, 0], y: [0, dy, 0], rotate: [rot, rot + drot, rot] }}
          transition={{
            opacity: { duration: 0.6, delay: i * 0.05 },
            default: { duration: dur, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.12 }}
        >
          <img
            src={p.src}
            alt={p.alt}
            title={p.alt}
            loading="lazy"
            decoding="async"
            className="w-full rounded-lg shadow-2xl shadow-black grayscale group-hover:grayscale-0 transition-[filter] duration-500"
          />
        </motion.div>
      ))}
    </div>
  );
}

// The rest of the photos scattered down the whole page, along the edges so
// they float behind and around the content without covering the text.
export function PhotoField() {
  const items = useMemo(() => {
    const rest = photos.filter((_, i) => !PICKS.includes(i + 1));
    return rest.map((p, i) => {
      const side = i % 2 === 0;
      return {
        p,
        left: side ? 1 + Math.random() * 7 : 85 + Math.random() * 7,
        top: 3 + (i / rest.length) * 94 + (Math.random() - 0.5) * 3,
        dx: (Math.random() - 0.5) * 60,
        dy: (Math.random() - 0.5) * 120,
        rot: (Math.random() - 0.5) * 20,
        drot: (Math.random() - 0.5) * 10,
        dur: 20 + Math.random() * 16,
      };
    });
  }, []);

  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {items.map(({ p, left, top, dx, dy, rot, drot, dur }) => (
        <motion.img
          key={p.src}
          src={p.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute w-24 lg:w-36 rounded-lg shadow-2xl shadow-black grayscale opacity-40"
          style={{ left: `${left}%`, top: `${top}%` }}
          initial={{ rotate: rot }}
          animate={{ x: [0, dx, 0], y: [0, dy, 0], rotate: [rot, rot + drot, rot] }}
          transition={{ duration: dur, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
