import { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AgentCard } from '../components/AgentCard';
import { mockAgents, categories } from '../data/mock';
import { Search, Filter, Sparkles } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';

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
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-700 mb-6 shadow-sm border border-gray-200">
            <Sparkles className="w-4 h-4 text-[#d97757]" />
            {mockAgents.length} agents ready to deploy
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Agent Registry
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover, copy, and deploy AI agents built by creators worldwide. One command to transform your workflow.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search agents by name, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-xl border-gray-300 focus:border-[#d97757] focus:ring-[#d97757]"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-400" />
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-600">
            {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
      </section>

      {/* Featured Agents Section */}
      {featuredAgents.length > 0 && (
        <section className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#d97757]" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Agents</h2>
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
        <section className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
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
        <section className="px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No agents found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
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
