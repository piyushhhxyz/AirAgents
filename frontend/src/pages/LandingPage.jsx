import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Masthead */}
      <section className="pt-32 pb-16 px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <pre className="text-[10px] text-gray-400 leading-tight font-mono inline-block">
{`    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║           A G E N T D R O P                                   ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝`}
            </pre>
          </div>
          <h1 className="font-['Playfair_Display'] font-black text-[96px] leading-none text-black mb-6">
            Airdrop Your
            <br />
            <span className="italic">AI Agents.</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-2xl text-gray-500 mb-8">
            <span>━━━━━</span>
            <span className="text-sm uppercase tracking-widest">The Distribution Layer</span>
            <span>━━━━━</span>
          </div>
        </div>
      </section>

      {/* Hero Statement - REMOVED */}

      {/* The Innovation */}
      <section className="py-20 px-6 border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <div className="mb-12">
                <div className="inline-block mb-4">
                  <pre className="text-[8px] text-gray-400 font-mono leading-tight">
{`    ┌─────────────────────────────┐
    │   THE  .AGENT  FORMAT       │
    └─────────────────────────────┘`}
                  </pre>
                </div>
                <h2 className="font-['Playfair_Display'] font-black text-[64px] leading-[1.1] text-black mb-8">
                  Install Once.
                  <br />
                  Share Forever.
                </h2>
              </div>
              
              <div className="columns-2 gap-12 text-lg text-gray-700 leading-relaxed mb-12">
                <p className="mb-6">
                  Every technology has its distribution format. iOS has .ipa files. Android has .apk. Docker has .tar images.
                </p>
                <p className="mb-6">
                  <span className="font-bold text-black text-2xl">But AI agents?</span> Nothing. Just scattered files, broken repos, and hours of setup.
                </p>
                <p className="mb-6">
                  We created <span className="font-mono bg-gray-100 px-2 py-1 text-black font-semibold">.agent</span> — a standard format that packages workflows, prompts, skills, and dependencies into one shareable file.
                </p>
                <p className="mb-6 text-2xl font-bold text-black">
                  Airdrop it. Install it. Use it.
                </p>
              </div>

              <div className="bg-black text-white p-10 mb-8 relative overflow-hidden">
                <div className="font-mono text-sm mb-4">
                  <div className="text-gray-500 mb-2"># One-time setup</div>
                  <div className="text-xl font-bold mb-6">$ brew install agent</div>
                  <div className="text-gray-500 mb-2"># Share any agent, forever</div>
                  <div className="text-xl font-bold">$ .agent install email-assistant.agent</div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4">
                  <div className="text-sm text-gray-400">✓ No config files. No setup scripts. No cloud. Just works.</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link to="/registry" className="px-8 py-4 bg-[#d97757] text-white text-base font-semibold hover:bg-[#c86646] transition-all">
                  Browse Registry →
                </Link>
                <a href="#vision" className="px-8 py-4 border-2 border-black text-black text-base font-semibold hover:bg-black hover:text-white transition-all">
                  The Vision
                </a>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="border-l-4 border-black pl-8 sticky top-32">
                <div className="mb-8">
                  <pre className="text-[10px] text-gray-400 font-mono leading-tight mb-4">
{`    ┏━━━━━━━━━━━━━━━━━━━━━┓
    ┃  WHAT'S INSIDE      ┃
    ┗━━━━━━━━━━━━━━━━━━━━━┛`}
                  </pre>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d97757] font-bold">▸</span>
                      <span>Workflow definitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d97757] font-bold">▸</span>
                      <span>System prompts & templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d97757] font-bold">▸</span>
                      <span>Skill declarations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d97757] font-bold">▸</span>
                      <span>Dependency graph</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d97757] font-bold">▸</span>
                      <span>Runtime configuration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 border-2 border-gray-200">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">File Size</div>
                  <div className="text-4xl font-black text-black mb-2">~2KB</div>
                  <div className="text-sm text-gray-600">Average agent package</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem → Solution */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <pre className="text-[10px] text-gray-400 font-mono leading-tight mb-6 inline-block">
{`    ════════════════════════════════════════════════════════
    ║                    THE  PROBLEM                      ║
    ════════════════════════════════════════════════════════`}
            </pre>
            <h2 className="font-['Playfair_Display'] font-black text-[56px] leading-tight text-black">
              Three Missing Pieces
            </h2>
          </div>

          <div className="columns-3 gap-10 text-base text-gray-700 leading-relaxed">
            <div className="mb-10 break-inside-avoid bg-white border-2 border-gray-300 p-8">
              <div className="text-6xl font-black text-black mb-4">01</div>
              <h3 className="font-bold text-xl text-black mb-4 border-b-2 border-black pb-2">No Format</h3>
              <p className="mb-4">
                iOS → <span className="font-mono">.ipa</span><br/>
                Android → <span className="font-mono">.apk</span><br/>
                Docker → <span className="font-mono">.tar</span><br/>
                Agents → <span className="font-bold">Nothing</span>
              </p>
            </div>

            <div className="mb-10 break-inside-avoid bg-white border-2 border-gray-300 p-8">
              <div className="text-6xl font-black text-black mb-4">02</div>
              <h3 className="font-bold text-xl text-black mb-4 border-b-2 border-black pb-2">No Registry</h3>
              <p>
                Thousands of agents exist. On GitHub. On Discord. But no central place to discover, search, or install them.
              </p>
            </div>

            <div className="mb-10 break-inside-avoid bg-white border-2 border-gray-300 p-8">
              <div className="text-6xl font-black text-black mb-4">03</div>
              <h3 className="font-bold text-xl text-black mb-4 border-b-2 border-black pb-2">No Composability</h3>
              <p>
                Agents should build on agents. Like npm packages. Like microservices. But everything is a monolith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-20 px-6 border-t-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <pre className="text-[10px] text-gray-400 font-mono leading-tight mb-6 inline-block">
{`    ┌───────────────────────────────────────────────────────────┐
    │                   WHAT  YOU  CAN  DO                      │
    └───────────────────────────────────────────────────────────┘`}
            </pre>
            <h2 className="font-['Playfair_Display'] font-black text-[56px] leading-tight text-black">
              Four Superpowers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-300 hover:border-[#d97757] transition-all">
              <div className="bg-gray-50 p-6 border-b-2 border-gray-300">
                <h3 className="font-bold text-2xl text-black">Compose Agents</h3>
              </div>
              <div className="p-8">
                <div className="bg-gray-100 p-4 font-mono text-xs text-black mb-4">
                  $ .agent install my-workflow<br/>
                  <span className="text-gray-600">↳ Auto-fetches: email-parser.agent</span><br/>
                  <span className="text-gray-600">↳ Auto-fetches: summarizer.agent</span>
                </div>
                <p className="text-sm text-gray-700">
                  Complex workflows from simple components. Dependencies resolve automatically.
                </p>
              </div>
            </div>

            <div className="border-2 border-gray-300 hover:border-[#d97757] transition-all">
              <div className="bg-gray-50 p-6 border-b-2 border-gray-300">
                <h3 className="font-bold text-2xl text-black">Find Tested Agents</h3>
              </div>
              <div className="p-8">
                <div className="bg-gray-100 p-4 font-mono text-xs text-black mb-4">
                  $ .agent search "automation"<br/>
                  <span className="text-gray-600">→ 1,200+ working agents</span><br/>
                  <span className="text-gray-600">→ Ratings, downloads, reviews</span>
                </div>
                <p className="text-sm text-gray-700">
                  Stop rebuilding. Search, evaluate, install. The registry has what you need.
                </p>
              </div>
            </div>

            <div className="border-2 border-gray-300 hover:border-[#d97757] transition-all">
              <div className="bg-gray-50 p-6 border-b-2 border-gray-300">
                <h3 className="font-bold text-2xl text-black">Share Instantly</h3>
              </div>
              <div className="p-8">
                <div className="bg-gray-100 p-4 font-mono text-xs text-black mb-4">
                  $ .agent publish my-assistant.agent<br/>
                  <span className="text-gray-600">✓ Uploaded to registry</span><br/>
                  <span className="text-gray-600">✓ Instantly shareable</span>
                </div>
                <p className="text-sm text-gray-700">
                  Package once. Share everywhere. Via registry or airdrop. No servers needed.
                </p>
              </div>
            </div>

            <div className="border-2 border-gray-300 hover:border-[#d97757] transition-all">
              <div className="bg-gray-50 p-6 border-b-2 border-gray-300">
                <h3 className="font-bold text-2xl text-black">Build Together</h3>
              </div>
              <div className="p-8">
                <div className="bg-gray-100 p-4 font-mono text-xs text-black mb-4">
                  $ .agent fork email-parser<br/>
                  <span className="text-gray-600">→ Extend functionality</span><br/>
                  <span className="text-gray-600">→ Contribute improvements</span>
                </div>
                <p className="text-sm text-gray-700">
                  Open source for AI. Fork, extend, contribute. The agent economy is collaborative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section id="vision" className="py-32 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <pre className="text-[10px] text-gray-600 font-mono leading-tight mb-12 inline-block">
{`    ╔══════════════════════════════════════════════════════════╗
    ║                                                          ║
    ║                   T H E   V I S I O N                    ║
    ║                                                          ║
    ╚══════════════════════════════════════════════════════════╝`}
          </pre>

          <h2 className="font-['Playfair_Display'] font-black text-[64px] leading-tight mb-12">
            The App Store
            <br />
            for the
            <br />
            <span className="italic">Agent Era.</span>
          </h2>

          <div className="text-2xl text-gray-300 leading-relaxed mb-16 space-y-6">
            <p>Apps needed the App Store.</p>
            <p>Code needed GitHub.</p>
            <p>Packages needed npm.</p>
            <p className="text-white text-3xl font-bold">Agents need AgentDrop.</p>
          </div>

          <div className="border-t-2 border-gray-700 pt-12">
            <p className="text-lg text-gray-400 mb-8">
              We're building the infrastructure layer for a $50 billion market.
              <br />
              The distribution mechanism that makes the agent economy possible.
            </p>
            <Link 
              to="/registry"
              className="inline-block px-10 py-5 bg-[#d97757] text-white text-lg font-semibold hover:bg-[#c86646] transition-all"
            >
              Start Building →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4 border-black bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <pre className="text-[8px] text-gray-400 font-mono leading-tight mb-4 inline-block">
{`    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    AgentDrop  —  Built for the agent economy  —  2025
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`}
          </pre>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;