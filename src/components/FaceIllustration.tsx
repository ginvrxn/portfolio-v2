import { AnimatePresence, delay, motion, useAnimationControls } from 'framer-motion';

export default function FaceIllustration({ face }) {
    //M 175 120 Q 130 120 89 120 M 175 120 Q 130 90 89 120 M 363 120 Q 318 120 277 120 M 363 120 Q 318 90 277 120 
    const expression = {
        suspicious: {
            fill: "none",
            eyes: ["M 175 176 Q 130 176 89 176", "M 363 176 Q 318 176 277 176"],
            eyesbrows: ["M 175 120 Q 130 120 89 120", "M 363 120 Q 318 120 277 120"],
            balls: (
                <>
                    <motion.ellipse exit={{ height: 0 }} animate={{ x: [-17, 17] }} transition={{ repeat: Infinity, repeatDelay: 2, repeatType: "mirror" }} initial={{ height: 0 }} cx="318.07" cy="187.56" rx="6.92" ry="10.25" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16" />
                    <motion.ellipse exit={{ height: 0 }} animate={{ x: [-17, 17] }} transition={{ repeat: Infinity, repeatDelay: 2, repeatType: "mirror" }} initial={{ height: 0 }} cx="130.69" cy="187.56" rx="6.49" ry="10.25" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16" />
                </>
            )
        },
        happy: {
            fill: "none",
            eyes: ["M 175 176 Q 130 152 89 176", "M 363 176 Q 318 151 277 176"],
            eyesbrows: ["M 175 120 Q 130 90 89 120", "M 363 120 Q 318 90 277 120"],
            balls: (
                <>
                    <motion.ellipse exit={{ height: 0 }} animate={{ x: [-17, 0, 17] }} transition={{ repeat: Infinity, repeatDelay: 2, repeatType: "mirror" }} initial={{ height: 0 }} cx="318.07" cy="187.56" rx="6.92" ry="10.25" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16" />
                    <motion.ellipse exit={{ strokeWidth: 1 }} animate={{ x: [-17, 0, 17] }} transition={{ repeat: Infinity, repeatDelay: 2, repeatType: "mirror" }} initial={{ height: 0 }} cx="130.69" cy="187.56" rx="6.49" ry="10.25" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16" />
                </>
            )
        },
        sleepy: {
            fill: "#fff",
            eyes: ["M 175 170 Q 130 222 89 170", "M 363 170 Q 318 222 277 170"],
            eyesbrows: ["M 175 120 Q 130 90 89 120", "M 363 120 Q 318 90 277 120"],
            balls: (
                <>
                    <motion.ellipse exit={{ height: 0 }} animate={{ height: "100%" }} initial={{ height: 0 }} cx="318.07" cy="187.56" rx="6.92" ry="10.25" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16" />
                    <motion.ellipse exit={{ strokeWidth: 1 }} animate={{ strokeWidth: "16" }} initial={{ height: 0 }} cx="130.69" cy="187.56" rx="6.49" ry="10.25" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16" />
                </>
            )
        }
    }
    //[-17, 17]
    return (
        <motion.svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 413 389.34">
            <path d="M9.5,389.34V49A39.52,39.52,0,0,1,49,9.5H364A39.49,39.49,0,0,1,403.5,49V389.34" fill="#f5f5f5" stroke="#000" stroke-miterlimit="10" stroke-width="19" />
            <path d="M183.79,243.8c17.74-21.46,25.71-48.81,26.87-76.3.26-6.17.2-12.34-.13-18.5" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="19" />
            <motion.ellipse animate={{ x: [-17, 17] }} transition={{ repeat: Infinity, repeatDelay: 4, repeatType: "mirror", type: "tween" }} cx="306.86" cy="175.9" rx="6.92" ry="10.25" style={{ fill: "none", strokeWidth: 16, stroke: "#000", strokeLinecap: "round", strokeMiterlimit: 10 }} />
            <motion.ellipse animate={{ x: [-17, 17] }} transition={{ repeat: Infinity, repeatDelay: 4, repeatType: "mirror", type: "tween" }} cx="119.48" cy="175.9" rx="6.49" ry="10.25" style={{ fill: "none", strokeWidth: 16, stroke: "#000", strokeLinecap: "round", strokeMiterlimit: 10 }} />
            <path d="M163.79,164.34q-45-24-86,0" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="16" />
            <path d="M351.79,164.34q-45-25-86,0" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="16" />
            <path d="M163.79,108.34q-45-30-86,0" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="16" />
            <path d="M351.79,108.34q-45-30-86,0" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="16" />
            <path d="M168.82,292.14a66.27,66.27,0,0,0,84,0" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" />
        </motion.svg>
    )
}