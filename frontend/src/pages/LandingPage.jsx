import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <div className="inline-block border border-black px-4 py-2 text-xs uppercase tracking-widest">
              The Agent Distribution Layer
            </div>
          </div>
          
          <h1 className="font-['Playfair_Display'] font-black text-[120px] leading-[0.95] tracking-tight text-black mb-12 max-w-6xl">
            Airdrop Your
            <br />
            <span className="italic">AI Agents.</span>
          </h1>
          
          <p className="text-[22px] text-gray-700 leading-relaxed mb-8 max-w-4xl">
            You built an email assistant that saves you 2 hours daily. It runs locally on your machine. Your friend wants it. How do you share it?
          </p>

          <p className="text-[22px] text-black font-semibold leading-relaxed mb-12 max-w-4xl">
            Wrap it in an app? Deploy it to cloud? Send a GitHub repo with 30-minute setup instructions?
          </p>

          <p className="text-[28px] text-black font-bold leading-relaxed mb-16 max-w-4xl">
            Just airdrop the <span className="font-mono bg-gray-100 px-2">.agent</span> file.
          </p>
          
          {/* Command Example */}
          <div className="mb-16 max-w-4xl">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Installing an agent (one-time setup)</p>
            <div className="bg-[#fafafa] border border-gray-200 p-8">
              <div className="font-mono text-black text-sm">
                <div className="mb-1 text-gray-500"># Install agent CLI once via brew</div>
                <div className="mb-6">brew install agent</div>
                <div className="mb-1 text-gray-500"># Now use ANY agent forever</div>
                <div>.agent install email-concierge.agent</div>
                <div className="mt-4 text-gray-500"># That's it. No config. No API setup. Just works.</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-24">
            <Link 
              to="/registry"
              className="px-8 py-4 bg-[#d97757] text-white text-sm font-medium hover:bg-[#c86646] transition-all duration-200"
            >
              Browse Registry
            </Link>
            <a
              href="#problem"
              className="px-8 py-4 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
            >
              Why This Matters
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-6">
              The Medium
              <br />
              Problem.
            </h2>
            <p className="text-gray-700 text-xl max-w-3xl">
              Every technology has a distribution format. Agents don't. Until now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Problem 01 */}
            <div className="bg-white border-2 border-gray-200 p-12 hover:border-[#d97757] transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">01</div>
              <h3 className="text-3xl font-semibold text-black mb-6">No Standard Format</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                iOS apps have <span className="font-mono bg-gray-100 px-1">.ipa</span> files. Android has <span className="font-mono bg-gray-100 px-1">.apk</span>. Docker has <span className="font-mono bg-gray-100 px-1">.tar</span> images. Git repositories have <span className="font-mono bg-gray-100 px-1">.git</span>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                But AI agents? There's nothing. Just scattered Python files, config JSONs, and pray-it-works README files.
              </p>
              <p className="text-black font-semibold">
                Agents need a standard format. A way to package workflows, prompts, skills, and tools into one shareable unit.
              </p>
            </div>

            {/* Problem 02 */}
            <div className="bg-white border-2 border-gray-200 p-12 hover:border-[#d97757] transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">02</div>
              <h3 className="text-3xl font-semibold text-black mb-6">Forced Cloud Deployment</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your email assistant is personal. It runs locally. It doesn't need cloud. It doesn't need a server. It doesn't need to be "deployed."
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                But to share it? You have to wrap it in a web app, deploy to Vercel, manage API endpoints, handle auth, and maintain infrastructure.
              </p>
              <p className="text-black font-semibold">
                Not every agent needs to be an app. Most shouldn't be.
              </p>
            </div>

            {/* Problem 03 */}
            <div className="bg-white border-2 border-gray-200 p-12 hover:border-[#d97757] transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">03</div>
              <h3 className="text-3xl font-semibold text-black mb-6">No Discovery Layer</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Thousands of agents exist. On GitHub. On Discord. On Reddit. But there's no registry. No search. No "browse all meeting schedulers" page.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You either build from scratch or waste hours hunting through forums for something that might exist.
              </p>
              <p className="text-black font-semibold">
                Agents need a central registry. A single source of truth.
              </p>
            </div>

            {/* Problem 04 */}
            <div className="bg-white border-2 border-gray-200 p-12 hover:border-[#d97757] transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">04</div>
              <h3 className="text-3xl font-semibold text-black mb-6">Can't Compose Agents</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Agents should build on each other. Your meeting scheduler should use someone else's calendar parser. Your research agent should use someone's web scraper.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                But right now? Every agent is a monolith. No imports. No dependencies. No composition.
              </p>
              <p className="text-black font-semibold">
                Agents need composability. Like code libraries, but for AI workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-6">
              Introducing
              <br />
              <span className="font-mono">.agent</span> files.
            </h2>
            <p className="text-gray-700 text-xl max-w-3xl">
              A standard format for packaging and sharing AI agents. Install once. Share forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h3 className="text-3xl font-semibold text-black mb-8">How It Works</h3>
              <div className="space-y-10">
                <div>
                  <div className="text-xs font-mono text-gray-400 mb-3">01 — Install CLI Once</div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <span className="font-mono bg-gray-100 px-2 py-1">brew install agent</span> — One command. Downloads the agent runtime. Never think about it again.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 mb-3">02 — Share .agent Files</div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Package your agent into a <span className="font-mono bg-gray-100 px-2 py-1">.agent</span> file. It contains everything: workflow, prompts, skills, dependencies. Airdrop it. Email it. Upload to registry.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 mb-3">03 — Install & Run</div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Receiver runs <span className="font-mono bg-gray-100 px-2 py-1">.agent install file.agent</span> — Agent unpacks, sets up, and runs. Locally. No cloud. No deployment. Just works.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 p-10">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Example: Email Assistant</p>
                <div className="bg-black p-6 font-mono text-white text-sm mb-6">
                  .agent install email-concierge.agent
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-black">What's inside:</span> Email parsing workflow, GPT-4 system prompts, priority scoring logic, draft generation templates. All packaged. Ready to run.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-10">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Example: Composing Agents</p>
                <div className="bg-black p-6 font-mono text-white text-sm mb-6">
                  .agent install news-research.agent<br/>
                  <span className="text-gray-400"># Uses web-scraper.agent internally</span><br/>
                  <span className="text-gray-400"># Uses summarizer.agent internally</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-black">Composability:</span> Agents declare dependencies. The runtime fetches them automatically. Build complex workflows from simple agents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-8">
              Why This Is
              <br />
              <span className="italic">Massive.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="bg-white border border-gray-200 p-10">
              <div className="text-5xl font-black text-black mb-4">$50B+</div>
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">Projected Agent Market by 2028</p>
              <p className="text-gray-700 leading-relaxed">
                Gartner predicts every knowledge worker will use 3-5 personal agents daily by 2027. That's billions of agents that need distribution.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <div className="text-5xl font-black text-black mb-4">87%</div>
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">Of AI teams building agents</p>
              <p className="text-gray-700 leading-relaxed">
                OpenAI, Anthropic, Google all shipping agent frameworks. But no one solved distribution. We're the missing piece.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10">
              <div className="text-5xl font-black text-black mb-4">0</div>
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">Standardized formats exist today</p>
              <p className="text-gray-700 leading-relaxed">
                We're creating the category. First mover advantage. The .agent format becomes the standard. Like .exe for Windows. Like .app for Mac.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              Apps needed the App Store. Code needed GitHub. Packages needed npm. Docker images needed Docker Hub.
            </p>
            <p className="text-3xl text-black font-bold leading-relaxed">
              Agents need AgentDrop.
            </p>
            <p className="text-xl text-gray-600 mt-8">
              We're building the infrastructure layer for the agent economy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 border-t border-gray-200 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight mb-8">
            Start Sharing.
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Browse agents. Download the CLI. Build the future.
          </p>
          <Link 
            to="/registry"
            className="inline-block px-8 py-4 bg-[#d97757] text-white text-sm font-medium hover:bg-[#c86646] transition-colors"
          >
            Explore Agent Registry
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;