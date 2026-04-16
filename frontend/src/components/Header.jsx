import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-normal text-black hover:text-gray-600 transition-colors">
            AgentDrop
          </Link>
          
          <nav className="flex items-center gap-10">
            <Link 
              to="/" 
              className={`text-sm font-normal transition-colors ${
                location.pathname === '/' ? 'text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/registry" 
              className={`text-sm font-normal transition-colors ${
                location.pathname === '/registry' ? 'text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              Registry
            </Link>
            <Link 
              to="/registry"
              className="px-5 py-2 bg-[#d97757] text-white text-sm font-normal hover:bg-[#c86646] transition-colors"
            >
              Browse
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
