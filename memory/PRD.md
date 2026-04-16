# AgentDrop - Product Requirements Document

## Original Problem Statement
Apps have app stores, code has GitHub, but agents have no distribution layer. Make sharing AI agents as easy as airdropping files - like npm for personal AI.

## Core Concept
- **Airdrop agents** with a single command
- **npm-like composability** - agents can build on other agents  
- **Discovery registry** - browse, search, install
- **No setup hell** - one command installs everything

## Design (FINAL - Approved)
- **Typography**: Playfair Display (900) for headlines, Inter for body
- **Color**: Monochrome with #d97757 accent for CTAs
- **Layout**: Uniform 3-column grid, clean cards
- **Hover**: Border transitions (gray → coral)
- **Content**: Real problem, command examples, composability

## Completed (Dec 2025)
✅ Landing page with airdrop concept
✅ Real problem: ZIP files, GitHub repos, 30-min calls
✅ Solution: Command-based installation (.agent install)
✅ npm-like composability examples
✅ Uniform agent card grid with color accents
✅ "What it does" section in cards (less text)
✅ Copy to clipboard with coral CTA
✅ Search and category filters

## Content Highlights
- Hero: "Airdrop Your AI Agents"
- Problem cards: No send button, discovery, composability, setup hell
- Solution: Shows .agent install commands
- Composing example: news-curator → summarizer → slack-bot

## Next Steps
- Backend development (MongoDB + FastAPI)
- Real agent data instead of mocks
- User authentication for creators
- Agent upload functionality
