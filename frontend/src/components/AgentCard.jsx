import { useState } from 'react';

export const AgentCard = ({ agent }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(agent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group bg-white border border-gray-200 hover:border-black transition-all duration-300 h-full flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-black mb-2 group-hover:text-gray-600 transition-colors">
              {agent.name}
            </h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider">by {agent.creator}</p>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-semibold text-black">{agent.rating}</span>
              <span className="text-base text-black">★</span>
            </div>
            <span className="text-xs text-gray-400">{agent.downloads.toLocaleString()}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          {agent.description}
        </p>
      </div>

      {/* Use Case */}
      <div className="p-8 bg-gray-50 border-b border-gray-200 flex-1">
        <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Use Case</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {agent.useCase}
        </p>
      </div>

      {/* Tags */}
      <div className="p-8 border-b border-gray-200">
        <div className="flex flex-wrap gap-2">
          {agent.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 border border-gray-200 text-xs text-gray-600 hover:border-black transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Command */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-black px-4 py-3 font-mono text-xs text-white overflow-x-auto">
            {agent.command}
          </div>
          <button
            onClick={handleCopy}
            className="px-5 py-3 border border-gray-300 hover:border-black hover:bg-black hover:text-white text-black text-xs font-medium transition-all duration-200 whitespace-nowrap"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};