import { useState } from 'react';
import { HiX, HiMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "./SocialLinks"
import { mobileMenuLink, mobileMenu } from './Animations/FramerMotion';
import Logo from '/src/assets/WillerLucoles_Logo.svg';

const links = [
  { url: "#About", title: "Sobre mim" },
  { url: "#Skills", title: "Habilidades" },
  { url: "#Projects", title: "Projetos" },
];



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50 md:px-4">
      <div className="mx-auto flex justify-between items-center p-4">
 
        <div className="text-3xl font-bold flex items-center">
          <a href="#Home" onClick={handleLinkClick}>
            <img src={Logo} alt="Logo" className="h-8 mr-2 cursor-pointer" />
          </a>
        </div>
        
        <div className='MenuMobile'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gray-600"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenu}
            className="fixed top-0 right-0 h-full w-72 bg-black text-white flex flex-col items-center p-6 z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <HiX size={32} />
            </button>

            <div className="mt-12 flex flex-col space-y-8">
              {links.map((link) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  className="text-xl hover:text-gray-400 transition"
                  variants={mobileMenuLink}
                  onClick={handleLinkClick}
                >
                  {link.title}
                </motion.a>
              ))}
                      <nav className='mb-4'>
          <ul className='flex items-center justify-center gap-8 mt-4'>
            {SocialLinks.map(social => (
              <li key={social.name}>
                <a href={social.url} target='blank' rel='noreferrer' className='text-white'>
                  {social.logo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
