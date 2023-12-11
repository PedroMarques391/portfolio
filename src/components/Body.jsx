import { animateScroll } from "react-scroll";
import Projects from "./Projects"
import AOS from 'aos';

const Body = () => {
  const options = {
    duration: 2000,
    smooth: true
  }
  AOS.init()
  return (
    <>
        <main className='mt-20 text:black dark:text-white font-mono md:w-4/5 md:mx-auto duration-1000'>
        <section className="md:flex md:full md:justify-center md:mt-24 md:items-center">
        <div data-aos="flip-down"  data-aos-duration="3000" className='container flex flex-col justify-center items-center p-5 md:order-2'>
            <img className='items-center w-48 bg-black dark:bg-slate-600 rounded-full md:w-60' src="/portfolio/112777867.png" alt="Foto de perfil" />
            <div className="mt-5 flex gap-5 md:mt-8 md:gap-10">
            <img className="w-10 md:w-12" src="/portfolio/JavaScriptLogo.png" alt="JavaScriptLogo" />
            <img className="w-10 md:w-12" src="/portfolio/NodeJS.png" alt="NodeJS" />
            <img className="w-10 md:w-12" src="/portfolio/Docker logo.png" alt="JavaScriptLogo" />
            <img className="w-10 md:w-12" src="/portfolio/ReactJS.png" alt="JavaScriptLogo" />
            <img className="w-10 md:w-12" src="/portfolio/TailwindLogo.png" alt="JavaScriptLogo" />
            <img className="w-10 md:w-12" src="/portfolio/python.png" alt="JavaScriptLogo" />
            </div>
        </div>
        <div className='container flex flex-col justify-center md:order-1 p-2 items-center md:items-start'>
            <h1 data-aos="fade-right"  data-aos-duration="3000" className='mt-2 text-xl md:mt-8 md:text-2xl'>Olá, Sou Pedro Marques</h1>
            <p className='text-blue-600 dark:text-orange-600 my-2 md:ml-6 md:text-xl'>Desenvolvedor Front-End</p>
            <p data-aos="flip-up"  data-aos-duration="3000" className='w-4/5 text-center md:w-full md:text-left md:text-lg'>Sou desenvolvedor Web há mais de 1 ano, tenho conhecimento nas tecnológias HTML, CSS, JavaScript, TypeScript, React.Js, TailwindCss, Node.Js, Bootstrap e Python.</p>
            <button onClick={() => animateScroll.scrollToBottom(options)} className="border border-blue-600 dark:border-orange-600 py-4 px-6 rounded-md my-5 text-blue-600 dark:text-orange-600 hover:text-white dark:hover:text-black hover:bg-blue-600 dark:hover:bg-orange-600 duration-500 md:w-2/5 md:py-3 md:ml-6">Entre em contato</button>
        </div>
        </section>
        <h1 className="text-center font-bold text-blue-600 dark:text-orange-600 my-5 text-2xl md:text-3xl md:my-10">Projetos</h1>
        <section className="container flex flex-wrap justify-center gap-7 md:mt-6">
            
            <Projects/>
        </section>
        </main>
    </>
  )
}

export default Body