import { Link, useLocation } from 'react-router-dom';
import { Sparkles, BookOpen } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center transform transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AgentDrop</span>
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-[#d97757] ${
                location.pathname === '/' ? 'text-[#d97757]' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/registry" 
              className={`text-sm font-medium transition-colors hover:text-[#d97757] ${
                location.pathname === '/registry' ? 'text-[#d97757]' : 'text-gray-600'
              }`}
            >
              Registry
            </Link>
            <Link 
              to="/registry"
              className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Browse Agents
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
