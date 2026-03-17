import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';

export const CodeTerminal = ({ isDark }) => {
  const [displayText, setDisplayText] = useState('');
  const fullCode = `const developer = {
  name: "Harshil Modh",
  role: "Software Engineer",
  mission: "Architecting Intelligence",
  skills: [
    "Cloud Computing",
    "AI Systems",
    "Full Stack Systems"
  ],
  status: "Ready to Deploy"
};
// Connection Established.
`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullCode.substring(0, index));
      index++;
      if (index > fullCode.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [fullCode]);

  // Syntax highlight the displayed text
  const highlightCode = (text) => {
    return text.split('\n').map((line, i) => {
      let highlighted = line
        // Keywords
        .replace(/\b(const|let|var|function|return|import|export|from)\b/g, '<span class="text-purple-400">$1</span>')
        // Strings
        .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
        // Properties
        .replace(/(\w+)(?=:)/g, '<span class="text-cyan-300">$1</span>')
        // Comments
        .replace(/(\/\/.*)$/g, '<span class="text-slate-500 italic">$1</span>')
        // Brackets
        .replace(/([{}[\]])/g, '<span class="text-yellow-300/70">$1</span>');
      return `<div key="${i}">${highlighted || ' '}</div>`;
    }).join('');
  };

  const terminalBg = isDark ? 'bg-slate-900/80' : 'bg-gray-900/95';
  const borderColor = isDark ? 'border-slate-700' : 'border-gray-700/50';

  return (
    <TiltCard className={`w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border ${borderColor} ${terminalBg}`}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800/60 border-b border-gray-700/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          profile.js
        </div>
        <div className="flex gap-1">
          <div className="w-4 h-[1px] bg-gray-600"></div>
          <div className="w-2 h-2 border border-gray-600 rounded-[2px]"></div>
        </div>
      </div>
      {/* Line numbers + code */}
      <div className="flex font-mono text-sm leading-relaxed">
        {/* Line numbers */}
        <div className="py-5 pl-4 pr-3 text-right select-none border-r border-gray-700/30">
          {displayText.split('\n').map((_, i) => (
            <div key={i} className="text-gray-600 text-xs leading-relaxed">{i + 1}</div>
          ))}
        </div>
        {/* Code */}
        <div className="p-5 flex-1 overflow-hidden">
          <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightCode(displayText) }} />
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-primary-light ml-0.5 align-middle"
            />
          </pre>
        </div>
      </div>
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-primary/20 border-t border-gray-700/30 text-[10px] font-mono text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
          UTF-8
        </span>
        <span>JavaScript</span>
        <span>Ln {displayText.split('\n').length}, Col {(displayText.split('\n').pop()?.length || 0) + 1}</span>
      </div>
    </TiltCard>
  );
};
