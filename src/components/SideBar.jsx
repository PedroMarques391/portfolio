import React from 'react';
import { animateScroll } from 'react-scroll';
import LI from './LI';
import DarkModeButton from './DarkModeButton';

function SideBar() {
  const options = {
    duration: 2000,
    smooth: true,
  };
  return (
    <aside className="leading-10 font-serif">
      <ul className="flex flex-col justify-between items-center text-black dark:text-white">
        <DarkModeButton />
        <LI onClick={() => animateScroll.scrollToTop(options)}>Home</LI>
        <LI href="https://pedromarques391.github.io/blog/">Blog</LI>
        <LI onClick={() => animateScroll.scrollTo(450, options)}>Projetos</LI>
        <LI onClick={() => animateScroll.scrollToBottom(options)}>Contatos</LI>
      </ul>
    </aside>
  );
}

export default SideBar;
