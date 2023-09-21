"use client";
import Corda from "@/components/Corda";
import FaceIllustration from "@/components/FaceIllustration";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import Clock from "@/components/Clock";
export default function NewPage() {
  const { theme, setTheme } = useTheme();

  const controls = useAnimation();

  const handlePull = () => {
    setTheme(theme === "light" ? "dark" : "light");
    /*controls.start({
            opacity: 1,
            y: [0, -30, 0],
            transition: { type: "spring", y: { stiffness: 50, damping: 20, restDelta: 0.001 } },
        });*/
  };

  useEffect(() => {
    // Avvia l'animazione di entrata automaticamente quando la pagina viene aperta
    controls.start({ y: "0%", transition: { duration: 0.5, delay: 0.5 } });
  }, []);

  return (
    <>
      {/*<div className="snap-mandatory snap-y h-[100dvh]">
            {Array.from({ length: 10 }, (_, i) => i).map((i) => (
                <div className="min-h-[100dvh] snap-center snap-always w-full">
                    <h1 className="text-2xl font-bold">New Page</h1>
                </div>
            ))}
            <div className="snap-y snap-mandatory h-[100dvh] overflow-y-scroll" >
                <div className="snap-center snap-always bg-teal-200 w-full  h-[100dvh] flex items-center justify-center text-8xl max-w-screen"></div>
                <div className="snap-center snap-always bg-cyan-200 w-full h-[100dvh] flex items-center justify-center text-8xl max-w-screen"></div>
                <div className="snap-center snap-always bg-fuchsia-200 w-full h-[100dvh] flex items-center justify-center text-8xl max-w-screen"></div>
            </div>*/}
      <div className=" bg-[#F5F5F5] dark:bg-[#4F7C95] w-full">
        <div className="flex flex-col xl:flex-row w-full h-full xl:h-screen sticky">
          <div className="sticky top-0 flex h-[53vh] xl:h-2/3 bg-[#84B1CB] dark:bg-[#4F7C95] overflow-hidden w-full xl:w-1/2">
            <motion.div
              initial={{ y: "100%" }}
              animate={{
                y: "0%",
                transition: { type: "linear", delay: 0.8 },
              }}
              className="mt-auto mx-auto max-w-[15rem] xl:max-w-sm xl:w-full z-[1]"
            >
              <FaceIllustration />
            </motion.div>
            <motion.div
              drag="y"
              dragSnapToOrigin
              onDragEnd={handlePull}
              dragElastic={0.34}
              dragConstraints={{ bottom: 25, top: 0 }}
              className="absolute right-4 w-[15%] xl:w-[12%] -top-[125%] xl:-top-[125%] px-3"
            >
              <motion.svg
                animate={controls}
                initial={{ y: "-100%" }}
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                viewBox="0 0 103 2090"
              >
                <path
                  className="dark:stroke-white"
                  fill="none"
                  stroke="#435058"
                  strokeMiterlimit="10"
                  strokeWidth="33"
                  d="M50.5 0L50.5 2000"
                ></path>
                <circle cx="51.5" cy="2030" r="51.5" fill="#435058"></circle>
              </motion.svg>
            </motion.div>
            <div className="absolute left-0 top-0 z-[0] w-1/2 xl:w-[40%] p-5">
              <Clock />
            </div>
          </div>
          <div className="h-[100dvh] xl:w-1/2">
            <div className="sticky top-0 w-full  h-full bg-[#F5F5F5] dark:bg-[#364954] border-t-2 border-gray-400">
              <div className="p-4 text-[#435058] dark:text-[#9AAEBB]">
                <h1 className="font-bold text-6xl xl:text-8xl">Welcome.</h1>
                <p>
                  First of all, welcome in my site! :) I am giulio, a student
                  developer of 19 years old from Rome, Italy Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper
                </p>
              </div>
              <div className="p-4 text-[#435058]">
                <h2 className="font-bold text-xl">Connect</h2>
                <ul className="space-y-2">
                  {socials.map((x, i) => (
                    <Link
                      as="li"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={x.url}
                      className="w-full block cursor-pointer rounded-sm py-2 text-center hover:text-opacity-70 transition-colors text-white uppercase bg-[#435058] font-bold"
                    >
                      {x.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

const socials = [
  {
    name: "github",
    url: "",
  },
  {
    name: "linkedin",
    url: "",
  },
  {
    name: "instagram",
    url: "https://instagram.com/giwlio",
  },
];
