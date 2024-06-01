import { animateScroll } from 'react-scroll';
import { useState } from 'react';
import AOS from 'aos';
import Projects from './Projects';
import Typewriter from './Typewriter';
import Image from './Image';

function Body() {
  const [projectsToDisplay, setProjectsToDisplay] = useState(3);

  const handleClick = () => {
    projectsToDisplay === 3 ? setProjectsToDisplay(20) : setProjectsToDisplay(3);
  };

  const options = {
    duration: 2000,
    smooth: true,
  };
  AOS.init();
  return (
    <>
      <main className="mt-20 text:black dark:text-white font-mono w-4/5 mx-auto duration-1000">
        <section className="md:flex md:w-full md:justify-center md:mt-24 md:items-center tablet:flex-col">
          <div data-aos="flip-down" data-aos-duration="3000" className="container flex flex-col justify-center items-center p-5 tablet:order-1  md:order-2">
            <Image />
            <div className="mt-5 w-full justify-between flex md:mt-8 md:w-4/5">
              <img className="w-10 md:w-12" src="/portfolio/JavaScriptLogo.png" alt="JavaScriptLogo" />
              <img className="w-10 md:w-12" src="/portfolio/NodeJS.png" alt="NodeJS" />
              <img className="w-10 md:w-12" src="/portfolio/Docker logo.png" alt="JavaScriptLogo" />
              <img className="w-10 md:w-12" src="/portfolio/ReactJS.png" alt="JavaScriptLogo" />
              <img className="w-10 md:w-12" src="/portfolio/TailwindLogo.png" alt="JavaScriptLogo" />
              <img className="w-10 md:w-12" src="/portfolio/python.png" alt="JavaScriptLogo" />
            </div>
          </div>
          <div className="container flex flex-col justify-center tablet:order-2 md:order-1 p-2 items-center md:items-start tablet:items-center">
            <h1 data-aos="fade-right" data-aos-duration="3000" className="mt-2 text-xl md:mt-8 md:text-2xl">
              <Typewriter writing="Olá, Sou Pedro Marques" hiddenCursor />
            </h1>
            <div className="text-blue-600 dark:text-orange-600 my-2 md:ml-6 md:text-xl">
              <Typewriter writing="Desenvolvedor Front-End" delay={2800} />
            </div>
            <div data-aos="flip-up" data-aos-duration="3000" className="w-full text-center leading-6 font-sans md:w-full md:text-left md:text-lg tablet:text-center">Desenvolvedor Web apaixonado em transformar conceitos em interfaces interativas e responsivas. Possuo sólidos conhecimentos nas tecnologias HTML, CSS, JavaScript, TypeScript, React.js, TailwindCss, Node.js, Bootstrap e Python.</div>
            <button onClick={() => animateScroll.scrollToBottom(options)} className="border border-blue-600 dark:border-orange-600 py-4 px-6 rounded-md my-5 text-blue-600 dark:text-orange-600 hover:text-white dark:hover:text-black hover:bg-blue-600 dark:hover:bg-orange-600 duration-500 md:w-2/5 md:py-3 md:ml-6">Entre em contato</button>
          </div>
        </section>
        <section>
          <h1 className="text-center font-bold text-blue-600 dark:text-orange-600 my-5 text-2xl md:text-3xl md:my-10">
            Projetos
          </h1>
          <div className="relative w-full mb-20">
            <button className="absolute py-2 -bottom-16 w-full md:right-0 md:bottom-5 border border-blue-600 dark:border-orange-600 px-6 rounded-md my-5 text-blue-600 dark:text-orange-600 hover:text-white dark:hover:text-black hover:bg-blue-600 dark:hover:bg-orange-600 duration-500 md:w-44 md:py-3 md:ml-6" onClick={handleClick}>{projectsToDisplay === 3 ? 'Mostrar Todos' : 'Ocultar'}</button>
          </div>
          <section className="container flex flex-wrap justify-center gap-12 md:mt-6">
            <Projects projectsToDisplay={projectsToDisplay} />
          </section>
        </section>
      </main>
    </>
  );
}

export default Body;
