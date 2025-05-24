import React, { useState, useEffect } from "react";

const texts = [
  "Full-stack Developer",
  "React & Node.js Enthusiast",
  "AI & Web Automation Lover",
  "Open Source Contributor",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      // Typing effect: add one character at a time
      if (displayText.length < texts[index].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[index].slice(0, displayText.length + 1));
        }, 150);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      // Deleting effect: remove one character at a time
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(texts[index].slice(0, displayText.length - 1));
        }, 100);
      } else {
        // Move to next text and start typing again
        setIndex((prev) => (prev + 1) % texts.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, index]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 h-10 min-h-[2.5rem]">
      {displayText}
      <span className="blinking-cursor">|</span>

      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s steps(2, start) infinite;
          color: #a78bfa; /* purple */
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </h2>
  );
}
