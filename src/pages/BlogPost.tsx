import { useParams, Link } from "react-router";
import Markdown from "react-markdown";
import BackHome from "../components/BackHome";
import ErrorPage from "./ErrorPage";
import { getPost, formatDate } from "../lib/posts";
import { useSeo, PERSON_ID } from "../lib/seo";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);

  useSeo({
    title: post ? `${post.title} | Nathan Alspaugh` : "not found",
    description: post?.summary ?? "",
    path: `/blog/${slug}`,
    image: post?.cover,
    jsonLd: post && {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      image: post.cover ? `https://notaroomba.dev${post.cover}` : undefined,
      url: `https://notaroomba.dev/blog/${post.slug}`,
      author: { "@type": "Person", "@id": PERSON_ID, name: "Nathan Alspaugh", url: "https://notaroomba.dev/" },
    },
  });

  if (!post) return <ErrorPage />;

  return (
    <div className="min-h-screen bg-black text-white_smoke overflow-x-hidden">
      <BackHome to="/blog" label="blog" />
      <article className="max-w-3xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <p className="text-white_smoke/50 mb-2">
          {formatDate(post.date)} · by{" "}
          <Link to="/" className="underline hover:text-white_smoke">
            Nathan Alspaugh
          </Link>
        </p>
        <h1 className="font-extrabold text-4xl md:text-6xl mb-4">{post.title}</h1>
        <p className="text-lg md:text-xl text-white_smoke/70 mb-6">{post.summary}</p>
        {post.repo && (
          <a
            href={post.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-10 text-argentinian_blue underline"
          >
            source on github
          </a>
        )}
        <Markdown
          components={{
            h2: ({ children }) => (
              <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4">
                {children}
                <span className="block h-1 bg-argentinian_blue w-16 mt-2"></span>
              </h2>
            ),
            p: ({ children }) => (
              <p className="text-base md:text-lg mb-4 leading-relaxed">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mb-4 space-y-1 text-base md:text-lg">{children}</ul>
            ),
            a: ({ href, children }) => {
              const internal = href?.startsWith("/");
              return internal ? (
                <Link to={href!} className="text-argentinian_blue underline">
                  {children}
                </Link>
              ) : (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-argentinian_blue underline">
                  {children}
                </a>
              );
            },
            img: ({ src, alt }) => (
              <figure className="my-8">
                <img src={src} alt={alt || ""} loading="lazy" decoding="async" className="w-full rounded-lg" />
                {alt && <figcaption className="text-sm text-white_smoke/50 mt-2 text-center">{alt}</figcaption>}
              </figure>
            ),
            strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
          }}
        >
          {post.body}
        </Markdown>
      </article>
    </div>
  );
}
