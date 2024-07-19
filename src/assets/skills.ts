import NextJsLogo from "./../../public/Nextjs-logo.png";
import ReactLogo from "./../../public/React-logo.png";
import ZustandLogo from "./../../public/Zustand-logo.png";
import TanstackQueryLogo from "./../../public/TanstackQuery-logo.png";
import TypeScriptLogo from "./../../public/Typescript-logo.png";
import ReduxLogo from "./../../public/Redux-logo.png";
import HTMLCSSJSLogo from "./../../public/HTML-CSS-JS-Logo.png";
import TailWindCSSLogo from "./../../public/TailWindCSS-logo.png";
import { StaticImageData } from "next/image";

export const SKILLS: { skillName: string; logo: StaticImageData }[] = [
  { skillName: "Next.js", logo: NextJsLogo },
  { skillName: "React", logo: ReactLogo },
  { skillName: "TypeScript", logo: TypeScriptLogo },
  { skillName: "JavaScript, HTML, CSS", logo: HTMLCSSJSLogo },
  { skillName: "Tanstack Query", logo: TanstackQueryLogo },
  { skillName: "Zustand", logo: ZustandLogo },
  { skillName: "Redux & Redux ToolKit", logo: ReduxLogo },
  { skillName: "TailWind CSS", logo: TailWindCSSLogo },
];
