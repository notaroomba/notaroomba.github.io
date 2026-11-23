import { useState, useRef, useEffect } from "react";
import { SkipBack, Play, Pause, SkipForward, Volume2 } from "lucide-react";

interface Track {
  title: string;
  url: string;
  youtubeUrl: string;
}

const tracks: Track[] = [
  {
    title: "The End",
    url: "/audio/the_end.mp3",
    youtubeUrl: "https://www.youtube.com/watch?v=D2-FOe33chg",
  },
  {
    title: "Love",
    url: "/audio/love.mp3",
    youtubeUrl: "https://www.youtube.com/watch?v=4zUOSG3I48E",
  },
  {
    title: "Sadness",
    url: "/audio/sadness.mp3",
    youtubeUrl: "https://www.youtube.com/watch?v=3hQ_U2rTep4",
  },
  {
    title: "Death",
    url: "/audio/death.mp3",
    youtubeUrl: "https://www.youtube.com/watch?v=jNkBYSuPgj4",
  },
];

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.2);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && audioRef.current.autoplay) {
      audioRef.current.volume = volume;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [audioRef]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    audioRef.current?.load();
  };

  const previousTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    audioRef.current?.load();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleTrackEnd = () => {
    nextTrack();
  };

  return (
    <div className="fixed bottom-12 right-8 bg-black/80  backdrop-blur-sm p-4 rounded-xl border-4 border-argentinian_blue/80 z-50 shadow-lg w-[200px] animate-fadeIn">
      <audio
        ref={audioRef}
        src={tracks[currentTrackIndex].url}
        onEnded={handleTrackEnd}
        loop={false}
      />

      <div className="text-sm mb-2 overflow-hidden whitespace-nowrap relative group">
        <a
          href={tracks[currentTrackIndex].youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold  hover:text-argentinian_blue transition-all duration-300"
        >
          <div className="relative inline-block group/text">
            <div
              className={`inline-block mb-0.5 ${
                tracks[currentTrackIndex].title.length > 15
                  ? "animate-scrollText"
                  : ""
              } hover:pause`}
            >
              {tracks[currentTrackIndex].title}{" "}
              <span className="text-white font-normal"> - NotARoomba</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-argentinian_blue origin-left transform scale-x-0 transition-transform duration-300 group-hover/text:scale-x-100" />
          </div>
        </a>
      </div>

      <div className="flex items-center justify-between gap-1">
        <button
          onClick={previousTrack}
          className="text-white hover:text-[#028393] transition-all duration-300 opacity-60 hover:opacity-100 p-2 rounded-lg hover:bg-white/5 active:bg-white/10"
        >
          <SkipBack size={20} />
        </button>

        <button
          onClick={togglePlay}
          className="text-white hover:text-[#028393] transition-all duration-300 opacity-60 hover:opacity-100 p-2 rounded-lg hover:bg-white/5 active:bg-white/10"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <button
          onClick={nextTrack}
          className="text-white hover:text-[#028393] transition-all duration-300 opacity-60 hover:opacity-100 p-2 rounded-lg hover:bg-white/5 active:bg-white/10"
        >
          <SkipForward size={20} />
        </button>

        <div className="relative group">
          <button className="text-white hover:text-[#028393] transition-all duration-300 opacity-60 hover:opacity-100 p-2 rounded-lg hover:bg-white/5 active:bg-white/10">
            <Volume2 size={20} />
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 -rotate-90 opacity-0 group-hover:opacity-100 transition-all duration-300
            appearance-none h-1 bg-white/20 rounded-full cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-grab
            [&::-webkit-slider-thumb]:hover:bg-[#028393] [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-300
            [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#028393]/20
            active:cursor-grabbing [&::-webkit-slider-thumb]:active:cursor-grabbing
            [&::-webkit-slider-thumb]:active:scale-95 [&::-webkit-slider-thumb]:hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
