import { useState, useEffect } from 'react';

function Typewriter({ writing }) {
  const [text, setText] = useState('');

  const writeOnScreen = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => writeOnScreen(text, i + 1), 100);
    }
  };

  useEffect(() => {
    setTimeout(() => writeOnScreen(writing));
  }, []);

  return (
    <div>{text}</div>
  );
}

export default Typewriter;
