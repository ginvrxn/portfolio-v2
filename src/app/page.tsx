'use client'
import { useInView, useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import House from "@/sections/house"
import cn from "classnames"
import FaceIllustration from "@/components/FaceIllustration"
export default function Testing() {
  const { scrollY } = useScroll()
  const [face, setFaceStatus] = useState<any>({
    status: "happy",
    gadgets: [],
    hand: [],
    animation: "none",
  });

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  function Text({ children, className, motion }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
      <motion.span style={{ translateY: motion }} className={cn(className, "text-white")}>{children}</motion.span>
    )
  }


  return (
    <div>
      <House />
      {Array.from({ length: 3 }).map((_, i) => {
        const containerRef = useRef(null);

        const { scrollYProgress } = useScroll({
          target: containerRef,
          offset: ["start start", "end end"]
        });
        const isInView = useInView(containerRef, { margin: "5000px" });

        const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
        const textValue = useTransform(scrollYProgress, [0, 0.05, 0.5, 0.95, 1], ["100vh", "75vh", "0vh", "-75vh", "-100vh"]);
        const text2Value = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
        const firstValue = useTransform(scrollYProgress, [0, 1], ["0px", "-100vh"]);
        const firstText = useTransform(scrollYProgress, [0, 1], [1, 0]);
        const photvalue = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
        const photovalue = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "100%"]);

        let text;
        switch (i) {
          case 0:
            text = { translateY: firstValue, opacity: firstText }
            break;
          case 1:
            text = { translateY: textValue, opacity: text2Value }
            break;
          case 2:
            text = { translateY: textValue, opacity: text2Value }
            break;
        }

        let move;
        switch (i) {
          case 0:
            move = { translateY: photovalue }
            break;
          case 1:
            move = { translateX: imageValue }
            break;
          case 2:
            move = { translateY: photovalue }
            break;
        }
        return (
          <section ref={containerRef} className="pb-20 bg-[#999fb6]" style={{ opacity: isInView ? 1 : i == i + 1 ? 1 : 0 }}>
            <div className="h-[500vh]">
              <motion.div className="sticky top-0 overflow-hidden min-h-screen max-h-screen flex flex-col justify-center">
                <div className="w-full h-full">
                  <h1 className="text-[6rem] sm:text-[8rem] font-bold flex flex-col leading-none">
                    <motion.span style={text} className={cn("text-[10rem]", "text-white")}>HELLO</motion.span>
                    <motion.span style={text} className={cn("text-white")}>IT'S ME</motion.span>
                    <motion.span style={text} className={cn("text-white")}>GIULIO</motion.span>
                  </h1>

                </div>
                <div className="fixed bottom-0 w-full">

                  <motion.div style={move} className="w-full">
                    <div className="max-w-[15rem] sm:max-w-xl max-[640px]:px-4 ml-auto h-full" >
                      <FaceIllustration face={face} />
                    </div>

                  </motion.div>

                </div>
              </motion.div>
            </div>
          </section>
        )
      })
      }
    </div>
  )
}