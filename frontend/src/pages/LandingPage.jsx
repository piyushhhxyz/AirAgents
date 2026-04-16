import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Newspaper Header */}
      <div className="border-b-4 border-black py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xs uppercase tracking-widest text-gray-500">
            The Future of Agents
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-500">
            April 2026
          </div>
        </div>
      </div>

      {/* Hero Editorial */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-['Playfair_Display'] font-black text-[120px] leading-[0.95] text-black mb-12">
            Agents are the new apps.
            <br />
            <span className="text-gray-400">Sharing them</span>
            <br />
            shouldn't be hard.
          </h1>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                Apps have the App Store. Code has Git. Websites have URLs.
              </p>
              <p className="text-3xl text-black font-bold leading-relaxed">
                But how do you share a personal AI agent?
              </p>
            </div>
            <div className="border-l-4 border-black pl-8">
              <Link 
                to="/registry"
                className="inline-block px-10 py-5 bg-black text-white text-lg font-semibold hover:bg-[#d97757] transition-all mb-8"
              >
                Browse Agent Registry →
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                Over 1,200 agents ready to install. One command. Zero setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASCII Art Section */}
      <section className="py-16 px-8 bg-gray-50 border-y-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <pre className="text-[8px] font-mono text-gray-600 leading-tight mb-8">
{`    ┌────────────────────────────────────────────────────────────┐
    │                                                            │
    │     [Agent A]  ──┐                                         │
    │                  │                                         │
    │     [Agent B]  ──┼───▶  .agent file  ──▶  [Airdrop]       │
    │                  │                                         │
    │     [Agent C]  ──┘                                         │
    │                                                            │
    │     One format. Universal sharing.                         │
    │                                                            │
    └────────────────────────────────────────────────────────────┘`}
              </pre>
              <div className="bg-black text-white p-6 font-mono text-xs">
                <div className="text-gray-400 mb-2"># Pack any agent</div>
                <div className="text-lg">$ brewagent pack my-agent</div>
                <div className="text-gray-400 mt-4 mb-2"># Share the .agent file</div>
                <div className="text-lg">$ my-agent-1.0.0.agent</div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-6">The Innovation</div>
              <h2 className="text-5xl font-['Playfair_Display'] font-black text-black mb-6 leading-tight">
                A single file that contains everything
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The .agent format packages workflows, prompts, skills, and dependencies into one portable file. Like .ipa for iOS. Like .apk for Android.
              </p>
              <p className="text-xl text-black font-semibold">
                Install once. Share forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-['Playfair_Display'] font-black text-black mb-4">
              The Market is Exploding
            </h2>
            <p className="text-gray-600">Three numbers that tell the story</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="border-4 border-gray-300 p-12 text-center hover:border-[#d97757] transition-all cursor-pointer"
              onMouseEnter={() => setHoveredStat('market')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="text-8xl font-black text-black mb-4">$50B+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">By 2028</div>
              {hoveredStat === 'market' && (
                <p className="text-sm text-gray-700 leading-relaxed">
                  Gartner predicts every knowledge worker will use 3-5 personal agents by 2027. That's billions of agents needing distribution.
                </p>
              )}
            </div>

            <div 
              className="border-4 border-gray-300 p-12 text-center hover:border-[#d97757] transition-all cursor-pointer"
              onMouseEnter={() => setHoveredStat('teams')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="text-8xl font-black text-black mb-4">87%</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">Teams Building</div>
              {hoveredStat === 'teams' && (
                <p className="text-sm text-gray-700 leading-relaxed">
                  OpenAI, Anthropic, Google—everyone is shipping agent frameworks. But nobody solved distribution until now.
                </p>
              )}
            </div>

            <div 
              className="border-4 border-gray-300 p-12 text-center hover:border-[#d97757] transition-all cursor-pointer"
              onMouseEnter={() => setHoveredStat('standards')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="text-8xl font-black text-black mb-4">0</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">Standards Today</div>
              {hoveredStat === 'standards' && (
                <p className="text-sm text-gray-700 leading-relaxed">
                  We're creating the category. The .agent format becomes THE standard. First mover advantage.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Newspaper Columns */}
      <section className="py-20 px-8 bg-gray-50 border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Problem</div>
            <h2 className="text-6xl font-['Playfair_Display'] font-black text-black leading-tight">
              Agents Are
              <br />
              Trapped Inside
              <br />
              <span className="italic">Platforms.</span>
            </h2>
          </div>

          <div className="columns-3 gap-12 text-base text-gray-700 leading-relaxed">
            <p className="mb-6">
              You've built a genuinely useful AI agent. It saves you hours every day. Your colleague sees it and wants it.
            </p>
            <p className="mb-6 font-bold text-black text-xl">
              Now what?
            </p>
            <p className="mb-6">
              If you built it in ChatGPT, it's locked in the GPT Store. Your friend needs a ChatGPT account. If you built it in Claude, it lives in your Projects—untransferable. If you built it yourself, they need to clone your repo, configure environments, get API keys, and pray nothing breaks.
            </p>
            <p className="mb-6">
              <span className="font-mono bg-gray-200 px-2 py-1">.ipa</span> files let you share iOS apps. <span className="font-mono bg-gray-200 px-2 py-1">.apk</span> files let you share Android apps. Agents had nothing. Until now.
            </p>
            <p className="mb-6 text-black font-semibold text-lg">
              The .agent format is the missing piece.
            </p>
            <p className="mb-6">
              One file that travels. Airdrop it. Email it. Post it. The person receiving it doesn't need your platform, your environment, or your workflow. They open the file and the agent runs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Interactive */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-['Playfair_Display'] font-black text-black mb-6">
              Three Steps.
              <br />
              That's It.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="border-l-4 border-black pl-8">
              <div className="text-7xl font-black text-black mb-4">01</div>
              <h3 className="text-2xl font-bold text-black mb-4">Install brewagent</h3>
              <div className="bg-gray-100 p-4 font-mono text-sm text-black mb-4">
                $ npm install -g brewagent
              </div>
              <p className="text-sm text-gray-700">
                One-time setup. Works everywhere.
              </p>
            </div>

            <div className="border-l-4 border-black pl-8">
              <div className="text-7xl font-black text-black mb-4">02</div>
              <h3 className="text-2xl font-bold text-black mb-4">Pack your agent</h3>
              <div className="bg-gray-100 p-4 font-mono text-sm text-black mb-4">
                $ brewagent pack my-agent
              </div>
              <p className="text-sm text-gray-700">
                Creates a portable .agent file.
              </p>
            </div>

            <div className="border-l-4 border-black pl-8">
              <div className="text-7xl font-black text-black mb-4">03</div>
              <h3 className="text-2xl font-bold text-black mb-4">Share anywhere</h3>
              <div className="bg-gray-100 p-4 font-mono text-sm text-black mb-4">
                $ my-agent-1.0.0.agent
              </div>
              <p className="text-sm text-gray-700">
                Airdrop, email, Slack. Just works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <pre className="text-[10px] font-mono text-gray-600 mb-12 inline-block">
{`    ╔════════════════════════════════════════════════════════╗
    ║                                                        ║
    ║         "The App Store for the Agent Era"              ║
    ║                                                        ║
    ╚════════════════════════════════════════════════════════╝`}
          </pre>
          <p className="text-5xl font-['Playfair_Display'] font-bold leading-tight mb-12">
            Apps needed the App Store.
            <br />
            Code needed GitHub.
            <br />
            <span className="italic">Agents need brewagent.</span>
          </p>
          <Link 
            to="/registry"
            className="inline-block px-12 py-6 bg-[#d97757] text-white text-xl font-semibold hover:bg-[#c86646] transition-all"
          >
            Explore the Registry →
          </Link>
        </div>
      </section>

      {/* Footer Attribution */}
      <footer className="py-8 px-8 border-t-2 border-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-gray-500">
          <div>AgentDrop — Built for the agent economy</div>
          <div>2025</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;