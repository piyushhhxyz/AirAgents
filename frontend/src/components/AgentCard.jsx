import { useState } from 'react';
import { Copy, Star, Download, Tag, CheckCheck } from 'lucide-react';
import { Badge } from './ui/badge';

export const AgentCard = ({ agent, featured = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(agent.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={`group relative bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 ${
        featured ? 'ring-2 ring-[#d97757]/20' : ''
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6">
          <Badge className="bg-[#d97757] text-white hover:bg-[#d97757]">
            Featured
          </Badge>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#d97757] transition-colors">
            {agent.name}
          </h3>
          <p className="text-sm text-gray-500 mb-3">by {agent.creator}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-900">{agent.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Download className="w-3 h-3" />
            <span className="text-xs">{agent.downloads.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {agent.description}
      </p>

      <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
        <p className="text-xs text-gray-500 mb-2 font-medium">USE CASE</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {agent.useCase}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {agent.tags.map((tag, index) => (
          <div 
            key={index}
            className="flex items-center gap-1 px-2.5 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 bg-gray-900 rounded-lg px-4 py-2.5 font-mono text-sm text-white overflow-x-auto">
          {agent.command}
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-2.5 bg-[#d97757] hover:bg-[#c86646] text-white rounded-lg transition-colors flex items-center gap-2 font-medium"
        >
          {copied ? (
            <>
              <CheckCheck className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
};
