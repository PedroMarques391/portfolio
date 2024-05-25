import { useEffect, useState } from 'react';
import AOS from 'aos';

function Projects({ projectsToDisplay }) {
  AOS.init();
  const [projects, setProjects] = useState([]);
  const [hiddenText, setHiddenText] = useState(false);

  const handleClick = (id) => {
    const getUnique = projects.find((project) => project.id === id);

    setHiddenText(getUnique && id !== hiddenText ? getUnique.id : '');
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('/portfolio/db.json');
      const json = await data.json();
      json.reverse();
      setProjects(json);
    };
    getData();
  }, []);
  return (
    <>
      {projects && projects.slice(0, projectsToDisplay).map((project) => (
        <div
          key={project.id}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="linear"
          className="w-full tablet:w-full  group rounded-xl overflow-hidden text-white shadow-xl shadow-black dark:shadow-white text-center justify-between flex flex-col md:w-[30%] transition-all duration-500"
        >
          <div className="relative h-80">
            <img
              className="w-full h-full"
              src={`/portfolio/${project.img}`}
              alt={project.name}
            />
            <section className="absolute top-0 h-full w-full text-white p-5 bg-black bg-opacity-75 flex flex-col justify-between duration-1000 opacity-0 hover:opacity-100">
              <p className="text-xl pt-5 text-white">{project.id === hiddenText ? '' : project.name}</p>
              <p className="font-sans text-sm leading-5 md:text-xl md:leading-8">{project.id === hiddenText ? project.description : ''}</p>
              <p className="font-sans font-bold text-lg text-blue-600 dark:text-orange-600">{project.id === hiddenText ? '' : project.technologies}</p>
              <div className="mb-2 flex justify-between gap-5">
                <a className="py-2 w-full font-sans text-center flex items-center justify-center border border-blue-600 hover:bg-blue-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-black rounded-lg duration-700 dark:border-orange-600 " target="_blank" href={project.url} rel="noreferrer">Demonstração</a>
                <button onClick={() => handleClick(project.id)} className="py-2 w-full font-sans text-center flex items-center justify-center border border-blue-600 hover:bg-blue-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-black rounded-lg duration-700 dark:border-orange-600 ">{project.id === hiddenText ? 'Menos informações' : 'Mais Informações'}</button>

              </div>
            </section>
          </div>
        </div>

      ))}
    </>
  );
}

export default Projects;
