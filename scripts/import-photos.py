"""Import photos into the gallery.

    python3 scripts/import-photos.py <folder> [--caption "text"]

For every image in <folder> (jpg, png, webp, heic with pillow-heif installed):
  - applies the camera rotation, then drops ALL metadata (GPS location included)
  - resizes to at most 1600px on the long side and saves a progressive JPEG
  - names it nathan-alspaugh-NNN.jpg in public/images/gallery/
  - appends {src, alt, w, h} to src/data/gallery.json
Edit alt text in gallery.json afterwards; it is what Google reads.
"""
import json, sys
from pathlib import Path
from PIL import Image, ImageOps

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    pass

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public/images/gallery"
DATA = ROOT / "src/data/gallery.json"
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"}


def main():
    src = Path(sys.argv[1]).expanduser()
    caption = sys.argv[sys.argv.index("--caption") + 1] if "--caption" in sys.argv else "Nathan Alspaugh"
    OUT.mkdir(parents=True, exist_ok=True)
    items = json.loads(DATA.read_text()) if DATA.exists() else []
    n = len(items)
    for f in sorted(p for p in src.iterdir() if p.suffix.lower() in EXTS):
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
        im.thumbnail((1600, 1600))
        n += 1
        name = f"nathan-alspaugh-{n:03d}.jpg"
        # A fresh save with no exif= argument writes no metadata at all.
        im.save(OUT / name, "JPEG", quality=80, optimize=True, progressive=True)
        items.append({"src": f"/images/gallery/{name}", "alt": caption, "w": im.width, "h": im.height})
        print(name, im.size, "<-", f.name)
    DATA.parent.mkdir(parents=True, exist_ok=True)
    DATA.write_text(json.dumps(items, indent=2) + "\n")


if __name__ == "__main__":
    main()
