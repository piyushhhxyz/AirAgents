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
              The Agent Distribution Layer
            </div>
          </div>
          
          <h1 className="font-['Playfair_Display'] font-black text-[120px] leading-[0.95] tracking-tight text-black mb-12 max-w-6xl">
            Airdrop Your
            <br />
            <span className="italic">AI Agents.</span>
          </h1>
          
          <p className="text-[20px] text-gray-600 leading-relaxed mb-12 max-w-3xl">
            You built a personal agent that saves you hours daily. Your friend wants it. Should you send a ZIP file? Share a GitHub repo? Walk them through setup for 30 minutes?
          </p>

          <p className="text-[20px] text-black font-medium leading-relaxed mb-16 max-w-3xl">
            Just share the command. Like npm for agents.
          </p>
          
          {/* Command Example */}
          <div className="mb-16 max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Installing an agent</p>
            <div className="bg-black p-8 font-mono text-white text-sm border-l-4 border-[#d97757]">
              <div className="mb-2 text-gray-400"># Your friend shares their email agent</div>
              <div>.agent install email-concierge</div>
              <div className="mt-4 text-gray-400"># It just works. No setup. No config files.</div>
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
              See the Problem
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-4">
              The Sharing
              <br />
              Problem.
            </h2>
            <p className="text-gray-600 text-lg">Everyone will have 2-3 personal agents by 2026. But sharing them is broken.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem 01 */}
            <div className="bg-white border-2 border-gray-200 p-12 hover:border-[#d97757] transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">01</div>
              <h3 className="text-3xl font-semibold text-black mb-6">No "Send" Button</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can airdrop photos. Share Notion docs. Send apps via links. But agents? You're stuck with:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>→ Zipping files and emailing</li>
                <li>→ Creating private GitHub repos</li>
                <li>→ 30-minute setup calls</li>
                <li>→ Environment configuration docs</li>
              </ul>
            </div>

            {/* Problem 02 */}
            <div className="bg-white border-2 border-gray-200 p-12 hover:border-[#d97757] transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">02</div>
              <h3 className="text-3xl font-semibold text-black mb-6">Discovery is Impossible</h3>
              <p className="text-gray-600 leading-relaxed">
                Thousands of brilliant agents exist right now. But there's no registry. No search. No ratings. You build from scratch what already exists, or waste hours searching Discord servers and Reddit threads.
              </p>
            </div>

            {/* Problem 03 */}
            <div className="bg-white border-2 border-gray-200 p-12 hover:border-[#d97757] transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">03</div>
              <h3 className="text-3xl font-semibold text-black mb-6">Can't Build on Each Other</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In code, you import libraries. In AI, agents should compose:
              </p>
              <div className="bg-gray-50 p-4 font-mono text-sm text-gray-700 border-l-2 border-gray-300">
                .agent install email-parser<br/>
                .agent install calendar-sync<br/>
                .agent install meeting-scheduler
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                Your meeting agent uses the email parser. Like npm packages. But that doesn't exist yet.
              </p>
            </div>

            {/* Problem 04 */}
            <div className="bg-white border-2 border-gray-200 p-12 hover:border-[#d97757] transition-all duration-300">
              <div className="text-xs font-mono text-gray-400 mb-8">04</div>
              <h3 className="text-3xl font-semibold text-black mb-6">Setup Hell</h3>
              <p className="text-gray-600 leading-relaxed">
                Even if someone shares their agent, you need: API keys, Python 3.11, specific libraries, environment variables, config files. Most people give up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-4">
              The Solution.
            </h2>
            <p className="text-gray-600 text-lg">A registry for agents. Like npm. Like the App Store. But for personal AI.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">How It Works</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-xs font-mono text-gray-400 mb-2">01 — Discover</div>
                  <p className="text-gray-700">Browse the registry. See what agents exist. Read reviews. Check downloads.</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 mb-2">02 — Install</div>
                  <p className="text-gray-700">Copy one command. Paste in terminal. The agent installs with all dependencies.</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 mb-2">03 — Compose</div>
                  <p className="text-gray-700">Build agents that use other agents. Create workflows. Share your creations.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 p-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Example: Email Assistant</p>
                <div className="bg-black p-6 font-mono text-white text-sm mb-4">
                  .agent install email-concierge
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-black">What it does:</span> Reads your inbox, prioritizes messages, drafts quick replies, flags urgent items.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Example: Composing Agents</p>
                <div className="bg-black p-6 font-mono text-white text-sm mb-4">
                  .agent install news-curator<br/>
                  .agent install summarizer<br/>
                  .agent install slack-bot
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-black">Result:</span> News curator fetches articles → summarizer condenses them → slack-bot posts to your channel. Three agents, one workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] font-black text-[64px] leading-tight text-black mb-8">
            The agent economy needs infrastructure.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Apps needed the App Store. Code needed GitHub. Docker images needed Docker Hub.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Agents need AgentDrop.
          </p>
          <p className="text-xl text-black font-medium">
            The distribution layer for the agent era.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 border-t border-gray-200 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight mb-8">
            Start Sharing.
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Browse agents built by creators worldwide
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