"use client"
import FaceIllustration from "@/components/FaceIllustration"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
export default function Pagina() {
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

    const [isOpen, setOpen] = useState(false)
    const toggleOpen = () => setOpen((active) => !active)

    const variants = {
        open: {  y: 0, transition: { type: "linear" } },
        closed: { y: "-100%", transition: { type: "linear" }},
    }

    return (
        <>
            <div className="min-h-[100dvh] bg-repeat bg-cover bg-center bg-[#EBE5DD]" style={{ backgroundImage: "url(/background.svg)" }} >
                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial="closed" exit="closed" animate={isOpen ? "open" : "closed"} variants={variants} className="fixed top-0 right-0 h-[100dvh] w-full md:w-1/2 bg-[#EBE5DD] md:border-l-2 md:border-[#dfdfdf] " >
                            <div className="flex flex-col h-full w-full">
                                <div className="flex w-full rounded-b-2xl bg-[#84B1CB] overflow-hidden h-2/3 relative ">
                                    <motion.div initial={{ y: "100%" }} animate={{ y: "0%", transition: { type: "linear", delay: 0.8 } }} className="mt-auto ml-auto px-3 sm:px-4 sm:pt-4 w-[70%] md:w-[60%] relative z-[2] ">
                                        <FaceIllustration />
                                    </motion.div>
                                    <div className="absolute z-[1] w-[80%] max-[640px]:left-[-35%] left-[-20%] md:w-[50%] m-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470.56 559">
                                            <path
                                                fill="#f5f5f5"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="18"
                                                d="M9 9H235.28V550H9z"
                                            ></path>
                                            <path
                                                fill="#f5f5f5"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="18"
                                                d="M235.28 9H461.56V550H235.28z"
                                            ></path>
                                            <path
                                                fill="#435058"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="23.34"
                                                d="M28.03 446.6L125.61 336.32 206.46 427.07 250.49 346.8 286.28 407.26 327.58 269.95 442.03 447.05"
                                            ></path>
                                            <path
                                                fill="#435058"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="22.36"
                                                d="M19.06 449.58H452.06V544.42H19.06z"
                                            ></path>
                                            <path
                                                fill="#f5f5f5"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="18"
                                                d="M8.56 270L461.56 270"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="absolute right-0 w-[40%] md:w-[30%] m-3">
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
                                <div className="w-full">
                                    <div>
                                        {socials.map((x, i) => (
                                            <Link
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href={x.url}
                                                className="inline-block cursor-pointer rounded-md text-center hover:text-opacity-70 transition-colors text-[#435058] py-2 uppercase underline font-bold">
                                                {x.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <button className="" onClick={toggleOpen}> opne</button>
                                </div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="w-full md:w-1/2">

                    <button className="" onClick={toggleOpen}> opne</button>
                </div>
            </div >
        </>
    )
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