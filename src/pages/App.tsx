import "react";
import SideBar from "../components/SideBar";
import ProjectsSection from "../components/ProjectSection";
import AudioPlayer from "../components/AudioPlayer";
import Gallery from "../components/Gallery";
import { Github, Linkedin, Youtube, Instagram, ArrowUpRight } from "lucide-react";

export default function App() {
  return (
    <div className="flex bg-black text-white_smoke overflow-x-hidden relative">
      <SideBar />
      <div className="flex md:ml-72 ml-0 flex-col w-full mb-4 h-fit">
        <section id="home" className="min-h-screen flex p-4 pb-28 md:pb-4">
          <div className="m-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left">
            <img
              src="/images/nathan-alspaugh-square.jpg"
              alt="Nathan Alspaugh (NotARoomba)"
              width={800}
              height={800}
              fetchPriority="high"
              className="w-1/2 md:w-[22rem] xl:w-[26rem] aspect-square rounded-full object-cover my-4 md:my-auto md:mr-12 shadow-2xl shadow-black ring-1 ring-white/10"
            />
            <div className="flex flex-col my-auto px-3 items-center md:items-start max-w-2xl">
              <p className="text-lg md:text-2xl font-normal text-white_smoke/70">hey there, i&apos;m</p>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight leading-none mt-1">
                NotARoomba
              </h1>
              <p className="mt-6 text-lg md:text-2xl font-normal leading-snug text-white_smoke/90">
                full-stack developer and hardware magician who builds a bit of{" "}
                <span className="relative inline-block">
                  <span className="absolute -left-[2px] top-0 text-[#01204E]">everything</span>
                  <span className="absolute -left-[1px] top-0 text-[#028393]">everything</span>
                  <span className="absolute left-0 top-0 text-[#F6DCAC]">everything</span>
                  <span className="absolute left-[1px] top-0 text-[#FAAA68]">everything</span>
                  <span className="absolute left-[2px] top-0 text-[#F65625]">everything</span>
                  <span className="invisible">everything</span>
                </span>
                .
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen relative px-4 md:px-8 py-8 md:py-16"
        >
          <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-sm p-4 md:p-6 rounded-xl max-w-2xl">
            <h2 className="font-extrabold text-5xl lg:text-8xl mb-4">
              about me
            </h2>
            <p className="font-medium text-base md:text-lg lg:text-xl">
              <a
                href="https://mit.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#ff1423] underline"
              >
                mit '30
              </a>{" "}
              student. previously took a gap year to work @{" "}
              <a
                href="https://hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#ec3750] underline"
              >
                hack club
              </a>
              . before that, i led{" "}
              <a
                href="https://icarusclub.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#f1c40f] underline"
              >
                icarus club
              </a>
              . im into full-stack development, embedded programming, and{" "}
              <span className="font-bold text-argentinian_blue">
                hardware design
              </span>
              . i am an avid{" "}
              <span className="font-bold text-[#f1c40f]">
                musician/composer
              </span>{" "}
              (of the songs at the bottom right) where i play piano, cello and
              drums. in my free time i usually read, listen to music, or create{" "}
              <span
                className="font-bold"
                style={{
                  color: `hsl(${Math.random() * 360}, 80%, 60%)`,
                }}
              >
                silly projects
              </span>
              .
            </p>
          </div>

          <div className="mt-12 px-4 md:px-8">
            <Gallery />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen relative">
          <div className="sticky top-0 pt-8 px-4 md:px-8 z-10 bg-black/30 backdrop-blur-sm mb-10">
            <h2 className="text-5xl lg:text-8xl font-extrabold mb-4">
              projects
            </h2>
          </div>
          <div className="flex flex-col h-full flex-wrap w-full gap-4 md:gap-8 px-4 md:px-8">
            {/* {projects.map((project, index) => (
              <IsometricPage key={index} url={project.url} />
            ))} */}
            <ProjectsSection />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen relative px-4 md:px-8 py-16 w-full flex flex-col justify-center"
        >
          <h2 className="font-extrabold text-5xl lg:text-8xl mb-4">contact</h2>
          <p className="text-lg md:text-xl text-white_smoke/70 mb-10 max-w-xl">
            want to build something, talk hardware, or just say hi? find me here.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {[
              { label: "github", handle: "@notaroomba", href: "https://github.com/notaroomba", Icon: Github },
              { label: "linkedin", handle: "in/notaroomba", href: "https://linkedin.com/in/notaroomba", Icon: Linkedin },
              { label: "youtube", handle: "@notaroomba", href: "https://youtube.com/@notaroomba", Icon: Youtube },
              { label: "instagram", handle: "@notaroomba", href: "https://instagram.com/notaroomba", Icon: Instagram },
            ].map(({ label, handle, href, Icon }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "me noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-argentinian_blue hover:bg-argentinian_blue/10 transition-colors"
                >
                  <Icon size={32} className="shrink-0 group-hover:text-argentinian_blue transition-colors" />
                  <div className="min-w-0">
                    <p className="text-2xl font-bold">{label}</p>
                    <p className="text-white_smoke/60 truncate">{handle}</p>
                  </div>
                  <ArrowUpRight size={20} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </section>
      </div>
      <AudioPlayer />
      <footer className="text-center w-full text-neutral-500 text-sm p-4 absolute bottom-0 left-1/2 -translate-x-1/2">
        &copy; 2025 Nathan Alspaugh
      </footer>
    </div>
  );
}
