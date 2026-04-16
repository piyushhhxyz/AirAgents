import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-block border border-black px-4 py-2 text-xs uppercase tracking-widest mb-12">
              AI-Powered Agent Platform
            </div>
          </div>
          
          <h1 className="font-['Playfair_Display'] font-black text-[120px] leading-[0.95] tracking-tight text-black mb-12 max-w-6xl">
            Every Agent.
            <br />
            <span className="italic">Beautifully</span>
            <br />
            Shared.
          </h1>
          
          <p className="text-[20px] text-gray-600 leading-relaxed mb-16 max-w-2xl">
            Capture agents as they're built. Let the registry organize, connect, and surface your agents intelligently — then share the tools that define your workflow.
          </p>
          
          <div className="flex items-center gap-4 mb-24">
            <Link 
              to="/registry"
              className="px-6 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all duration-200"
            >
              Start Free
            </Link>
            <Link
              to="/registry"
              className="px-6 py-4 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
            >
              Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-16 max-w-4xl border-t border-gray-200 pt-16">
            <div>
              <div className="text-[48px] font-black text-black mb-2">127K+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Downloads</div>
            </div>
            <div>
              <div className="text-[48px] font-black text-black mb-2">1,200+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Creators</div>
            </div>
            <div>
              <div className="text-[48px] font-black text-black mb-2 flex items-center gap-2">
                4.9 <span className="text-[36px]">★</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-4">
              The Problem
              <br />
              is Real.
            </h2>
            <p className="text-gray-600 text-lg">And it's only getting bigger</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem 01 */}
            <div className="bg-white border border-gray-200 p-12 hover:border-black transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">01</div>
              <h3 className="text-3xl font-semibold text-black mb-6">You Can't Share Your Agent</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                You built an email assistant that saves you 2 hours daily. Your friend wants it. Now what? Send them a ZIP file? Share a GitHub repo? Walk them through setup?
              </p>
              <p className="text-sm text-gray-400 italic border-l-2 border-gray-200 pl-4">
                "I literally had to schedule a 30-minute call to help my colleague set up my meeting scheduler agent." — Dev, San Francisco
              </p>
            </div>

            {/* Problem 02 */}
            <div className="bg-white border border-gray-200 p-12 hover:border-black transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">02</div>
              <h3 className="text-3xl font-semibold text-black mb-6">Setup Friction is Massive</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Even with documentation, getting someone else's agent running requires environment setup, dependency installation, API key configuration, and debugging.
              </p>
              <p className="text-sm text-gray-400 italic border-l-2 border-gray-200 pl-4">
                "I shared my news curator agent with 10 people. Only 2 got it working." — Marcus, London
              </p>
            </div>

            {/* Problem 03 */}
            <div className="bg-white border border-gray-200 p-12 hover:border-black transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">03</div>
              <h3 className="text-3xl font-semibold text-black mb-6">No Discovery Mechanism</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Thousands of people are building amazing agents right now. But there's no place to discover them. No ratings. No reviews. Brilliant tools remain invisible.
              </p>
              <p className="text-sm text-gray-400 italic border-l-2 border-gray-200 pl-4">
                "I spent weeks building something that already existed. I just didn't know." — Aisha, Mumbai
              </p>
            </div>

            {/* Problem 04 */}
            <div className="bg-white border border-gray-200 p-12 hover:border-black transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">04</div>
              <h3 className="text-3xl font-semibold text-black mb-6">Trust & Quality Unknown</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                When you do find an agent, how do you know it's good? Safe? Maintained? There's no reputation system, no usage stats. You're flying blind.
              </p>
              <p className="text-sm text-gray-400 italic border-l-2 border-gray-200 pl-4">
                "Downloaded an agent from Reddit. Spent hours debugging. Turned out it was abandoned 6 months ago." — Chen, Singapore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-8">Simple 3-Step Process</div>
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black">
              From moment to
              <br />
              <span className="italic">memory</span> in seconds.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="border border-gray-200 p-12">
              <div className="text-xs font-mono text-gray-400 mb-8">01</div>
              <h3 className="text-2xl font-semibold text-black mb-6">Browse</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover thousands of agents organized by category. See ratings, downloads, and detailed use cases. Find exactly what you need.
              </p>
            </div>

            <div className="border border-gray-200 p-12">
              <div className="text-xs font-mono text-gray-400 mb-8">02</div>
              <h3 className="text-2xl font-semibold text-black mb-6">Copy</h3>
              <p className="text-gray-600 leading-relaxed">
                Every agent has a simple .agent command. One click to copy. No config files, no setup scripts, no headaches.
              </p>
            </div>

            <div className="border border-gray-200 p-12">
              <div className="text-xs font-mono text-gray-400 mb-8">03</div>
              <h3 className="text-2xl font-semibold text-black mb-6">Deploy</h3>
              <p className="text-gray-600 leading-relaxed">
                Paste the command in your terminal. The agent installs, configures, and starts working. It's that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 border-t border-gray-200 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight mb-8">
            Ready to
            <br />
            <span className="italic">Explore?</span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Join thousands of creators and users building the agent future
          </p>
          <Link 
            to="/registry"
            className="inline-block px-8 py-4 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
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