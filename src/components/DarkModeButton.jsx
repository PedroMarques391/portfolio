import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

function DarkModeButton() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    const HTML = document.querySelector('html');
    if (localStorage.getItem('theme') === 'light') {
      HTML.classList.remove('dark');
      setTheme('light');
    } else {
      HTML.classList.add('dark');
      setTheme('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };
  return (
    <div className="absolute -top-16 md:right-[5%] md:top-6">
      <button onClick={handleThemeSwitch} className="p-4 bg-blue-600 dark:bg-orange-700 text-white dark:text-black rounded-full w-12 h-12 flex justify-center items-center relative duration-1000">
        {
        theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />
      }
      </button>
    </div>
  );
}

export default DarkModeButton;
