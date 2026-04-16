import { useState } from 'react';

export const AgentCard = ({ agent, featured = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(agent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={`group relative bg-white border border-gray-200 p-8 transition-all duration-300 hover:border-gray-400 ${
        featured ? 'border-black' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-xl font-normal text-black mb-2 group-hover:text-gray-600 transition-colors">
            {agent.name}
          </h3>
          <p className="text-xs text-gray-400">by {agent.creator}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-normal text-black">{agent.rating}</span>
            <span className="text-xs text-gray-400">★</span>
          </div>
          <span className="text-xs text-gray-400">{agent.downloads.toLocaleString()}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        {agent.description}
      </p>

      <div className="bg-gray-50 border border-gray-200 p-4 mb-6">
        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Use Case</p>
        <p className="text-xs text-gray-600 leading-relaxed">
          {agent.useCase}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {agent.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 border border-gray-200 text-xs text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 bg-black px-4 py-3 font-mono text-xs text-white overflow-x-auto">
          {agent.command}
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-3 border border-gray-300 hover:border-black text-black text-xs font-normal transition-colors whitespace-nowrap"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};
