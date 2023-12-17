import { useState, useEffect } from 'react';

function Typewriter({ writing, delay, hiddenCursor }) {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  const writeOnScreen = (text, i = 0) => {
    if (i < text.length) {
      setShowCursor(true);
      setText(text.slice(0, i + 1));
      setTimeout(() => writeOnScreen(text, i + 1), 100);
    } else if (i >= text.length && hiddenCursor) {
      setShowCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => writeOnScreen(writing), delay ?? 200);
  }, []);

  return (
    <div>
      {text}
      {showCursor && (
        <span className="animate-animateCursor dark:animate-animateCursorDark text-xl md:text-2xl ml-1 font-medium">|</span>
      )}

    </div>
  );
}

export default Typewriter;
