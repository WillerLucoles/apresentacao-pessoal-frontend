import { motion } from "framer-motion";

const tools = [
  {
    title: "HTML",
    image: "src/assets/ImgTools/Icon_HTML.png",
  },
  {
    title: "CSS",
    image: "src/assets/ImgTools/Icon_CSS.png",
  },
  {
    title: "TypeScript",
    image: "src/assets/ImgTools/Icon_TypeScript.png",
  },
  {
    title: "JavaScript",
    image: "src/assets/ImgTools/Icon_JavaScript.png",
  },
  {
    title: "React",
    image: "src/assets/ImgTools/Icon_React.png",
  },
  {
    title: "Next.js",
    image: "src/assets/ImgTools/Icon_NextJS.png",
  },
  {
    title: "Tailwind CSS",
    image: "src/assets/ImgTools/Icon_Tailwind.png",
  },
  {
    title: "Bootstrap",
    image: "src/assets/ImgTools/Icon_Bootstrap.png",
  },
  {
    title: "WordPress",
    image: "src/assets/ImgTools/Icon_Wordpress.png",
  },
  {
    title: "Figma",
    image: "src/assets/ImgTools/Icon_Figma.png",
  },
  {
    title: "Adobe XD",
    image: "src/assets/ImgTools/Icon_AdobeXD.png",
  },
  {
    title: "Photoshop",
    image: "src/assets/ImgTools/Icon_Adobe_Photoshop.png",
  },
  {
    title: "Illustrator",
    image: "src/assets/ImgTools/Icon_Adobe_Illustrator.png",
  },
  {
    title: "InDesign",
    image: "src/assets/ImgTools/Icon_Adobe_Indesign.png",
  },
  {
    title: "CorelDraw",
    image: "src/assets/ImgTools/Icon_CorelDraw.png",
  },
  {
    title: "Canva",
    image: "src/assets/ImgTools/Icon_Canva.png",
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
        <h1 className="title font-sans text-3xl sm:text-4xl font-[1000] text-black px-4">
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