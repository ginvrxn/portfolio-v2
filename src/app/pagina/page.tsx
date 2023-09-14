"use client"
import FaceIllustration from "@/components/FaceIllustration"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
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

    return (
        <>
            <div className="h-[100dvh] bg-repeat bg-cover bg-center bg-[#EBE5DD]" style={{ backgroundImage: "url(/background.svg)" }} >
                <div className="h-[100dvh] w-full md:w-1/2 bg-[#EBE5DD] border-r-2 border-[#dfdfdf] ">
                    <div className="flex flex-col h-full w-full sm:px-5 sm:py-6 ">
                        <div className="flex flex-col h-full w-full sm:space-y-3 sm:p-2">
                            <div className="flex flex-col md:flex-row w-full sm:space-x-3">
                                <div className="flex w-full h-full rounded-2xl  bg-[#FFEBCD]">
                                    <div className="mt-auto mx-auto max-[640px]:px-2 w-full h-full">
                                        
                                    </div>
                                </div>
                                <div className="flex rounded-2xl w-full  bg-[#c2ddb3] bg-repeat bg-cover bg-center" style={{ backgroundImage: "url(/background.svg)" }}>
                                    <div className="flex m-auto p-3 sm:p-6 sm:pt-4 w-[30%] h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 193.47 389.83">
                                            <rect
                                                width="185.33"
                                                height="381.69"
                                                x="4.07"
                                                y="4.07"
                                                fill="#F1F2EE"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="12"
                                                rx="21.33"
                                            ></rect>
                                            <path
                                                fill="none"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="12"
                                                d="M64.3 58.5h64.87A16.45 16.45 0 01145.62 75v120H47.85V75A16.45 16.45 0 0164.3 58.5z"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="12"
                                                d="M47.85 194.91h97.77v118.9a17.51 17.51 0 01-17.51 17.51H65.36a17.51 17.51 0 01-17.51-17.51z"
                                            ></path>
                                            <circle
                                                cx="96.74"
                                                cy="263.12"
                                                r="21.33"
                                                fill="none"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="12"
                                            ></circle>
                                            <path
                                                fill="none"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="12"
                                                d="M96.74 98.29L96.74 156.59"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#435058"
                                                strokeMiterlimit="10"
                                                strokeWidth="12"
                                                d="M47.85 201.4h97.77v118.9a17.51 17.51 0 01-17.51 17.51H65.36a17.51 17.51 0 01-17.51-17.51z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row sm:space-x-3 w-full">
                                <div className="w-full rounded-2xl  bg-[#C5A0BB] md:aspect-square bg-repeat bg-cover bg-center"  style={{ backgroundImage: "url(/background.svg)" }}>
                                    <div className="m-auto max-[640px]:w-[35%] max-[640px]:py-12 p-2">
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
                                <div className="flex w-full rounded-2xl  bg-[#84B1CB] overflow-hidden md:aspect-square">
                                    <motion.div initial={{ y: "100%" }} animate={{ y: "0%", transition: { type: "linear" } }} className="mt-auto px-3 pt-32 sm:px-4 sm:pt-4 w-[50%]">
                                        <FaceIllustration />
                                    </motion.div>
                                </div>

                            </div>
                        </div>
                        <div className="flex sm:hidden w-full justify-center border-8 border-[#435058] rounded-xl">
                            <button className="p-3">
                                X
                            </button>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
