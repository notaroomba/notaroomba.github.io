import { motion } from "motion/react";
import { useMemo } from "react";
import { photos } from "./Gallery";

// Photos drifting around the about section, in place of the old tech logos.
// Black and white until hovered, like the gallery.
const PICKS = [1, 3, 4, 6, 8, 12, 14, 16, 20, 22, 24, 26, 28, 31, 32, 7];

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
