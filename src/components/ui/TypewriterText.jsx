import React, { useState, useEffect } from 'react';

export const TypewriterText = ({ texts, wait = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        if (texts.length > 1) {
          setTimeout(() => setIsDeleting(true), wait);
        }
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, wait]);

  return (
    <span className="inline-block min-w-[250px] text-primary font-bold">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};
