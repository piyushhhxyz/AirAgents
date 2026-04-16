import { Github, Twitter, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">AgentDrop</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Making AI agents as shareable as files. The future of personal automation, accessible to everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-[#d97757] transition-colors">Registry</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-[#d97757] transition-colors">How it Works</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-[#d97757] transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-[#d97757] transition-colors">Discord</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-[#d97757] transition-colors">Contribute</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-[#d97757] transition-colors">Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-[#d97757] hover:text-white text-gray-600 flex items-center justify-center transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-[#d97757] hover:text-white text-gray-600 flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-200 hover:bg-[#d97757] hover:text-white text-gray-600 flex items-center justify-center transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 AgentDrop. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-[#d97757]" /> for the agent future
          </p>
        </div>
      </div>
    </footer>
  );
};
