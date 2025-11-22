import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  url: string;
  description: string;
  githubUrl?: string;
  imageSrc?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      name: "Simple Flight Controller",
      url: "/simpleflightcontroller",
      description:
        "A comprehensive guide on building a flight controller from scratch for rockets!",
      githubUrl: "https://github.com/NotARoomba/simpleflightcontroller",
      imageSrc: "/images/sfc.png",
    },
    {
      name: "Athena",
      url: "https://github.com/NotARoomba/Athena",
      description:
        "Athena is a high-performance flight computer designed for advanced rocketry applications. The board features a sophisticated 6-layer PCB design with dedicated power planes and optimized signal routing.",
      githubUrl: "https://github.com/NotARoomba/Athena",
      imageSrc: "/images/athena.png",
    },
    {
      name: "Cyberboard",
      url: "https://github.com/NotARoomba/Cyberboard",
      description:
        "A Cyberpunk-themed Raspberry Pi Pico-sized STM32 development board with Bluetooth and battery support! It features an STM32WB55, BQ24074 battery charger, USB-C port, and SWD programming/debugging interface. Perfect for low-power and wireless applications.",
      githubUrl: "https://github.com/NotARoomba/Cyberboard",
      imageSrc: "/images/cyberboard.png",
    },
    {
      name: "Cybercard",
      url: "https://github.com/NotARoomba/Cybercard",
      description:
        "A Cyberpunk-themed NFC hacker card: preem hardware, neon-trimmed, pocket-sized. Load custom payloads, skitter past access controls, and flash tricks for chooms on the wire. Slick, modular, and dangerously pretty.",
      githubUrl: "https://github.com/NotARoomba/Cybercard",
      imageSrc: "/images/cybercard.png",
    },
    {
      name: "Linea",
      url: "https://github.com/NotARoomba/Linea",
      description:
        "Project files for a custom EMR tablet from scratch. Inspired by Project Patchouli. Features a custom PCB with a STM32WB55 microcontroller, LiPo battery support, and a large (170x110mm) drawing area.",
      githubUrl: "https://github.com/NotARoomba/Linea",
      imageSrc: "/images/linea.png",
    },
    {
      name: "Luma",
      url: "https://github.com/NotARoomba/Luma",
      description:
        "A Minecraft inspired lantern with bluetooth! Control the color and brightness of the lantern using a mobile app. Features an ESP32 microcontroller, RGB LED strip, and a 3D printed enclosure.",
      githubUrl: "https://github.com/NotARoomba/Luma",
      imageSrc: "/images/luma.png",
    },
    {
      name: "Smooth Talking",
      url: "https://smoothtalking.notaroomba.dev",
      description:
        "An AI-Powered Dinosaur Debate Game. Debate with AI dinosaurs to earn coins. Each dinosaur has unique personalities, likes, and dislikes. Earn coins by triggering conversation rules while avoiding topics that might end the game!",
      githubUrl: "https://github.com/NotARoomba/SmoothTalking",
      imageSrc: "/images/smoothtalking.png",
    },
    {
      name: "Mangrov",
      url: "https://mangrov.notaroomba.dev",
      description:
        "Mangrov is a sustainable shopping platform that connects eco-conscious consumers with personalized, AI-powered product recommendations. Built with React, TypeScript, and Firebase, it offers features like community trading, real-time messaging, interactive product cards, and dark mode.",
      githubUrl: "https://github.com/NotARoomba/Mangrov",
      imageSrc: "/images/mangrov.png",
    },
    {
      name: "Niveles De Niveles",
      url: "https://nivelesdeniveles.org",
      description:
        "An early warning application that mitigates the consequences of natural disasters. This project made it to the finals of the XVII Concurso Nacional de Programación in Colombia. It is made with React Native and uses WebSockets to provide aid to people in disaster-prone areas. The app is free and published on the App Store and Google Play Store.",
      githubUrl: "https://github.com/NotARoomba/NivelesDeNiveles",
      imageSrc: "/images/niveles.png",
    },
    {
      name: "SupDoc",
      url: "https://supdoc.org",
      description:
        "SupDoc is a social media platform designed specifically for healthcare professionals. It provides a secure and collaborative environment for doctors to share knowledge, discuss cases, and stay updated with the latest medical advancements. Built with modern web technologies, SupDoc aims to streamline communication and foster professional growth in the medical community.",
      githubUrl: "https://github.com/NotARoomba/SupDoc", // Add GitHub URL if available
      imageSrc: "/images/supdoc.png", // Add image path if available
    },
    {
      name: "Makinator",
      url: "https://makinator.notaroomba.dev",
      description:
        "Makinator is an interactive game designed to test and improve your mathematical skills. With a variety of challenges ranging from basic arithmetic to advanced problem-solving, Makinator provides a fun and engaging way to sharpen your math abilities. Perfect for students, educators, and math enthusiasts alike.",
      githubUrl: "https://github.com/NotARoomba/Makinator", // Add GitHub URL if available
      imageSrc: "/images/makinator.png", // Add image path if available
    },
    {
      name: "Velox",
      url: "https://velox.notaroomba.dev",
      description:
        "Velox is an app designed to help improve your mental math skills through fun and engaging games. Built with Expo, Supabase, and TypeScript, it offers a variety of features including multiplayer mode, a global leaderboard, support for 8 languages, and dark/light mode. Whether you're a math enthusiast or just looking to sharpen your skills, Makinator provides a challenging and enjoyable experience.",
      githubUrl: "https://github.com/NotARoomba/Velox", // Add GitHub URL if available
      imageSrc: "/images/velox.png", // Add image path if available
    },
    {
      name: "Talos",
      url: "https://talos.notaroomba.dev",
      description:
        "Talos is an advanced flight monitoring system for model rockets, equipped with real-time telemetry and data logging capabilities. Designed for hobbyists and engineers, Talos provides detailed insights into flight performance, including altitude, velocity, and trajectory. Whether you're launching your first rocket or optimizing a high-performance model, Talos has you covered.",
      githubUrl: "https://github.com/NotARoomba/Talos", // Add GitHub URL if available
      imageSrc: "/images/talos.png", // Add image path if available
    },
    {
      name: "Asteroids",
      url: "https://asteroids.notaroomba.dev",
      description:
        "Another asteroids clone out of millions by aspiring developers to join their favorite game company by learning SDL, OpenGL, or any myriad of graphics libraries.",
      githubUrl: "https://github.com/NotARoomba/Asteroids",
      imageSrc: "/images/asteroids.png",
    },
    {
      name: "Gravity Simulator",
      url: "https://gravity.notaroomba.dev",
      description:
        "Originally a gravity simulator made with Python, then ported to C++, and finally reaches the web browser! This simulation is powered by a Rust WebAssembly backend that uses a naive implementation where all the bodies have gravitational force on each other, along with a Barnes-Hut quad-tree implementation.",
      githubUrl: "https://github.com/NotARoomba/Gravity-Simulator",
      imageSrc: "/images/gravity.png",
    },
    {
      name: "Tubb",
      url: "https://top.gg/bot/750123677739122819",
      description:
        "Tubb is a utility bot with a multitude of useful commands as well as a music system for your enjoyment. Commands are straightforward, unlike the complications you have to deal with in other bots. Tubb is still being constantly worked on, so please send any bugs to the GitHub repository. Feature suggestions are welcome.",
      githubUrl: "https://github.com/NotARoomba/TubbBot",
      imageSrc: "/images/tubb.png",
    },
    {
      name: "RoombaOS",
      url: "",
      description:
        "A test operating system to learn Assembly and low-level C. Planned features include porting Asteroids and WordleCLI, FAT filesystem, and more commands. You can try out RoombaOS by downloading the binary from the releases or look at the code to compile.",
      githubUrl: "https://github.com/NotARoomba/RoombaOS",
      imageSrc: "/images/roomba.png",
    },
    {
      name: "Wordle",
      url: "https://wordle.notaroomba.dev",
      description:
        "A special product of desperation, boredom, and the desire to fit in comes this CLI version of the (decently) popular Wordle game. After a few revisions, it now brings my version of Wordle to the web! It has more features and cool CSS wizardry.",
      githubUrl: "https://github.com/NotARoomba/Wordle",
      imageSrc: "/images/wordle.png",
    },
    {
      name: "Chess",
      url: "",
      description:
        "Chess! A game that has been played for centuries now arrives on your terminal! With the power of C++ and 3.5 brain cells comes this fascinating take on the popular game.",
      githubUrl: "https://github.com/NotARoomba/Chess",
      imageSrc: "/images/chess.png",
    },
    {
      name: "Bounce",
      url: "",
      description:
        "A 2-player pong game made with C++ and SDL2. Player 1 controls are Up and Left arrow, and Player 2 controls are Right and Down arrow. Compile it or look at the releases to run.",
      githubUrl: "https://github.com/NotARoomba/Bounce",
      imageSrc: "/images/bounce.png",
    },
  ];

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          url={project.url}
          description={project.description}
          githubUrl={project.githubUrl}
          imageSrc={project.imageSrc}
        />
      ))}
    </motion.div>
  );
}
