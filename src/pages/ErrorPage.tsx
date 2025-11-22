import { ArrowLeft } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative flex items-center justify-center">
      {/* Floating Home Button */}
      <a
        href="/"
        className="fixed left-4 top-4 md:left-8 md:top-8 text-xl md:text-2xl font-semibold group cursor-pointer z-50 duration-300 transition-all text-white/70 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft size={20} className="md:w-6 md:h-6" />
        home
        <span className="block transition-all duration-500 h-1 bg-argentinian_blue max-w-0 group-hover:max-w-full"></span>
      </a>

      {/* Error Content */}
      <div className="text-center px-4">
        <h1 className="text-9xl md:text-[12rem] font-extrabold text-white/10 mb-4">
          404
        </h1>
        <div className="relative -mt-32 md:-mt-40">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            page not found
          </h2>
          <span className="block h-1 bg-argentinian_blue w-32 mx-auto mb-6"></span>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-md mx-auto">
            looks like you've wandered into uncharted territory. the page you're
            looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-argentinian_blue hover:bg-argentinian_blue/80 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            go back home
          </a>
        </div>
      </div>
    </div>
  );
}
