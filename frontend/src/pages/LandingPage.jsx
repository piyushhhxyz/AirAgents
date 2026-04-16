import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Globe, 
  Sparkles, 
  Share2, 
  Clock, 
  Shield,
  TrendingUp,
  Network
} from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 mb-6">
              <Sparkles className="w-4 h-4 text-[#d97757]" />
              The future of personal AI is here
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Share Your AI Agents
              <br />
              <span className="text-[#d97757]">Like Airdropping Files</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Apps have app stores. Code has GitHub. Websites have links. But how do you share that brilliant AI agent you built? 
              <span className="font-semibold text-gray-900"> AgentDrop makes it effortless.</span>
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link 
                to="/registry"
                className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2"
              >
                Browse Agent Registry
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">127K+</div>
              <div className="text-sm text-gray-600">Agent Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">1,200+</div>
              <div className="text-sm text-gray-600">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Agent Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Newspaper Style */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Problem is Real</h2>
            <p className="text-lg text-gray-600">And it's only getting bigger</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Problem Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-[#d97757]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">You Can't Share Your Agent</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You built an email assistant that saves you 2 hours daily. Your friend wants it. Now what? Send them a ZIP file? Share a GitHub repo? Walk them through setup? <span className="font-semibold text-gray-900">There's no simple "send" button.</span>
              </p>
              <p className="text-sm text-gray-500 italic">
                "I literally had to schedule a 30-minute call to help my colleague set up my meeting scheduler agent." - Dev, San Francisco
              </p>
            </div>

            {/* Problem Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#d97757]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Setup Friction is Massive</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Even with documentation, getting someone else's agent running requires environment setup, dependency installation, API key configuration, and debugging. <span className="font-semibold text-gray-900">Most people give up.</span>
              </p>
              <p className="text-sm text-gray-500 italic">
                "I shared my news curator agent with 10 people. Only 2 got it working." - Marcus, London
              </p>
            </div>

            {/* Problem Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#d97757]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Discovery Mechanism</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Thousands of people are building amazing agents right now. But there's no place to discover them. No ratings. No reviews. <span className="font-semibold text-gray-900">Brilliant tools remain invisible.</span>
              </p>
              <p className="text-sm text-gray-500 italic">
                "I spent weeks building something that already existed. I just didn't know." - Aisha, Mumbai
              </p>
            </div>

            {/* Problem Card 4 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#d97757]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Trust & Quality Unknown</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you do find an agent, how do you know it's good? Safe? Maintained? There's no reputation system, no usage stats. <span className="font-semibold text-gray-900">You're flying blind.</span>
              </p>
              <p className="text-sm text-gray-500 italic">
                "Downloaded an agent from Reddit. Spent hours debugging. Turned out it was abandoned 6 months ago." - Chen, Singapore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This Matters Now</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're at the inflection point. The agent economy is about to explode.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#d97757]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Agent Wave</h3>
              <p className="text-gray-600 leading-relaxed">
                By 2026, experts predict every knowledge worker will use 3-5 personal AI agents daily. That's billions of agents that need to be shared, discovered, and deployed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-[#d97757]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Network Effects</h3>
              <p className="text-gray-600 leading-relaxed">
                The platform with the best agent distribution will win. Just like the App Store changed mobile, AgentDrop will define the agent era.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#d97757]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Democratizing AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Today, building agents requires technical skills. But using them shouldn't. AgentDrop makes powerful AI accessible to everyone, not just developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How AgentDrop Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to agent sharing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-[#d97757] text-white flex items-center justify-center font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Browse the Registry</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover thousands of agents organized by category. See ratings, downloads, and detailed use cases. Find exactly what you need.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-[#d97757] text-white flex items-center justify-center font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Copy the Command</h3>
              <p className="text-gray-600 leading-relaxed">
                Every agent has a simple .agent command. One click to copy. No config files, no setup scripts, no headaches.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-[#d97757] text-white flex items-center justify-center font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Install & Run</h3>
              <p className="text-gray-600 leading-relaxed">
                Paste the command in your terminal. The agent installs, configures, and starts working. It's that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 text-[#d97757] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Imagine a world where sharing your email assistant is as easy as sending a link. Where discovering a perfect productivity agent takes 30 seconds, not 30 days. Where the collective intelligence of millions of AI agents is accessible to everyone.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            <span className="font-semibold text-gray-900">That's the world we're building.</span> AgentDrop isn't just a registry—it's the infrastructure for the agent economy. The distribution layer for AI automation. The App Store for personal intelligence.
          </p>
          <p className="text-2xl font-bold text-gray-900">
            The future runs on agents. Let's make them shareable.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators and users building the agent future
          </p>
          <Link 
            to="/registry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d97757] hover:bg-[#c86646] text-white rounded-xl font-semibold transition-all hover:scale-105"
          >
            Browse Agent Registry
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
