import { motion } from "framer-motion";
import IllustratorLogo from '../assets/ImgTools/Icon_Adobe_Illustrator.png';
import IndesignLogo from '../assets/ImgTools/Icon_Adobe_Indesign.png';
import PhotoshopLogo from '../assets/ImgTools/Icon_Adobe_Photoshop.png';
import BootstrapLogo from '../assets/ImgTools/Icon_Bootstrap.png';
import CanvaLogo from '../assets/ImgTools/Icon_Canva.png';
import CorelDrawLogo from '../assets/ImgTools/Icon_CorelDraw.png';
import FigmaLogo from '../assets/ImgTools/Icon_Figma.png';
import HTMLLogo from '../assets/ImgTools/Icon_HTML.png';
import JavaScriptLogo from '../assets/ImgTools/Icon_JavaScript.png';
import NextJSLogo from '../assets/ImgTools/Icon_NextJS.png';
import ReactLogo from '../assets/ImgTools/Icon_React.png';
import TailwindLogo from '../assets/ImgTools/Icon_Tailwind.png';
import TypeScriptLogo from '../assets/ImgTools/Icon_TypeScript.png';
import WordPressLogo from '../assets/ImgTools/Icon_Wordpress.png';
import CSSLogo from '../assets/ImgTools/Icon_CSS.png';

const tools = [
  {
    title: "HTML",
    image: HTMLLogo,
  },
  {
    title: "CSS",
    image: CSSLogo,
  },
  {
    title: "TypeScript",
    image: TypeScriptLogo,
  },
  {
    title: "JavaScript",
    image: JavaScriptLogo,
  },
  {
    title: "React",
    image: ReactLogo,
  },
  {
    title: "Next.js",
    image:  NextJSLogo,
  },
  {
    title: "Tailwind CSS",
    image:  TailwindLogo,
  },
  {
    title: "Bootstrap",
    image:  BootstrapLogo,
  },
  {
    title: "WordPress",
    image:  WordPressLogo,
  },
  {
    title: "Figma",
    image:  FigmaLogo,
  },
  {
    title: "Photoshop",
    image:  PhotoshopLogo,
  },
  {
    title: "Illustrator",
    image:  IllustratorLogo,
  },
  {
    title: "InDesign",
    image:  IndesignLogo,
  },
  {
    title: "CorelDraw",
    image:  CorelDrawLogo,
  },
  {
    title: "Canva",
    image:  CanvaLogo,
  },
];

const Skills = () => {
  return (
    <motion.section
      id="Skills"    
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
    >
      <div className="skills-header flex items-center justify-center mt-10">
        <div className="line flex-grow h-px bg-gray-300"></div>
        <h1 className="title font-sans text-2xl font-[1000] text-black px-4">
          Minhas Skills
        </h1>
        <div className="line flex-grow h-px bg-gray-300"></div>
      </div>

      <div className="skills-container flex flex-col lg:flex-row justify-center gap-6 mt-5 max-w-4xl mx-auto">
        <div className="tools-services flex-1 justify-center mt-5">
          <div className="tools-list flex flex-wrap justify-center gap-6 lg:px-11">
            {tools.map((tool) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3.5 }}
                className="tool-card flex flex-row items-center gap-4 w-[10rem] h-[3rem] rounded-xl bg-white drop-shadow-xl p-2"
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  width={45}
                  height={45}
                  className="tool-image size-7"
                />
                <div className="tool-title font-sans font-bold text-base tracking-wide text-black text-center">
                  {tool.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;