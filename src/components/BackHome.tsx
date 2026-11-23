import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function BackHome({ to = "/", label = "home" }: { to?: string; label?: string }) {
  return (
    <Link
      to={to}
      className="fixed left-4 top-4 md:left-8 md:top-8 text-xl md:text-2xl font-semibold group cursor-pointer z-50 duration-300 transition-all text-white/70 hover:text-white flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1"
    >
      <ArrowLeft size={20} className="md:w-6 md:h-6" />
      {label}
      <span className="block transition-all duration-500 h-1 bg-argentinian_blue max-w-0 group-hover:max-w-full"></span>
    </Link>
  );
}
