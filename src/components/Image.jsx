import React from 'react';

function Image() {
  return (

    <div className="group h-72 w-72 [pespective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-lx transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 ">
          <img className="items-center w-full bg-black dark:bg-slate-600 rounded-full h-full object-cover" src="/portfolio/112777867.png" alt="Foto de perfil" />
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img className="items-center w-full bg-black dark:bg-slate-600 rounded-full h-full object-cover" src="/portfolio/profile-pic.png" alt="Foto de perfil" />
        </div>
      </div>
    </div>

  );
}

export default Image;
