import Image from "next/image";
import { motion } from "framer-motion";
const Vinyl = ({ now }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 475.46 479.23"
    className="w-full h-full"
  >
    <path
      d="M9.23 479.23V53.67A44.44 44.44 0 0 1 53.67 9.23h368.12a44.44 44.44 0 0 1 44.44 44.44v425.56"
      fill="#f5f5f5"
      stroke="#435058"
      strokeMiterlimit={10}
      strokeWidth={18.46}
    />

    <defs>
      <pattern
        id="img1"
        patternUnits="userSpaceOnUse"
        width="100%"
        height="100%"
      >
        <image href="vinile.png" x="61" y="35.23" width="354" height="354" />
      </pattern>
    </defs>

    <motion.g
      animate={now?.songUrl ? { rotate: 360 } : {}}
      transition={{ ease: "linear", duration: 12, repeat: Infinity }}
    >
      <rect x="61.23" y="35.23" width="354" height="354" fill="url(#img1)" />
    </motion.g>
    <circle cx={237.73} cy={212.73} r={9.5} fill="#bfbfbf" />
    <rect x="18.23" y="412.23" width="439" height="67" fill="#BFBFBF"></rect>
  </svg>
);
export default Vinyl;
