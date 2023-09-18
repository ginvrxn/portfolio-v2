import { useEffect, useState } from "react";

const Clock = () => {
  let date = new Date();
  const [time, setTime] = useState({
    seconds: (date.getSeconds() / 60) * 360,
    minutes: (date.getMinutes() / 60) * 360,
    hours: (date.getHours() / 12) * 360,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      setTime({
        seconds: (date.getSeconds() / 60) * 360,
        minutes: (date.getMinutes() / 60) * 360,
        hours: (date.getHours() / 12) * 360,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="flex w-full h-full"
      viewBox="0 0 273 278"
    >
      <circle cx="136.5" cy="140.17" r="122.89" fill="#e5e5e5"></circle>
      <path
        fill="#435058"
        d="M136.5 271.06c-72.17 0-130.89-58.72-130.89-130.89S64.33 9.28 136.5 9.28 267.39 68 267.39 140.17 208.67 271.06 136.5 271.06zm0-245.78a114.89 114.89 0 10114.89 114.89A115 115 0 00136.5 25.28z"
      ></path>
      <path
        style={{
          transform: `rotateZ(${time.hours + time.minutes / 12}deg)`,
          transformOrigin: "50% 50%",
        }}
        fill="none"
        stroke="#435058"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M136.71 45.5L136.71 140.5"
      ></path>
      <path
        style={{
          transform: `rotateZ(${time.minutes}deg)`,
          transformOrigin: "50% 50%",
        }}
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
        style={{
          transform: `rotateZ(${time.seconds}deg)`,
          transformOrigin: "50% 50%",
        }}
        fill="none"
        stroke="#435058"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M136.33 139.5L137.08 35"
      ></path>
    </svg>
  );
};
export default Clock;
