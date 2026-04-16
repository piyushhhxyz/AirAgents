export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-normal text-black mb-4 text-sm">AgentDrop</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Making AI agents as shareable as files. The future of personal automation.
            </p>
          </div>
          
          <div>
            <h4 className="font-normal text-black mb-4 text-xs uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Registry</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">How it Works</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-normal text-black mb-4 text-xs uppercase tracking-wider">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Discord</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Contribute</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-normal text-black mb-4 text-xs uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">GitHub</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Twitter</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2025 AgentDrop. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built for the agent future
          </p>
        </div>
      </div>
    </footer>
  );
};
