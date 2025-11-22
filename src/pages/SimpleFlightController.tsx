import Markdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import guideContent from "../SimpleFlightControllerGuide.md?raw";
import { useState } from "react";

export default function SimpleFlightController() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Floating Home Button */}
      <a
        href="/"
        className="fixed left-4 top-4 md:left-8 md:top-8 text-xl md:text-2xl font-semibold group cursor-pointer z-50 duration-300 transition-all text-white/70 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft size={20} className="md:w-6 md:h-6" />
        home
        <span className="block transition-all duration-500 h-1 bg-argentinian_blue max-w-0 group-hover:max-w-full"></span>
      </a>

      {/* Centered Markdown Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 font-[Inter]">
        <Markdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-white pb-2">
                {children}
                <span className="block h-1 bg-argentinian_blue w-full mt-2"></span>
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-10 text-white pb-2">
                {children}
                <span className="block h-1 bg-argentinian_blue w-full mt-2"></span>
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 mt-8 text-white pb-1">
                {children}
                <span className="block h-1 bg-argentinian_blue w-full mt-1"></span>
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-base md:text-lg mb-4 leading-relaxed text-white">
                {children}
              </p>
            ),
            code: ({ children }) => (
              <code className="bg-argentinian_blue/20 text-argentinian_blue px-2 py-1 rounded font-mono text-sm">
                {children}
              </code>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4 space-y-2 text-white">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="text-base md:text-lg leading-relaxed">
                {children}
              </li>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-argentinian_blue hover:text-argentinian_blue/80 underline transition-colors"
              >
                {children}
              </a>
            ),
            img: ({ src, alt }) => (
              <LazyImage src={src || ""} alt={alt || ""} />
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-white">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-white">{children}</em>
            ),
            hr: () => <hr className="my-12 border-0 h-1 bg-argentinian_blue" />,
          }}
        >
          {guideContent}
        </Markdown>
      </div>
      <footer className="text-center w-full text-neutral-500 text-sm p-4 absolute bottom-0 left-1/2 -translate-x-1/2">
        &copy; 2025 Nathan Alspaugh
      </footer>
    </div>
  );
}

// Lazy loading image component with loading states
function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-6">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800/50 rounded-lg animate-pulse" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Failed to load image</p>
        </div>
      )}

      {/* Actual image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`w-full rounded-lg shadow-lg transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
}
