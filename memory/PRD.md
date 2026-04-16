# AgentDrop - Product Requirements Document

## The Innovation
Introducing the **.agent file format** - a standard way to package and share AI agents.
- Like .ipa for iOS apps
- Like .apk for Android  
- Like .tar for Docker images
- But for AI agents

## Core Problem
Agents have no distribution medium. You can't "send" an agent. You have to:
- Wrap it in an app (overhead)
- Deploy to cloud (unnecessary for local agents)
- Share GitHub repos (setup hell)
- No discovery, no composability, no standard format

## The Solution
1. **brew install agent** - Install CLI once
2. Package agents into **.agent files** (workflow + prompts + skills + tools)
3. **Airdrop** .agent files or upload to registry  
4. **.agent install file.agent** - Receiver installs & runs locally
5. **Composability** - Agents declare dependencies, runtime fetches them

## Market Opportunity
- **$50B+** agent market by 2028
- **87%** of AI teams building agents (OpenAI, Anthropic, Google)
- **0** standardized formats exist today - we're creating the category
- First mover advantage - .agent becomes THE standard

## Completed (Dec 2025)
✅ Landing page explaining .agent format innovation
✅ Medium problem (no standard format for agents)
✅ Forced cloud deployment problem
✅ brew install agent workflow
✅ Composability examples
✅ Market metrics and positioning
✅ Beautiful Playfair + Inter typography
✅ Coral accent (#d97757) for CTAs
✅ Light grey code backgrounds
✅ Uniform registry cards

## Next Steps
- Final design approval
- Backend (MongoDB + FastAPI)
- Real .agent file handling
- CLI tool development
