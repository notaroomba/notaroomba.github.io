import { Link } from "react-router";
import BackHome from "../components/BackHome";
import { posts, formatDate } from "../lib/posts";
import { useSeo, PERSON_ID } from "../lib/seo";

export default function Blog() {
  useSeo({
    title: "blog | Nathan Alspaugh (NotARoomba)",
    description:
      "Build logs by Nathan Alspaugh (NotARoomba): keyboards, LED controllers, hotplates and dev boards, written from the project journals.",
    path: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Nathan Alspaugh's build log",
      url: "https://notaroomba.dev/blog",
      author: { "@id": PERSON_ID },
    },
  });

  return (
    <div className="min-h-screen bg-black text-white_smoke overflow-x-hidden">
      <BackHome />
      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <h1 className="font-extrabold text-5xl lg:text-8xl mb-4">blog</h1>
        <p className="text-lg md:text-xl text-white_smoke/70 mb-12 max-w-2xl">
          build logs for the stuff i make, pulled from my project journals.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group rounded-xl overflow-hidden border border-white/10 hover:border-argentinian_blue transition-colors bg-white/[0.02]"
            >
              {p.cover && (
                <div className="aspect-[16/10] overflow-hidden bg-white/5">
                  <img
                    src={p.cover}
                    alt={`${p.title.split(":")[0]} by Nathan Alspaugh`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5">
                <p className="text-sm text-white_smoke/50 mb-1">{formatDate(p.date)}</p>
                <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
                <p className="text-white_smoke/70">{p.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
