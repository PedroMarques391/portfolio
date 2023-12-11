import { useEffect, useState } from "react"
import AOS from 'aos';


const Projects = () => {
    AOS.init()
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("/portfolio/db.json")
            const json = await data.json()
            setProjects(json)
        }
        getData()
    }, [])
  return (
    <>
    {projects && projects.map((project) => (
        <div key={project.id} data-aos="fade-up"  data-aos-duration="2000" className="w-4/5 md:w-2/5 group mb-5 rounded-xl overflow-hidden text-white shadow-xl shadow-black dark:shadow-white text-center justify-between flex flex-col">
            <img className="h-48 w-full md:h-52 md:mb-2 group-hover:scale-110 md:group-hover:scale-125 duration-500" src={`/portfolio/${project.img}`} alt="um projeto" />
            <section className="flex flex-col justify-between items-center p-3 md:h-48 md:mt-3 md:mb-2">
            <p className="text-xl text-black dark:text-white">{project.name}</p>
            <p className="text-black dark:text-white">{project.description}</p>
            <p className="font-sans font-bold text-lg text-blue-600 dark:text-orange-600">{`Tecnologias: ${project.technologies}`}</p>
            </section>
            <button className="font-sans py-4 bg-black dark:bg-white text-white dark:text-black font-bold hover:bg-gray-500 dark:hover:bg-gray-400 hover:font-bold duration-1000 tracking-widest w-full"><a target="_blank" href={project.url} rel="noreferrer">USAR</a></button>
        </div>
    
    ))}
    </>
  )
}

export default Projects