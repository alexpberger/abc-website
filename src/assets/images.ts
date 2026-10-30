import logo from "./abc-logo.png";
import portrait from "./alex-picture.jpg";

export const images = {
  logo: {
    src: logo,
    width: 512,
    height: 512,
  },
  portrait: {
    src: portrait,
    width: 1200,
    height: 1800,
  },
} as const;
