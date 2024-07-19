import NextJsLogo from "./Nextjs-logo.png";
import ReactLogo from "./React-logo.png";
import ZustandLogo from "./Zustand-logo.png";
import TanstackQueryLogo from "./TanstackQuery-logo.png";
import TypeScriptLogo from "./Typescript-logo.png";
import ReduxLogo from "./Redux-logo.png";
import HTMLCSSJSLogo from "./HTML-CSS-JS-Logo.png";
import TailWindCSSLogo from "./TailWindCSS-logo.png";
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
