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
          
          <div className="max-w-4xl mb-16">
            <p className="text-[32px] text-black font-semibold leading-tight mb-8">
              Install once. Share forever.
            </p>
            
            <div className="bg-[#fafafa] border border-gray-200 p-8 mb-8">
              <div className="font-mono text-black text-base">
                <div className="mb-1 text-gray-500"># One-time setup</div>
                <div className="mb-6 text-lg font-semibold">brew install agent</div>
                <div className="mb-1 text-gray-500"># Share any agent</div>
                <div className="text-lg font-semibold">.agent install email-assistant.agent</div>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Introducing <span className="font-mono bg-gray-100 px-2 font-semibold text-black">.agent</span> files — a standard format for packaging and sharing AI agents. Like <span className="font-mono">.apk</span> for Android, <span className="font-mono">.ipa</span> for iOS.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/registry"
              className="px-8 py-4 bg-[#d97757] text-white text-sm font-medium hover:bg-[#c86646] transition-all duration-200"
            >
              Browse Agents
            </Link>
            <a
              href="#usecases"
              className="px-8 py-4 border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
            >
              See Use Cases
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-6">
              The Problem.
            </h2>
            <p className="text-gray-700 text-2xl max-w-3xl">
              Every technology has a distribution format. Agents don't.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 p-10 hover:border-[#d97757] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-black mb-4">No Standard Format</h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-mono bg-gray-100 px-1">.ipa</span> for iOS. <span className="font-mono bg-gray-100 px-1">.apk</span> for Android. <span className="font-mono bg-gray-100 px-1">.tar</span> for Docker.
              </p>
              <p className="text-black font-semibold mt-4">
                Agents? Nothing.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-10 hover:border-[#d97757] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-black mb-4">No Registry</h3>
              <p className="text-gray-700 leading-relaxed">
                Thousands of agents exist on GitHub, Discord, Reddit.
              </p>
              <p className="text-black font-semibold mt-4">
                But no way to discover them.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-10 hover:border-[#d97757] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-black mb-4">Can't Compose</h3>
              <p className="text-gray-700 leading-relaxed">
                Your agent should use someone's calendar parser. Their scraper.
              </p>
              <p className="text-black font-semibold mt-4">
                But everything is a monolith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-6">
              What You Can Do.
            </h2>
            <p className="text-gray-700 text-2xl">
              The possibilities with AgentDrop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Use Case 1 */}
            <div className="border-2 border-gray-200 overflow-hidden hover:border-[#d97757] transition-all duration-300">
              <div className="bg-gray-50 p-8 border-b-2 border-gray-200">
                <h3 className="text-2xl font-semibold text-black">Agents Can Call Agents</h3>
              </div>
              <div className="p-8">
                <div className="bg-black p-6 font-mono text-white text-sm mb-6">
                  .agent install my-workflow<br/>
                  <span className="text-gray-400"># Automatically uses email-parser.agent</span><br/>
                  <span className="text-gray-400"># Automatically uses summarizer.agent</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Build complex workflows by composing simple agents. Your agent declares dependencies, the runtime fetches them automatically.
                </p>
                <p className="text-black font-semibold">
                  Just like npm packages.
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="border-2 border-gray-200 overflow-hidden hover:border-[#d97757] transition-all duration-300">
              <div className="bg-gray-50 p-8 border-b-2 border-gray-200">
                <h3 className="text-2xl font-semibold text-black">Find Tested Agents</h3>
              </div>
              <div className="p-8">
                <div className="bg-black p-6 font-mono text-white text-sm mb-6">
                  .agent search "email automation"<br/>
                  <span className="text-gray-400"># Browse 1,200+ working agents</span><br/>
                  <span className="text-gray-400"># See ratings, downloads, reviews</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Don't build from scratch. Browse the registry. See what's already working. Check ratings and download counts. Install instantly.
                </p>
                <p className="text-black font-semibold">
                  Stop reinventing the wheel.
                </p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="border-2 border-gray-200 overflow-hidden hover:border-[#d97757] transition-all duration-300">
              <div className="bg-gray-50 p-8 border-b-2 border-gray-200">
                <h3 className="text-2xl font-semibold text-black">Share Your Agents</h3>
              </div>
              <div className="p-8">
                <div className="bg-black p-6 font-mono text-white text-sm mb-6">
                  .agent publish my-assistant.agent<br/>
                  <span className="text-gray-400"># Uploads to registry</span><br/>
                  <span className="text-gray-400"># Anyone can install it</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Built something useful? Package it as a .agent file. Publish to the registry. Or airdrop directly to friends. No deployment. No infrastructure.
                </p>
                <p className="text-black font-semibold">
                  Share in seconds.
                </p>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="border-2 border-[#d97757] overflow-hidden">
              <div className="bg-[#d97757] p-8 border-b-2 border-[#d97757]">
                <h3 className="text-2xl font-semibold text-white">Build on Each Other</h3>
              </div>
              <div className="p-8">
                <div className="bg-black p-6 font-mono text-white text-sm mb-6">
                  .agent fork email-parser<br/>
                  <span className="text-gray-400"># Extend existing agents</span><br/>
                  <span className="text-gray-400"># Contribute improvements back</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fork agents. Extend them. Contribute back. Build on top of what others created. The agent economy thrives on collaboration.
                </p>
                <p className="text-black font-semibold">
                  Open source for AI workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight text-black mb-8">
              The Market.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white border border-gray-200 p-10 text-center">
              <div className="text-6xl font-black text-black mb-3">$50B+</div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Agent market by 2028</p>
              <p className="text-gray-700 text-sm">
                Gartner: 3-5 agents per knowledge worker by 2027
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10 text-center">
              <div className="text-6xl font-black text-black mb-3">87%</div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">AI teams building agents</p>
              <p className="text-gray-700 text-sm">
                OpenAI, Anthropic, Google shipping frameworks
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-10 text-center">
              <div className="text-6xl font-black text-black mb-3">0</div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Standards exist today</p>
              <p className="text-gray-700 text-sm">
                We're creating the category. First mover.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl text-black font-bold leading-relaxed mb-6">
              Apps needed the App Store.
              <br />
              Code needed GitHub.
              <br />
              Agents need AgentDrop.
            </p>
            <p className="text-xl text-gray-600">
              We're building the infrastructure for the agent economy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-gray-200 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] font-black text-[72px] leading-tight mb-8">
            Start Building.
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Browse the registry. Install agents. Share yours.
          </p>
          <Link 
            to="/registry"
            className="inline-block px-8 py-4 bg-[#d97757] text-white text-sm font-medium hover:bg-[#c86646] transition-colors"
          >
            Explore Registry
          </Link>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;