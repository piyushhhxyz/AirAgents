import { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AgentCard } from '../components/AgentCard';
import { mockAgents, categories } from '../data/mock';
import { Input } from '../components/ui/input';

export const RegistryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAgents = useMemo(() => {
    return mockAgents.filter(agent => {
      const matchesSearch = 
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'all' || agent.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Newspaper Header - Same as Landing Page */}
      <div className="border-b-4 border-black py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-gray-500">
            AirAgents
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-['Playfair_Display'] font-black text-[96px] leading-[0.95] tracking-tight text-black mb-12">
            <span className="italic">AgentHub.</span>
          </h1>
          
          <p className="text-[18px] text-gray-600 leading-relaxed mb-16 max-w-2xl">
            Discover, copy, and deploy AI agents built by creators worldwide. One command to transform your workflow.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mb-12">
            <Input
              type="text"
              placeholder="Search agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-5 py-4 text-base border-gray-300 focus:border-black focus:ring-0 hover:border-gray-400 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-black'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="px-6 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
      </section>

      {/* Agents Grid - UNIFORM LAYOUT */}
      {filteredAgents.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map(agent => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredAgents.length === 0 && (
        <section className="px-6 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-['Playfair_Display'] font-black text-[48px] text-black mb-4">No agents found</h3>
            <p className="text-gray-600 mb-8">
              Try adjusting your search or filter
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Clear filters
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Built for the agent economy. Share your AI, transform your workflow.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default RegistryPage;