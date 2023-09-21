"use client";
import FaceIllustration from "@/components/FaceIllustration";
import Vinyl from "@/components/Vinyl";
import { fetcher } from "@/services/fetcher";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import useSWR from "swr";
import { useEffect, useRef, useState } from "react";
import { Textfit } from "react-textfit";
export default function Home() {
  const { theme, setTheme } = useTheme();

  const controls = useAnimation();

  /*const { data: playingData } = useSWR<NowPlayingProps>(
    "/api/now-playing",
    fetcher
  );*/
  let playingData;

  const handlePull = () => {
    setTheme(theme === "light" ? "dark" : "light");
    /*controls.start({
              opacity: 1,
              y: [0, -30, 0],
              transition: { type: "spring", y: { stiffness: 50, damping: 20, restDelta: 0.001 } },
          });*/
  };

  const handleOpenSongUrl = (url?: string) => {
    url && window.open(url, "_blank");
  };

  useEffect(() => {
    // Avvia l'animazione di entrata automaticamente quando la pagina viene aperta
    controls.start({ y: "0%", transition: { duration: 0.5, delay: 0.5 } });
    setInterval(() => {
      controls.start({
        y: [0, -15, 30, -30, 0],
        transition: {
          type: "spring",
          y: { stiffness: 100, damping: 20, restDelta: 0.001, duration: 0.9 },
        },
      });
    }, 10000);
  }, []);

  const greetings = [
    "வணக்கம்!", // Greco
    "ciao!", // Italiano
    "hello!", // Inglese
    "¡hola!", // Spagnolo
    "salut!", // Francese
    "hallo!", // Tedesco
    "hallo!", // Olandese
    "olá!", // Portoghese
    "hej!", // Svedese
    "hei!", // Norvegese
    "hej!", // Danese
    "hei!", // Finlandese
    "hæ!", // Islandese
    "γειά σας!", // Greco
    "merhaba!", // Turco
    "привет!", // Russo
    "مرحبًا!", // Arabo
    "שלום!", // Ebraico
    "こんにちは！", // Giapponese
    "你好！", // Cinese
    "안녕하세요!", // Coreano
    "xin chào!", // Vietnamita
    "สวัสดี!", // Thailandese
    "नमस्ते!", // Hindi
    "হ্যালো!", // Bengali
    "ہیلو!", // Urdu
    "ਹੈਲੋ!", // Punjabi
    "હાય!", // Gujarati
    "नमस्कार!", // Marathi
    "வணக்கம்!", // Tamil
    "హలో!", // Telugu
    "ಹಲೋ!", // Kannada
    "ഹലോ!", // Malayalam
    "හෙලෝ!", // Sinhala
    "kamusta!", // Filippino
    "halo!", // Indonesiano
    "hello!", // Malese
    "xin chào!", // Vietnamita
    "kamusta!", // Tagalog
    "aloha!", // Hawaiano
    "kia ora!", // Maori
    "jambo!", // Swahili
    "bawo ni!", // Yoruba
    "sawubona!", // Zulu
    "saluton!", // Esperanto
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentGreetingIndex === greetings.length - 1
          ? 0
          : currentGreetingIndex + 1;
      setCurrentGreetingIndex(nextIndex);
    }, 8000); // Cambia saluto ogni 3 secondi (3000 millisecondi)

    return () => {
      clearInterval(interval); // Pulisci l'intervallo quando il componente viene smontato
    };
  }, [currentGreetingIndex]);

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [fontSize, setFontSize] = useState(16); // Dimensione del font iniziale
  const containerRef = useRef();

  // Calcola la dimensione del container
  const updateContainerSize = () => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      setContainerSize({ width, height });
    }
  };

  useEffect(() => {
    // Aggiorna la dimensione del container quando la finestra viene ridimensionata
    window.addEventListener("resize", updateContainerSize);
    updateContainerSize();

    // Calcola la dimensione del font in base alla dimensione del container
    const minDimension = Math.min(containerSize.width, containerSize.height);
    const newFontSize = Math.min(
      minDimension / 0.5,
      containerSize.width / greetings[currentGreetingIndex].length,
      containerSize.height / 0.5
    ); // Modifica il valore per regolare la scala del font
    setFontSize(newFontSize);

    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, [containerSize, currentGreetingIndex]);

  return (
    <div className="w-full h-[100dvh]">
      <div className="flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:h-1/2 ">
          <div className="flex aspect-square bg-[#84B1CB] dark:bg-[#698ba0] rounded-3xl relative">
            <div className="absolute w-full z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 538 540"
                className="w-full h-full  rounded-3xl "
              >
                <path
                  className="fill-transparent dark:fill-[#F5F5F5]"
                  d="M538 542L0 542 229.91 0 330.09 0 538 542z"
                  opacity="0.25"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-end w-full space-y-2">
              <div className="overflow-hidden h-auto px-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    className=" will-change-transform text-center "
                    key={currentGreetingIndex}
                    initial={{ y: "-140%", scaleY: 2 }}
                    animate={{ y: "0%", scaleY: 1.3 }}
                    exit={{ y: "110%" }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                    }}
                  >
                    <motion.span
                      animate={{
                        transition: {},
                      }}
                      className="font-bold text-[#def4ff] uppercase leading-none "
                    >
                      <Textfit mode="single" forceSingleModeWidth={true} max={300}>
                        {greetings[currentGreetingIndex]}
                      </Textfit>
                    </motion.span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="overflow-hidden px-10 ">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{
                    y: "0%",
                    transition: { type: "linear", delay: 0.8 },
                  }}
                >
                  <FaceIllustration />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex aspect-auto w-full bg-[#84B1CB] dark:bg-[#698ba0] rounded-3xl">
            <div className="flex w-2/6 md:w-1/6 justify-center">
              <svg
                className="
              w-full h-full rotate-90 origin-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 182.37 356.37"
              >
                <rect
                  x="6"
                  y="4.19"
                  width="158"
                  height="348"
                  rx="15.39"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="8.37"
                />
                <rect
                  x="4"
                  y="4.19"
                  width="144"
                  height="348"
                  rx="14.69"
                  fill="#fff"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="7.99"
                />
                <path
                  d="M104.64,56.69H59.86A11.6,11.6,0,0,0,48.25,68.3V273.08a11.61,11.61,0,0,0,11.61,11.61h44.78a11.61,11.61,0,0,0,11.61-11.61V68.3A11.61,11.61,0,0,0,104.64,56.69Z"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="9.05"
                />
                <motion.g
                  className="outline-none cursor-grab"
                  whileHover={theme === "light" ? {} : { x: 2, skewX: 5 }}
                  whileTap={theme === "light" ? {} : { x: 3 }}
                  onClick={() => setTheme("light")}
                  animate={
                    theme === "light"
                      ? { x: 7, skewX: 0, fill: "#fff" }
                      : { x: 0, skewX: 7, fill: "#AFAFAF" }
                  }
                >
                  <path
                    d="M47.36,56.69H92.14A11.61,11.61,0,0,1,103.75,68.3V170.69a0,0,0,0,1,0,0h-68a0,0,0,0,1,0,0V68.3A11.61,11.61,0,0,1,47.36,56.69Z"
                    fill="#fff"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="9"
                  />
                  <line
                    x1="69.25"
                    y1="97.19"
                    x2="69.54"
                    y2="129"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="6"
                  />
                </motion.g>
                <motion.g
                  className="outline-none cursor-grab"
                  whileHover={theme === "light" ? { x: 2, skewX: -5 } : {}}
                  whileTap={theme === "light" ? { x: 3 } : {}}
                  onClick={() => setTheme("dark")}
                  animate={
                    theme === "light"
                      ? { x: 0, skewX: -7, fill: "#AFAFAF" }
                      : { x: 7, skewX: 0, fill: "#fff" }
                  }
                >
                  <path
                    d="M35.75,170.69h68a0,0,0,0,1,0,0V273.08a11.61,11.61,0,0,1-11.61,11.61H47.36a11.61,11.61,0,0,1-11.61-11.61V170.69A0,0,0,0,1,35.75,170.69Z"
                    fill="#fff"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="9"
                  />
                  <circle
                    cx="68.73"
                    cy="227.85"
                    r="13.52"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="5"
                  />
                </motion.g>
              </svg>
            </div>
          </div>
          <div className="flex aspect-square bg-[#84B1CB] dark:bg-[#698ba0] rounded-3xl">
            <div className="mt-auto px-10 w-full overflow-hidden relative">
              <motion.div
                initial={{ y: "100%" }}
                animate={{
                  y: "0%",
                  transition: { type: "linear", delay: 0.8 },
                }}
              >
                <Vinyl now={playingData} />
                <div className="absolute bottom-0 w-full h-[67] px-[16px]">
                  <div className="aspect-square max-h-full relative">
                    <Image
                      className="rounded-sm inline-block"
                      unoptimized
                      alt={playingData?.album}
                      src={playingData?.albumImageUrl}
                      layout="fill"
                      fill={true}
                    />
                  </div>

                  <div className="inline-block">
                    <h1>meme</h1>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-1/2"></div>
      </div>
    </div>
  );
}
