import { useState } from 'react';

export const AgentCard = ({ agent }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(agent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group bg-white border-2 border-gray-200 hover:border-[#d97757] transition-all duration-300 h-full flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-gray-200 bg-gray-50">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-semibold text-black group-hover:text-[#d97757] transition-colors">
            {agent.name}
          </h3>
          <div className="flex items-center gap-1.5">
            <span className="text-base font-semibold text-black">{agent.rating}</span>
            <span className="text-sm text-black">★</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-wider">by {agent.creator}</p>
      </div>

      {/* Description */}
      <div className="p-8 flex-1">
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          {agent.description}
        </p>

        <div className="mb-6">
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">What it does</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {agent.useCase}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {agent.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Command */}
      <div className="p-8 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-black px-4 py-3 font-mono text-xs text-white overflow-x-auto">
            {agent.command}
          </div>
          <button
            onClick={handleCopy}
            className="px-5 py-3 bg-[#d97757] hover:bg-[#c86646] text-white text-xs font-medium transition-all duration-200 whitespace-nowrap"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3">{agent.downloads.toLocaleString()} installs</p>
      </div>
    </div>
  );
};