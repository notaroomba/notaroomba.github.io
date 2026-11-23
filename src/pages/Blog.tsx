import { Link } from "react-router";
import BackHome from "../components/BackHome";
import { posts } from "../lib/posts";
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
      <main className="max-w-3xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <h1 className="font-extrabold text-5xl lg:text-8xl mb-4">blog</h1>
        <p className="text-lg md:text-xl text-white_smoke/70 mb-12 max-w-2xl">
          stuff i built.
        </p>
        <ul className="divide-y divide-white/10">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="group flex items-center gap-4 py-5">
                {p.cover && (
                  <img
                    src={p.cover}
                    alt={`${p.title} by Nathan Alspaugh`}
                    loading="lazy"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover shrink-0 bg-white/5"
                  />
                )}
                <div className="min-w-0">
                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-argentinian_blue transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-white_smoke/70">{p.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
