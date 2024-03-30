import { useState } from 'react';
import Logo from './Logo';

function Footer() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [emptyName, setEmptyName] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const handleClick = (() => {
      const sendMessage = (`Olá, Meu nome é: ${name}.
        - ${message}`);
      const number = 91985480955;
      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=${number}&text=${sendMessage}`;
      window.open(url, '_blank');
    });
    if (name === '' || message === '') {
      setEmptyName(name === '');
      setEmptyMessage(message === '');
      return;
    }

    setEmptyName(false);
    setEmptyMessage(false);
    handleClick();
    setName('');
    setMessage('');
  };

  return (
    <footer className="bg-white dark:bg-black mt-7 border-t-2 border-slate-500 text-black dark:text-white flex justify-center md:mt-10 md:w-4/5 md:mx-auto">
      <section className="flex flex-col md:flex-row justify-between w-4/5 mt-5 tablet:flex-wrap pb-1">

        <form onSubmit={handleFormSubmit} className="flex flex-col mb-5 p-5 justify-between h-52 order-1 md:order-2 md:w-2/5 md:mb-10">
          <h1 className="text-center md:text-xl mb-8 uppercase">Me envie uma mensagem!</h1>
          <div>
            <label />
            <input
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
              className={`mb-2 w-full h-8 p-2 bg-transparent border-b-2 placeholder:uppercase placeholder:text-black placeholder:dark:text-white focus:outline-none md:mb-10 ${emptyName && 'border-red-600 dark:border-red-600 transition duration-300 animate-animateSnake'}
              `}
              type="text"
              placeholder="Nome"
            />

          </div>

          <div>
            <textarea
              value={message}
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              className={`mb-2 w-full h-16 p-2 bg-transparent border-b-2 placeholder:uppercase focus:outline-none md:mb-5 placeholder:text-black placeholder:dark:text-white ${emptyMessage && 'border-red-600 dark:border-red-600 transition duration-300 animate-animateSnake'}`}
              type="text"
              placeholder="Mensagem"
            />
            <button type="submit" className="bg-blue-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white tracking-widest w-full text-xl text-center py-2 mt-2 rounded-xl hover:bg-blue-900 duration-1000 mb-10">Enviar</button>
          </div>
        </form>
        <div className="flex flex-col items-center order-2 md:order-1 md:w-2/5">
          <div className="mt-10"><Logo /></div>
          <ul className="w-full flex justify-around my-5 md:p-5">
            <li className="text-3xl md:text-4xl md:p-3 p-5 hover:text-rose-700 duration-1000">
              <a href="https://www.instagram.com/pedromarques.py/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>

            </li>
            <li className="text-3xl md:text-4xl md:p-3 p-5 hover:text-blue-600 dark:hover:text-orange-600 duration-1000"><a href="https://github.com/PedroMarques391" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></a></li>
            <li className="text-3xl md:text-4xl md:p-3 p-5 hover:text-orange-700 dark:hover:text-blue-700 duration-1000"><a href="https://www.linkedin.com/in/pedromarques391/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" /></a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
