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

  const featuredAgents = filteredAgents.filter(a => a.featured);
  const regularAgents = filteredAgents.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-8">
              {mockAgents.length} agents ready to deploy
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-black mb-8">
              Agent Registry
            </h1>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-12">
              Discover, copy, and deploy AI agents built by creators worldwide. One command to transform your workflow.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <Input
                type="text"
                placeholder="Search agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-3 text-sm border-gray-300 focus:border-black focus:ring-0"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-normal transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-600 hover:border-black border border-gray-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="px-6 py-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-500">
            {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
      </section>

      {/* Featured Agents Section */}
      {featuredAgents.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-light text-black">Featured Agents</h2>
            </div>
            
            {/* Bento Grid Layout for Featured */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
              {/* Large featured card */}
              {featuredAgents[0] && (
                <div className="md:col-span-8">
                  <AgentCard agent={featuredAgents[0]} featured={true} />
                </div>
              )}
              
              {/* Two smaller cards stacked */}
              <div className="md:col-span-4 space-y-6">
                {featuredAgents.slice(1, 3).map(agent => (
                  <AgentCard key={agent.id} agent={agent} featured={true} />
                ))}
              </div>
              
              {/* Additional featured in standard grid */}
              {featuredAgents.slice(3).map(agent => (
                <div key={agent.id} className="md:col-span-6">
                  <AgentCard agent={agent} featured={true} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Agents Section */}
      {regularAgents.length > 0 && (
        <section className="px-6 py-16 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-light text-black mb-8">
              {featuredAgents.length > 0 ? 'All Agents' : 'Agents'}
            </h2>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {regularAgents.map((agent, index) => {
                // Create varying column spans for bento effect
                const colSpan = index % 5 === 0 ? 'md:col-span-8' : 
                               index % 5 === 1 || index % 5 === 2 ? 'md:col-span-4' :
                               'md:col-span-6';
                
                return (
                  <div key={agent.id} className={colSpan}>
                    <AgentCard agent={agent} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredAgents.length === 0 && (
        <section className="px-6 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-light text-black mb-2">No agents found</h3>
            <p className="text-sm text-gray-600 mb-8">
              Try adjusting your search or filter
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-black text-white text-sm font-normal hover:bg-gray-800 transition-colors"
            >
              Clear filters
            </button>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default RegistryPage;
