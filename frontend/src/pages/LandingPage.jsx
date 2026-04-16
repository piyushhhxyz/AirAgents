import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Newspaper Masthead */}
      <section className="pt-24 pb-8 px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Vol. 1, No. 1 — The Agent Distribution Layer</div>
          <h1 className="font-['Playfair_Display'] font-black text-[72px] leading-none text-black mb-2">
            AGENTDROP
          </h1>
          <div className="text-sm text-gray-600">Founded 2025 — Airdrop Your AI Agents</div>
        </div>
      </section>

      {/* Hero Article */}
      <section className="py-12 px-6 border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Breaking News</div>
              <h2 className="font-['Playfair_Display'] font-black text-[56px] leading-[1.1] text-black mb-6">
                The .agent File Format: A New Standard for AI Distribution
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 border-l-4 border-black pl-6">
                Install once. Share forever. The agent economy finally has its distribution medium.
              </p>
              
              <div className="columns-2 gap-8 text-base text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  <span className="font-bold text-black">SAN FRANCISCO</span> — In a development that could reshape how artificial intelligence tools are shared and deployed, technologists have introduced the .agent file format, establishing the first standardized method for packaging and distributing AI agents.
                </p>
                <p className="mb-4">
                  The innovation addresses a critical gap in the rapidly expanding agent economy. While iOS applications have .ipa files, Android has .apk, and Docker containers use .tar images, AI agents have lacked any comparable standard—until now.
                </p>
                <p className="mb-4">
                  "You can airdrop photos. Share Notion docs. Send apps via links," explains the project's technical documentation. "But agents? You're stuck with ZIP files, private GitHub repos, and 30-minute setup calls."
                </p>
              </div>

              <div className="bg-gray-100 border-l-4 border-black p-6 mb-6">
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Installation Guide</div>
                <div className="font-mono text-sm text-black mb-3">
                  <div className="text-gray-600 mb-1"># One-time setup</div>
                  <div className="font-semibold mb-4">brew install agent</div>
                  <div className="text-gray-600 mb-1"># Share any agent</div>
                  <div className="font-semibold">.agent install email-assistant.agent</div>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Link to="/registry" className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800">
                  Browse Registry →
                </Link>
                <a href="#features" className="px-6 py-3 border-2 border-black text-black text-sm font-medium hover:bg-black hover:text-white">
                  Read More
                </a>
              </div>
            </div>

            <div className="md:col-span-4 border-l border-gray-300 pl-8">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">Quick Facts</div>
              
              <div className="mb-6 pb-6 border-b border-gray-300">
                <div className="text-3xl font-bold text-black mb-2">$50B+</div>
                <div className="text-sm text-gray-600">Projected agent market by 2028</div>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-300">
                <div className="text-3xl font-bold text-black mb-2">87%</div>
                <div className="text-sm text-gray-600">Of AI teams now building agents</div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-black mb-2">0</div>
                <div className="text-sm text-gray-600">Standards existed before today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="features" className="py-12 px-6 border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 pb-8 border-b-2 border-black">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Analysis</div>
            <h2 className="font-['Playfair_Display'] font-black text-[48px] leading-tight text-black">
              Why Agents Needed a Standard
            </h2>
          </div>

          <div className="columns-3 gap-8 text-sm text-gray-700 leading-relaxed">
            <div className="mb-8 break-inside-avoid">
              <h3 className="font-bold text-lg text-black mb-3 border-b border-gray-300 pb-2">No Distribution Medium</h3>
              <p className="mb-3">
                Every successful technology platform has established a standard format for distribution. iOS applications ship as .ipa files. Android uses .apk. Docker images are packaged as .tar archives.
              </p>
              <p>
                But AI agents—despite their growing ubiquity—have lacked any comparable standard. Developers have resorted to ad-hoc solutions: scattered Python files, configuration JSONs, and documentation that assumes technical expertise.
              </p>
            </div>

            <div className="mb-8 break-inside-avoid">
              <h3 className="font-bold text-lg text-black mb-3 border-b border-gray-300 pb-2">Discovery Problem</h3>
              <p className="mb-3">
                An estimated thousands of functional AI agents exist across GitHub repositories, Discord servers, and Reddit threads. Yet there exists no centralized registry, no search functionality, and no standardized method for evaluation.
              </p>
              <p>
                The result: developers frequently rebuild tools that already exist, unaware of available solutions. Time and resources are wasted on redundant development.
              </p>
            </div>

            <div className="mb-8 break-inside-avoid">
              <h3 className="font-bold text-lg text-black mb-3 border-b border-gray-300 pb-2">Composability Gap</h3>
              <p className="mb-3">
                Modern software development thrives on composability. Developers import libraries, extend frameworks, and build atop existing tools. But agents remain monolithic.
              </p>
              <p>
                A meeting scheduler should leverage an existing calendar parser. A research assistant should utilize established web scrapers. The infrastructure to enable such composition has been absent—until now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 px-6 border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 pb-8 border-b-2 border-black">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Features</div>
            <h2 className="font-['Playfair_Display'] font-black text-[48px] leading-tight text-black">
              What AgentDrop Enables
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-300 p-8">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Feature I</div>
              <h3 className="font-bold text-2xl text-black mb-4">Agent Composability</h3>
              <div className="bg-gray-100 p-4 font-mono text-xs text-black mb-4">
                .agent install my-workflow<br/>
                <span className="text-gray-600"># Auto-fetches: email-parser.agent</span><br/>
                <span className="text-gray-600"># Auto-fetches: summarizer.agent</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Agents declare dependencies. The runtime fetches them automatically. Complex workflows emerge from simple components.
              </p>
            </div>

            <div className="border-2 border-gray-300 p-8">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Feature II</div>
              <h3 className="font-bold text-2xl text-black mb-4">Centralized Discovery</h3>
              <div className="bg-gray-100 p-4 font-mono text-xs text-black mb-4">
                .agent search "email automation"<br/>
                <span className="text-gray-600"># Browse 1,200+ tested agents</span><br/>
                <span className="text-gray-600"># View ratings & downloads</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                A searchable registry replaces scattered forums. Ratings and download counts provide quality signals. Discovery becomes trivial.
              </p>
            </div>

            <div className="border-2 border-gray-300 p-8">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Feature III</div>
              <h3 className="font-bold text-2xl text-black mb-4">Instant Distribution</h3>
              <div className="bg-gray-100 p-4 font-mono text-xs text-black mb-4">
                .agent publish my-assistant.agent<br/>
                <span className="text-gray-600"># Uploads to registry</span><br/>
                <span className="text-gray-600"># Instantly shareable</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Package your agent as a .agent file. Publish to the registry or airdrop directly. No deployment infrastructure required.
              </p>
            </div>

            <div className="border-2 border-gray-300 p-8">
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Feature IV</div>
              <h3 className="font-bold text-2xl text-black mb-4">Open Collaboration</h3>
              <div className="bg-gray-100 p-4 font-mono text-xs text-black mb-4">
                .agent fork email-parser<br/>
                <span className="text-gray-600"># Extend existing work</span><br/>
                <span className="text-gray-600"># Contribute back</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Fork agents. Extend functionality. Contribute improvements. The open-source model applied to AI workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-12 px-6 border-b border-gray-300 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Market Analysis</div>
            <h2 className="font-['Playfair_Display'] font-black text-[42px] leading-tight text-black mb-4">
              The Agent Economy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry analysts project explosive growth. The infrastructure layer will determine winners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white border border-gray-300 p-6 text-center">
              <div className="text-5xl font-black text-black mb-2">$50B+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">By 2028</div>
              <p className="text-sm text-gray-700">
                Gartner predicts 3-5 agents per knowledge worker by 2027. Billions of agents requiring distribution.
              </p>
            </div>

            <div className="bg-white border border-gray-300 p-6 text-center">
              <div className="text-5xl font-black text-black mb-2">87%</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Current Adoption</div>
              <p className="text-sm text-gray-700">
                OpenAI, Anthropic, and Google all shipping agent frameworks. Yet no distribution standard exists.
              </p>
            </div>

            <div className="bg-white border border-gray-300 p-6 text-center">
              <div className="text-5xl font-black text-black mb-2">First</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-3">Mover Advantage</div>
              <p className="text-sm text-gray-700">
                The .agent format aims to become the standard. Like .exe for Windows, .app for Mac.
              </p>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto pt-8 border-t-2 border-black">
            <p className="text-2xl text-black font-bold leading-relaxed mb-4">
              "Apps needed the App Store. Code needed GitHub. Agents need AgentDrop."
            </p>
            <p className="text-base text-gray-600">
              — The infrastructure layer for the agent economy
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t-4 border-black bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            AgentDrop — Est. 2025
          </p>
          <p className="text-sm text-gray-600">
            Built for the agent economy. Share your AI, transform your workflow.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;