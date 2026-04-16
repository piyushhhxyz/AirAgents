import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  const [hoveredCommand, setHoveredCommand] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Newspaper Header */}
      <div className="border-b-4 border-black py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xs uppercase tracking-widest text-gray-500">
            Agents on AIR
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-500">
            the-nest.sh
          </div>
        </div>
      </div>

      {/* Hero Editorial */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-['Playfair_Display'] font-black text-[120px] leading-[0.95] text-black mb-12">
            Agents are the new apps.
            <br />
            <span className="text-[#555555]">Sharing</span> them
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
                className="inline-block px-10 py-5 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-all"
              >
                Browse Agent Registry →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-8 bg-gray-50 border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Problem</div>
            <h2 className="text-6xl font-['Playfair_Display'] font-black text-black leading-tight">
              Agents Are
              <br />
              Trapped Inside
              <br />
              <span className="italic text-[#555555]">Platforms.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-base text-gray-700 leading-relaxed">
            <div>
              <p className="mb-4">
                You've built a genuinely useful AI agent. It saves you hours every day. Your colleague sees it and wants it.
              </p>
            </div>
            <div>
              <p className="mb-4 font-bold text-black text-xl">
                Now what?
              </p>
              <p className="mb-4">
                If you built it in ChatGPT, it's locked in the GPT Store. Your friend needs a ChatGPT account. If you built it in Claude, it lives in your Projects—untransferable.
              </p>
            </div>
            <div>
              <p className="mb-4">
                If you built it yourself, they need to clone your repo, configure environments, get API keys, and pray nothing breaks.
              </p>
              <p className="mb-4">
                <span className="font-mono bg-gray-200 px-2 py-1">.ipa</span> files let you share iOS apps. <span className="font-mono bg-gray-200 px-2 py-1">.apk</span> files let you share Android apps. Agents had nothing. Until now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Directory Tree Style */}
      <section className="py-20 px-8 bg-white border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-gray-400 mb-6">The Solution</div>
          
          <h2 className="font-['Playfair_Display'] font-black text-[64px] leading-[0.95] text-black mb-12">
            Introducing <span className="font-mono text-[#555555]">.agent</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                The .agent format is the missing piece.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                One file that travels. Airdrop it. Email it. Post it. The person receiving it doesn't need your platform, your environment, or your workflow.
              </p>
              <p className="text-2xl text-black font-bold italic">
                They open the file and the agent runs.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-300 p-6 font-mono text-sm">
              <div className="text-xs text-gray-500 mb-4">my-agent.agent</div>
              <div className="space-y-1 text-gray-700">
                <div className="pl-0">├── system_prompt.md</div>
                <div className="pl-0">├── tools/</div>
                <div className="pl-4">│   ├── search.py</div>
                <div className="pl-4">│   └── scraper.js</div>
                <div className="pl-0">├── knowledge/</div>
                <div className="pl-4">│   ├── docs.pdf</div>
                <div className="pl-4">│   └── context.txt</div>
                <div className="pl-0">├── config.json</div>
                <div className="pl-0">└── metadata.yaml</div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-300">
                <div className="text-[#555555] font-bold text-lg mb-1">.agent</div>
                <div className="text-xs text-gray-500">packed, signed, ready to share</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Compact */}
      <section className="py-16 px-8 border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">How It Works</div>
          <h2 className="text-4xl font-['Playfair_Display'] font-black text-black mb-8">Five Commands</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black text-white p-6 font-mono text-xs">
              <div className="text-gray-400 mb-1"># bundle</div>
              <div className="mb-3">$ agentbox pack ./my-tax-agent</div>
              <div className="text-gray-400 mb-4 text-xs">✓ packed → my-tax-agent.agent (2.1 MB)</div>
              
              <div className="text-gray-400 mb-1 mt-4"># publish</div>
              <div className="mb-3">$ agentbox publish --name @piyush/tax-agent</div>
              <div className="text-gray-400 mb-4 text-xs">✓ live at the-nest.sh/@piyush/tax-agent</div>
              
              <div className="text-gray-400 mb-1 mt-4"># install & run</div>
              <div className="mb-1">$ agentbox install @piyush/tax-agent</div>
              <div className="text-gray-400 mb-3 text-xs">✓ installed in 2.8s</div>
              <div>$ agentbox run tax-agent -m "What can I deduct?"</div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="border border-gray-300 p-4">
                <h3 className="text-lg font-bold text-[#555555] mb-1">pack</h3>
                <p className="text-xs text-gray-700">Bundle into signed .agent file</p>
              </div>
              <div className="border border-gray-300 p-4">
                <h3 className="text-lg font-bold text-[#555555] mb-1">publish</h3>
                <p className="text-xs text-gray-700">Push to The Nest under @you/name</p>
              </div>
              <div className="border border-gray-300 p-4">
                <h3 className="text-lg font-bold text-[#555555] mb-1">install</h3>
                <p className="text-xs text-gray-700">Install from registry or .agent file</p>
              </div>
              <div className="border border-gray-300 p-4">
                <h3 className="text-lg font-bold text-[#555555] mb-1">run</h3>
                <p className="text-xs text-gray-700">Execute agent with a message</p>
              </div>
              <div className="border border-gray-300 p-4">
                <h3 className="text-lg font-bold text-[#555555] mb-1">unpack</h3>
                <p className="text-xs text-gray-700">Inspect contents of any .agent file</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Swarms - Interactive */}
      <section className="py-16 px-8 bg-gray-50 border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">Agent Swarms</div>
          <h2 className="text-5xl font-['Playfair_Display'] font-black text-black leading-tight mb-2">
            Agents that call <span className="italic text-[#555555]">other agents.</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your orchestrator spawns sub-agents on demand — like npm install, at runtime.
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <div className="bg-black text-white p-5 font-mono text-[10px] h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="ml-2 text-gray-400">orchestrator.agent</span>
                </div>
                <div className="text-gray-400 mb-2"># Claude spawns sub-agents</div>
                <div className="mb-3">use agentbox</div>
                <div className="mb-4">task: research + write + post</div>
                <div className="text-gray-400 text-[9px] mb-1">→ agentbox run @sara/research \</div>
                <div className="text-gray-400 text-[9px] mb-3 ml-4">-m "STOPIC" | pipe to \</div>
                <div className="text-gray-400 text-[9px] mb-1">agentbox run @alex/writer \</div>
                <div className="text-gray-400 text-[9px] mb-3 ml-4">--style blog | pipe to \</div>
                <div className="text-gray-400 text-[9px]">agentbox run @piyush/linkedin-poster</div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="border-2 border-gray-300 p-6 bg-white h-full">
                <div className="text-center mb-4">
                  <div className="inline-block border-2 border-[#555555] bg-gray-100 px-6 py-3 mb-4 hover:bg-gray-200 transition-all cursor-pointer">
                    <div className="font-bold">orchestrator</div>
                    <div className="text-xs text-gray-600">your agent</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="border border-gray-300 p-3 text-center hover:border-[#555555] transition-all cursor-pointer">
                    <div className="text-[#555555] font-mono text-xs mb-1">@sara/</div>
                    <div className="text-[10px]">research</div>
                  </div>
                  <div className="border border-gray-300 p-3 text-center hover:border-[#555555] transition-all cursor-pointer">
                    <div className="text-[#555555] font-mono text-xs mb-1">@alex/</div>
                    <div className="text-[10px]">writer</div>
                  </div>
                  <div className="border border-gray-300 p-3 text-center hover:border-[#555555] transition-all cursor-pointer">
                    <div className="text-[#555555] font-mono text-xs mb-1">@piyush/</div>
                    <div className="text-[10px]">poster</div>
                  </div>
                </div>

                <div className="text-center mb-3">
                  <div className="text-[10px] text-gray-500">from The Nest</div>
                  <div className="h-8 border-l border-dashed border-gray-300 mx-auto"></div>
                </div>

                <div className="border-2 border-[#555555] bg-gray-100 p-4 text-center">
                  <div className="font-bold text-sm mb-1">published LinkedIn post</div>
                  <div className="text-[10px] text-gray-600">zero human intervention</div>
                </div>

                <p className="text-[10px] text-gray-500 mt-3 text-center">
                  sub-agents install automatically if not cached
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Nest Registry */}
      <section className="py-20 px-8 border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Platform</div>
            <h2 className="text-6xl font-['Playfair_Display'] font-black text-black leading-tight mb-6">
              Introducing <span className="italic text-[#555555]">The Nest</span> —
            </h2>
            <p className="text-2xl text-gray-700 italic">
              the agent registry. Think npm, but for AI agents.
            </p>
          </div>

          <div className="bg-gray-50 border-2 border-gray-300 p-8 mb-6">
            <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-gray-300">
              <div className="font-mono text-[#555555] text-xl">the-nest.sh</div>
              <div className="text-xs text-gray-500">12,847 agents · 2.1M installs</div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-l-4 border-[#555555] pl-6 py-4 bg-white">
                <div>
                  <div className="font-mono text-[#555555] font-bold mb-1">@piyush/tax-agent</div>
                  <div className="text-sm text-gray-600">AI tax advisor · bundled knowledge · GPT-4</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">finance</div>
                  <div className="text-sm font-bold">4.3k ↓</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-l-4 border-gray-300 pl-6 py-4 bg-white">
                <div>
                  <div className="font-mono text-gray-700 font-bold mb-1">@sara/research-assistant</div>
                  <div className="text-sm text-gray-600">Deep research · web search · citations</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">research</div>
                  <div className="text-sm font-bold">1.1k ↓</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-l-4 border-gray-300 pl-6 py-4 bg-white">
                <div>
                  <div className="font-mono text-gray-700 font-bold mb-1">@deepak/cold-outreach</div>
                  <div className="text-sm text-gray-600">Sales message crafter · personalized · high reply rate</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">sales</div>
                  <div className="text-sm font-bold">9.7k ↓</div>
                </div>
              </div>

              <div className="text-center py-4">
                <Link to="/registry" className="text-sm text-gray-500 hover:text-black">
                  more →
                </Link>
              </div>
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
    ║              Agents Should Travel.                     ║
    ║                                                        ║
    ╚════════════════════════════════════════════════════════╝`}
          </pre>
          <p className="text-5xl font-['Playfair_Display'] font-bold leading-tight mb-12">
            Apps needed the App Store.
            <br />
            Code needed GitHub.
            <br />
            <span className="italic">Agents need The Nest.</span>
          </p>
          <Link 
            to="/registry"
            className="inline-block px-12 py-6 bg-white text-black text-xl font-semibold hover:bg-gray-200 transition-all"
          >
            Explore the Registry →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t-2 border-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-gray-500">
          <div>Agents on AIR — Built for the agent economy</div>
          <div>2025</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;