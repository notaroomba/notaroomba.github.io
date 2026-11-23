import BackHome from "../components/BackHome";
import Gallery, { photos } from "../components/Gallery";
import { useSeo, PERSON_ID } from "../lib/seo";

export default function GalleryPage() {
  useSeo({
    title: "gallery | Nathan Alspaugh (NotARoomba)",
    description: "Photos of Nathan Alspaugh (NotARoomba) and the things he builds.",
    path: "/gallery",
    image: photos[0]?.src,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Nathan Alspaugh's photos",
      url: "https://notaroomba.dev/gallery",
      author: { "@id": PERSON_ID },
      image: photos.map((p) => ({
        "@type": "ImageObject",
        contentUrl: "https://notaroomba.dev" + p.src,
        caption: p.alt,
      })),
    },
  });
  return (
    <div className="min-h-screen bg-black text-white_smoke overflow-x-hidden">
      <BackHome />
      <main className="px-1 pt-24 pb-8">
        <h1 className="font-extrabold text-5xl lg:text-8xl mb-8 px-4 md:px-8">gallery</h1>
        <Gallery />
      </main>
    </div>
  );
}
