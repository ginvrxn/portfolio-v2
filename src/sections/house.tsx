import HouseIllustration from "@/components/Houseillustration";
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react";
import cn from "classnames";
import FaceIllustration from "@/components/FaceIllustration";
export default function House() {
    const [face, setFaceStatus] = useState<any>({
        status: "happy",
        gadgets: [],
        hand: [],
        animation: "none",
    });
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const isInView = useInView(containerRef, { margin: "5000px" });
    const firstValue = useTransform(scrollYProgress, [0, 1], ["0px", "-100vh"]);
    const firstText = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const photvalue = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const scale = useTransform(
        scrollYProgress,
        [0.05, 0.75, 1],
        [1, 10, 25]
    );
    const width = useTransform(
        scrollYProgress,
        [0.1, 0.75, 1],
        ["70%", "100%", "300%"]
    );
    const x = useTransform(
        scrollYProgress,
        [0.1, 0.30, 0.65, 0.80, 1],
        ["0%", "90%", "90%", "400%", "210%"]
    );
    const y = useTransform(
        scrollYProgress,
        [0.25, 1],
        ["-50%", "-200%"]
    );


    return (
        <section ref={containerRef} className="pb-20 bg-[#999fb6]" style={{ opacity: isInView ? 1 : 0 }}>
            <div className="h-[500vh] relative">
                <motion.div className="sticky top-0 overflow-hidden min-h-screen max-h-screen flex flex-col justify-start pt-10">
                    <div className="w-full h-full text-center">
                        <h1 className="text-6xl sm:text-[8rem] font-bold flex flex-col leading-none ">
                            <motion.span style={{ "--index": 1, translateY: firstValue, opacity: firstText }} className={cn("animate-in text-[3rem] sm:text-[10rem]", "text-white")}>WELCOME</motion.span>
                            <motion.span style={{ "--index": 5, translateY: firstValue, opacity: firstText }} className={cn("animate-in text-[3rem] sm:text-[7rem] text-white")}>IN MY WORLD!</motion.span>
                        </h1>
                    </div>
                    <div className="fixed bottom-0 w-full ">
                        <motion.div style={{ scale }} className="mx-auto">
                            <div className="max-w-xs mx-auto px-4 sm:px-0">
                                <HouseIllustration />
                            </div>
                            <div className="h-20 w-full bg-black rounded-t-3xl" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}