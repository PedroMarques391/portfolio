import { useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import Logo from './Logo';
import DarkModeButton from './DarkModeButton';
import LI from './LI';

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [scrollOn, setScrollOn] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollOn(window.scrollY > 150);
    };
    return window
      .addEventListener('scroll', handleScroll);
  }, []);

  const options = {
    duration: 2000,
    smooth: true,
  };

  return (
    <>
      <header className={`${isOpen ? 'bg-white dark:bg-black h-20 ' : 'bg-black bg-opacity-80 text-white'} duration-1000 fixed top-0 w-full z-50 ${scrollOn && 'shadow-black dark:shadow-white shadow-lg'}`}>
        <div className="flex justify-between p-2 md:hidden">
          <Logo color={`${isOpen ? 'text-black dark:text-white' : 'text-white dark:text-white'}`} />
          <button onClick={handleClick} className="text-4xl p-2 text-white"><i className={`${isOpen ? 'fa-solid fa-bars dark:text-white text-black' : 'fa-solid fa-x text-white'}`} /></button>
        </div>
        <nav className="md:flex justify-around md:pt-5">
          <div className="hidden md:block"><Logo /></div>
          <ul
            className={`${isOpen ? '-ml-72 -mt-[510px] text-blue-700 dark:text-orange-900 duration-700 invisible md:visible md:mt-0 md:text-black dark:md:text-white md:ml-0 md:flex md:justify-end gap-8 mr-10 items-center' : 'flex flex-col items-center leading-10 duration-1000 justify-around font-serif mt-10'}`}
          >
            <DarkModeButton />
            <LI onClick={() => animateScroll.scrollToTop(options)}>Home</LI>
            <LI href="https://pedromarques391.github.io/blog/">Blog</LI>
            <LI onClick={() => animateScroll.scrollTo(450, options)}>Projetos</LI>
            <LI onClick={() => animateScroll.scrollToBottom(options)}>Contatos</LI>
          </ul>

        </nav>

      </header>
    </>
  );
}

export default NavBar;
