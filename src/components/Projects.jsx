import { motion } from "framer-motion";

import SiteWillerMockup from '../assets/Projects/SiteWillerMockup.png';
import MockupSevenMuayThai from '../assets/Projects/Mockup_SevenMuayThai.png';
import HarmoniaInteriorSite from '../assets/Projects/HarmoniaInterior_Site.png';

const projects = [
  {
    title: "Site Willer Lucoles",
    image: SiteWillerMockup,
    link: "https://willerlucoles.vercel.app/",
  },
  {
    title: "Site Seven Muay Thai",
    image: MockupSevenMuayThai,
    link: "https://sevenmuaythai.com.br",
  },
  {
    title: "Site Harmonia Interior",
    image: HarmoniaInteriorSite,
    link: "https://harmoniainterior.vercel.app/",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="Projects"
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
    >
      <div className="mx-auto px-5">
        <div className="skills-header flex items-center justify-center my-10">
          <div className="line flex-grow h-px bg-gray-300"></div>
          <h1 className="title font-sans text-2xl font-[1000] text-black px-4">Projetos</h1>
          <div className="line flex-grow h-px bg-gray-300"></div>
        </div>


        <div className="flex flex-wrap gap-8 items-center justify-center mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >

              <div className="w-[250px] h-[250px] rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 mb-4 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Live
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
