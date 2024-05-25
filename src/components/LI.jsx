import React from 'react';

function LI({ onClick, children, href }) {
  return (
    href ? (
      <li className="text-2xl h-32 tracking-widest md:mb-5 md:h-16 duration-1000 md:text-lg hover:text-blue-600 dark:hover:text-orange-600">
        <button
          className="p-5 uppercase"
        >
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>

        </button>
      </li>
    ) : (
      <li className="text-2xl h-32 tracking-widest md:mb-5 md:h-16 duration-1000 md:text-lg hover:text-blue-600 dark:hover:text-orange-600">
        <button
          className="p-5 uppercase"
          onClick={onClick}
        >
          {children}
        </button>
      </li>
    )
  );
}

export default LI;
