"use client"
import Corda from "@/components/Corda";
import FaceIllustration from "@/components/FaceIllustration";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
export default function NewPage() {
    const { theme, setTheme } = useTheme()
    const useInterval = (callback, delay) => {
        // Creating a ref 
        const savedCallback = useRef();

        // To remember the latest callback .
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // combining the setInterval and 
        //clearInterval methods based on delay.
        useEffect(() => {
            function func() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(func, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }
    let date = new Date();
    const [mm, setMinutes] = useState(date.getHours() / 12 * 360);
    const [hh, setHours] = useState(date.getMinutes() / 60 * 360);
    const [ss, setSeconds] = useState(date.getSeconds() / 60 * 360);
    useInterval(() => {
        let date = new Date();
        let hours = date.getHours() / 12 * 360;
        let minutes = date.getMinutes() / 60 * 360;
        let seconds = date.getSeconds() / 60 * 360;
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }, 1000)

    const controls = useAnimation();

    const handlePull = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        controls.start({
            opacity: 1,
            y: [0, -30, 0],
            transition: { type: "spring", y: { stiffness: 50, damping: 20, restDelta: 0.001 } },
        });
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
            <div>
                <div className=" bg-[#F5F5F5] dark:bg-slate-900 w-full">
                    <div className="flex flex-col h-full">
                        <div className="sticky top-0 flex h-[50vh] bg-[#84B1CB] dark:bg-[#496270] overflow-hidden w-full">
                            <motion.div initial={{ y: "100%" }} animate={{ y: "0%", transition: { type: "linear", delay: 0.8 } }} className="mt-auto mx-auto max-w-[15rem] z-[1]">
                                <FaceIllustration />
                            </motion.div>
                            <div className="absolute right-10 -top-5 w-[7%]">
                                <motion.svg onClick={handlePull} animate={controls} initial={{ y: "-100%" }} xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 103 781.5">
                                    <path
                                    className="dark:stroke-white"
                                        fill="none"
                                        stroke="#435058"
                                        strokeMiterlimit="10"
                                        strokeWidth="33"
                                        d="M50.5 0L50.5 733"
                                    ></path>
                                    <circle cx="51.5" cy="730" r="51.5" fill="#435058"></circle>
                                </motion.svg>
                            </div>
                            <div className="absolute left-0 top-0 z-[0] w-1/2 p-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="flex w-full h-full" viewBox="0 0 273 278">
                                    <circle cx="136.5" cy="140.17" r="122.89" fill="#e5e5e5"></circle>
                                    <path
                                        fill="#435058"
                                        d="M136.5 271.06c-72.17 0-130.89-58.72-130.89-130.89S64.33 9.28 136.5 9.28 267.39 68 267.39 140.17 208.67 271.06 136.5 271.06zm0-245.78a114.89 114.89 0 10114.89 114.89A115 115 0 00136.5 25.28z"
                                    ></path>
                                    <path
                                        style={{ transform: `rotateZ(${hh + mm / 12}deg)`, transformOrigin: "50% 50%" }}
                                        fill="none"
                                        stroke="#435058"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="5"
                                        d="M136.71 45.5L136.71 140.5"
                                    ></path>
                                    <path
                                        style={{ transform: `rotateZ(${mm}deg)`, transformOrigin: "50% 50%" }}
                                        fill="none"
                                        stroke="#435058"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="4"
                                        d="M136.71 70L136.71 139"
                                    ></path>
                                    <rect
                                        width="9"
                                        height="44.43"
                                        x="132"
                                        y="12.78"
                                        fill="#435058"
                                        rx="4.5"
                                    ></rect>
                                    <rect
                                        width="9"
                                        height="44.43"
                                        x="132"
                                        y="223.13"
                                        fill="#435058"
                                        rx="4.5"
                                    ></rect>
                                    <rect
                                        width="26.53"
                                        height="9"
                                        x="67.83"
                                        y="234.66"
                                        fill="#435058"
                                        rx="4.5"
                                        transform="rotate(-59.54 81.087 239.147)"
                                    ></rect>
                                    <rect
                                        width="9"
                                        height="26.53"
                                        x="190.39"
                                        y="225.89"
                                        fill="#435058"
                                        rx="4.5"
                                        transform="rotate(-30.47 194.866 239.135)"
                                    ></rect>
                                    <rect
                                        width="25.31"
                                        height="9"
                                        x="25.6"
                                        y="193.15"
                                        fill="#435058"
                                        rx="4.5"
                                        transform="rotate(-30 38.26 197.652)"
                                    ></rect>
                                    <rect
                                        width="9"
                                        height="25.31"
                                        x="231.08"
                                        y="185"
                                        fill="#435058"
                                        rx="4.5"
                                        transform="rotate(-60 235.577 197.648)"
                                    ></rect>
                                    <rect
                                        width="9"
                                        height="25.31"
                                        x="34.61"
                                        y="72.14"
                                        fill="#435058"
                                        rx="4.5"
                                        transform="rotate(-60 39.117 84.788)"
                                    ></rect>
                                    <rect
                                        width="25.31"
                                        height="9"
                                        x="223.79"
                                        y="80.29"
                                        fill="#435058"
                                        rx="4.5"
                                        transform="rotate(-30 236.44 84.794)"
                                    ></rect>
                                    <circle
                                        cx="136.5"
                                        cy="139"
                                        r="4.17"
                                        fill="none"
                                        stroke="#435058"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="13"
                                    ></circle>
                                    <path
                                        fill="#435058"
                                        d="M81.49 52.32l-11.17-19 7.76-4.56 11.17 19a4.5 4.5 0 01-1.6 6.16 4.49 4.49 0 01-6.16-1.6z"
                                    ></path>
                                    <rect
                                        width="26.53"
                                        height="9"
                                        x="181.45"
                                        y="37.99"
                                        fill="#435058"
                                        rx="4.5"
                                        transform="rotate(-59.3 195.409 42.303)"
                                    ></rect>
                                    <rect
                                        width="44.43"
                                        height="9"
                                        x="220.74"
                                        y="134.78"
                                        fill="#435058"
                                        rx="4.5"
                                    ></rect>
                                    <rect
                                        width="44.43"
                                        height="9"
                                        x="10.39"
                                        y="134.78"
                                        fill="#435058"
                                        rx="4.5"
                                    ></rect>
                                    <path
                                        style={{ transform: `rotateZ(${ss}deg)`, transformOrigin: "50% 50%" }}
                                        fill="none"
                                        stroke="#435058"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="3"
                                        d="M136.33 139.5L137.08 35"
                                    ></path>
                                </svg>
                            </div>

                        </div>
                        <div className="h-screen  ">
                            <div className="sticky top-0 w-full h-full bg-[#F5F5F5] dark:bg-slate-700 border-t-2 border-gray-400">
                                <div className="p-4 text-[#435058]">
                                    <h1 className="font-bold text-3xl">Welcome.</h1>
                                    <p>
                                        First of all, welcome in my site! :) I am giulio, a student developer of 19 years old from Rome, Italy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                    </p>


                                </div>
                                <div className="p-4 text-[#435058]">
                                    <h2 className="font-bold text-xl">
                                        Connect
                                    </h2>
                                    {socials.map((x, i) => (
                                        <Link
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href={x.url}
                                            className="inline-block cursor-pointer rounded-md text-center hover:text-opacity-70 transition-colors text-[#435058] uppercase underline font-bold">
                                            {x.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const socials = [
    {
        name: "github",
        url: ""
    },
    {
        name: "linkedin",
        url: ""
    },
    {
        name: "instagram",
        url: "https://instagram.com/giwlio"
    },
]