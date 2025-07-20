import React from 'react';

export default function SectionDivider({ text, icon }) {
  return (
    <div className="my-10 flex items-center justify-center gap-4 w-full px-4">
      {/* Left Line */}
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />

      {/* Center Text + Icon */}
      <div className="flex items-center gap-2 text-green-300 font-mono text-sm sm:text-base 
                      px-4 py-1 rounded-md border border-green-400 shadow-[0_0_10px_#00ff95]
                      bg-black/50 backdrop-blur-md">
        {icon}
        <span>{text}</span>
      </div>

      {/* Right Line */}
      <div className="flex-grow h-px bg-gradient-to-l from-transparent via-green-400 to-transparent" />
    </div>
  );
}
