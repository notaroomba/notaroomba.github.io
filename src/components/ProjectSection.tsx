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
      name: "Keybytes",
      url: "https://github.com/NotARoomba/keybytes",
      description:
        "A truly modular keyboard with rearrangeable keys, magnetic cases and Bluetooth! Every key is its own 1u PCB with a CH32V003 RISC-V microcontroller and pogo pins on all 4 sides, all talking to an STM32WB55 main board with USB-C and LiPo charging.",
      githubUrl: "https://github.com/NotARoomba/keybytes",
      imageSrc: "/images/keybytes.jpg",
    },
    {
      name: "Ledify",
      url: "https://github.com/NotARoomba/ledify",
      description:
        "A super small addressable LED controller with USB-C PD up to 100W, a switchable 5V/12V output and Bluetooth! Features an ESP32-C6, a 10A buck converter, an IMU, a barometer, an ambient light sensor and an I2S microphone for sound-reactive effects, all on a 4-layer PCB.",
      githubUrl: "https://github.com/NotARoomba/ledify",
      imageSrc: "/images/ledify.jpg",
    },
    {
      name: "Ember",
      url: "https://github.com/NotARoomba/Ember",
      description:
        "A high-performance USB-C powered reflow hotplate with Bluetooth connectivity and intelligent temperature control! Features a custom PCB designed in KiCad with an STM32 microcontroller, a precision-machined heatbed, and a 3D printed case designed in Onshape.",
      githubUrl: "https://github.com/NotARoomba/Ember",
      imageSrc: "/images/ember.jpg",
    },
    {
      name: "Cyberboard",
      url: "https://github.com/NotARoomba/Cyberboard",
      description:
        "A Cyberpunk-themed Raspberry Pi Pico-sized STM32 development board with Bluetooth and battery support! It features an STM32WB55, BQ24074 battery charger, USB-C port, and SWD programming/debugging interface. Perfect for low-power and wireless applications. V2 comes with an IMU and a barometer for even more project possibilities!",
      githubUrl: "https://github.com/NotARoomba/Cyberboard",
      imageSrc: "/images/cyberboard.jpg",
    },
    {
      name: "Trace",
      url: "https://github.com/NotARoomba/Trace",
      description:
        "A comprehensive 310mm x 35mm PCB ruler with imperial and metric measurements, AWG gauge for wire sizing, trace thickness reference, protractor with 5° and 10° angle markings, common component footprints (resistors, capacitors, inductors, diodes, ICs), MOSFET channel type reference, useful conversions on the back, and an NFC tag for storing owner info and formulas.",
      githubUrl: "https://github.com/NotARoomba/Trace",
      imageSrc: "/images/trace.jpg",
    },
    {
      name: "Simple Flight Controller",
      url: "/simpleflightcontroller",
      description:
        "A comprehensive guide on building a flight controller from scratch for rockets, made for Hack Club's Blueprint program! Features an STM32F7 microcontroller, IMU, barometer, dual servo outputs for TVC/fin control, 2-cell LiPo charging, and microSD storage.",
      githubUrl: "https://github.com/NotARoomba/simpleflightcontroller",
      imageSrc: "/images/sfc.png",
    },
    {
      name: "Athena",
      url: "https://github.com/NotARoomba/Athena",
      description:
        "Athena is a high-performance flight computer designed for advanced rocketry applications. The board features a sophisticated 6-layer PCB design with dedicated power planes and optimized signal routing.",
      githubUrl: "https://github.com/NotARoomba/Athena",
      imageSrc: "/images/athena.jpg",
    },
    {
      name: "Cybercard",
      url: "https://github.com/NotARoomba/Cybercard",
      description:
        "A Cyberpunk-themed NFC hacker card: preem hardware, neon-trimmed, pocket-sized. Load custom payloads, skitter past access controls, and flash tricks for chooms on the wire. Slick, modular, and dangerously pretty.",
      githubUrl: "https://github.com/NotARoomba/Cybercard",
      imageSrc: "/images/cybercard.jpg",
    },
    {
      name: "Linea",
      url: "https://github.com/NotARoomba/Linea",
      description:
        "Project files for a custom EMR tablet from scratch. Inspired by Project Patchouli. Features a custom PCB with a STM32WB55 microcontroller, LiPo battery support, and a large (170x110mm) drawing area.",
      githubUrl: "https://github.com/NotARoomba/Linea",
      imageSrc: "/images/linea.jpg",
    },
    {
      name: "Luma",
      url: "https://github.com/NotARoomba/Luma",
      description:
        "A Minecraft inspired lantern with bluetooth! Control the color and brightness of the lantern using a mobile app. Features an ESP32 microcontroller, RGB LED strip, and a 3D printed enclosure.",
      githubUrl: "https://github.com/NotARoomba/Luma",
      imageSrc: "/images/luma.jpg",
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
      name: "RoombaOS",
      url: "",
      description:
        "A test operating system to learn Assembly and low-level C. Planned features include porting Asteroids and WordleCLI, FAT filesystem, and more commands. You can try out RoombaOS by downloading the binary from the releases or look at the code to compile.",
      githubUrl: "https://github.com/NotARoomba/RoombaOS",
      imageSrc: "/images/roomba.png",
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
