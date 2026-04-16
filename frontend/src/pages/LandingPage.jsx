import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-8">
              The future of personal AI
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight tracking-tight">
              Share Your AI Agents.
              <br />
              <span className="font-normal">Like Airdropping Files.</span>
            </h1>
            <p className="text-base text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Apps have app stores. Code has GitHub. Websites have links. But how do you share that brilliant AI agent you built? AgentDrop makes it effortless.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link 
                to="/registry"
                className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Browse Registry
              </Link>
              <Link
                to="/registry"
                className="px-6 py-3 border border-gray-300 text-black text-sm font-medium hover:border-black transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto mb-32 border-t border-gray-200 pt-12">
            <div className="text-center">
              <div className="text-3xl font-light text-black mb-2">127K+</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-black mb-2">1,200+</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-black mb-2">50+</div>
              <div className="text-xs uppercase tracking-wider text-gray-500">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-black mb-4">The Problem is Real</h2>
            <p className="text-sm text-gray-500">And it's only getting bigger</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Problem 01 */}
            <div className="border border-gray-200 p-10 hover:border-gray-400 transition-colors">
              <div className="text-xs font-mono text-gray-400 mb-6">01</div>
              <h3 className="text-2xl font-normal text-black mb-4">You Can't Share Your Agent</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                You built an email assistant that saves you 2 hours daily. Your friend wants it. Now what? Send them a ZIP file? Share a GitHub repo? Walk them through setup? There's no simple "send" button.
              </p>
              <p className="text-xs text-gray-400 italic border-l-2 border-gray-200 pl-4">
                "I literally had to schedule a 30-minute call to help my colleague set up my meeting scheduler agent." — Dev, San Francisco
              </p>
            </div>

            {/* Problem 02 */}
            <div className="border border-gray-200 p-10 hover:border-gray-400 transition-colors">
              <div className="text-xs font-mono text-gray-400 mb-6">02</div>
              <h3 className="text-2xl font-normal text-black mb-4">Setup Friction is Massive</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Even with documentation, getting someone else's agent running requires environment setup, dependency installation, API key configuration, and debugging. Most people give up.
              </p>
              <p className="text-xs text-gray-400 italic border-l-2 border-gray-200 pl-4">
                "I shared my news curator agent with 10 people. Only 2 got it working." — Marcus, London
              </p>
            </div>

            {/* Problem 03 */}
            <div className="border border-gray-200 p-10 hover:border-gray-400 transition-colors">
              <div className="text-xs font-mono text-gray-400 mb-6">03</div>
              <h3 className="text-2xl font-normal text-black mb-4">No Discovery Mechanism</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Thousands of people are building amazing agents right now. But there's no place to discover them. No ratings. No reviews. Brilliant tools remain invisible.
              </p>
              <p className="text-xs text-gray-400 italic border-l-2 border-gray-200 pl-4">
                "I spent weeks building something that already existed. I just didn't know." — Aisha, Mumbai
              </p>
            </div>

            {/* Problem 04 */}
            <div className="border border-gray-200 p-10 hover:border-gray-400 transition-colors">
              <div className="text-xs font-mono text-gray-400 mb-6">04</div>
              <h3 className="text-2xl font-normal text-black mb-4">Trust & Quality Unknown</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                When you do find an agent, how do you know it's good? Safe? Maintained? There's no reputation system, no usage stats. You're flying blind.
              </p>
              <p className="text-xs text-gray-400 italic border-l-2 border-gray-200 pl-4">
                "Downloaded an agent from Reddit. Spent hours debugging. Turned out it was abandoned 6 months ago." — Chen, Singapore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-black mb-4">Why This Matters Now</h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              We're at the inflection point. The agent economy is about to explode.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-xs font-mono text-gray-400 mb-8">01</div>
              <h3 className="text-lg font-normal text-black mb-4">The Agent Wave</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                By 2026, experts predict every knowledge worker will use 3-5 personal AI agents daily. That's billions of agents that need to be shared, discovered, and deployed.
              </p>
            </div>

            <div className="text-center">
              <div className="text-xs font-mono text-gray-400 mb-8">02</div>
              <h3 className="text-lg font-normal text-black mb-4">Network Effects</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The platform with the best agent distribution will win. Just like the App Store changed mobile, AgentDrop will define the agent era.
              </p>
            </div>

            <div className="text-center">
              <div className="text-xs font-mono text-gray-400 mb-8">03</div>
              <h3 className="text-lg font-normal text-black mb-4">Democratizing AI</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Today, building agents requires technical skills. But using them shouldn't. AgentDrop makes powerful AI accessible to everyone, not just developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-black mb-4">How AgentDrop Works</h2>
            <p className="text-sm text-gray-500">Three simple steps to agent sharing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="border border-gray-200 p-10">
              <div className="text-xs font-mono text-gray-400 mb-8">01</div>
              <h3 className="text-lg font-normal text-black mb-4">Browse the Registry</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Discover thousands of agents organized by category. See ratings, downloads, and detailed use cases. Find exactly what you need.
              </p>
            </div>

            <div className="border border-gray-200 p-10">
              <div className="text-xs font-mono text-gray-400 mb-8">02</div>
              <h3 className="text-lg font-normal text-black mb-4">Copy the Command</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every agent has a simple .agent command. One click to copy. No config files, no setup scripts, no headaches.
              </p>
            </div>

            <div className="border border-gray-200 p-10">
              <div className="text-xs font-mono text-gray-400 mb-8">03</div>
              <h3 className="text-lg font-normal text-black mb-4">Install & Run</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Paste the command in your terminal. The agent installs, configures, and starts working. It's that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-black mb-8">The Vision</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Imagine a world where sharing your email assistant is as easy as sending a link. Where discovering a perfect productivity agent takes 30 seconds, not 30 days. Where the collective intelligence of millions of AI agents is accessible to everyone.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            That's the world we're building. AgentDrop isn't just a registry—it's the infrastructure for the agent economy. The distribution layer for AI automation. The App Store for personal intelligence.
          </p>
          <p className="text-lg font-normal text-black">
            The future runs on agents. Let's make them shareable.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 border-t border-gray-200 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Ready to Explore?</h2>
          <p className="text-sm text-gray-400 mb-12">
            Join thousands of creators and users building the agent future
          </p>
          <Link 
            to="/registry"
            className="inline-block px-6 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Browse Agent Registry
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
