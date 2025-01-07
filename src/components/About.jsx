import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="p-5" 
      id='About'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
    >      
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="font-sans text-lg font-medium text-gray-700 text-center">
          Willer Lucoles
        </h1>
        <h1 className="font-sans text-2xl font-extrabold text-black text-center -mt-2">
          Desenvolvedor Web
        </h1>
        <div className="line w-full max-w-md h-px bg-gray-300 mt-2"></div>
      </div>

      <p className="mt-5 text-md sm:text-base text-black leading-relaxed max-w-3xl mx-auto text-justify">
        Desenvolvedor front-end de Belo Horizonte, e adoro transformar ideias em sites modernos e práticos. 
        Minha jornada começou no design gráfico, onde aprendi a valorizar a estética e a funcionalidade, mas foi no front-end que 
        encontrei meu lugar, juntando criatividade e tecnologia para construir experiências digitais. 
        Estou sempre buscando aprender algo novo e aperfeiçoar meu trabalho, seja criando um layout intuitivo, otimizando código 
        ou explorando as últimas tendências do desenvolvimento web.
      </p>
    </motion.section>
  );
};

export default About;