# AgentDrop - Product Requirements Document

## Original Problem Statement
Create a platform to solve the agent sharing problem. Make agent sharing as easy as airdropping files.

## Vision
Build a full-fledged website with **monochromatic light theme** (white background, black/gray text only) featuring:
1. Informative newspaper-style landing page
2. AI agent registry with clean bento layout
3. **NO ICONS** - use numbers (01, 02, 03) and text only
4. Smaller, elegant fonts
5. Swish, minimalist design inspired by neural-share.emergent.host

## Design Principles
- **Monochromatic palette**: Black, grays, white only
- **No icons**: Numbers and text only
- **Smaller fonts**: Elegant, readable typography
- **Lots of white space**: Clean, breathable layout
- **Simple borders**: No rounded corners or shadows
- **Subtle hover states**: Border color changes only
- **Clean bento grid**: Asymmetric but organized

## Implementation Timeline

### Phase 1 (Completed - Dec 2025)
**Frontend MVP with Minimalist Design**
- ✅ Redesigned landing page with monochromatic theme
- ✅ Removed all Lucide icons
- ✅ Reduced font sizes (text-5xl/6xl instead of 7xl)
- ✅ Added numbered sections (01, 02, 03)
- ✅ Clean agent cards with simple borders
- ✅ Monochromatic color scheme throughout
- ✅ Simple hover effects (border colors only)
- ✅ Bento grid layout maintained
- ✅ Search and filter functionality
- ✅ Copy to clipboard working

**Files Updated:**
- `/app/frontend/src/pages/LandingPage.jsx` - Minimal monochrome design
- `/app/frontend/src/pages/RegistryPage.jsx` - Clean registry
- `/app/frontend/src/components/Header.jsx` - Simple header
- `/app/frontend/src/components/Footer.jsx` - Text-only footer
- `/app/frontend/src/components/AgentCard.jsx` - Minimal cards

**Design Highlights:**
- Pure monochromatic (black/gray/white)
- NO icons anywhere
- Font sizes reduced by 30%
- Numbered sections for features
- Clean borders, no shadows
- Subtle transitions

## Prioritized Backlog

### P0 - Next Phase (Backend Development)
- [ ] MongoDB schema for agents
- [ ] API endpoints for CRUD operations
- [ ] Frontend-backend integration
- [ ] Remove mock data

### P1 - Enhanced Features
- [ ] User authentication
- [ ] Agent upload functionality
- [ ] Rating system
- [ ] Agent detail pages

### P2 - Advanced Features
- [ ] Social sharing
- [ ] Trending agents
- [ ] Community features

## Next Action Items
1. Get feedback on new minimalist design
2. Proceed with backend if design approved
3. Create MongoDB schema
4. Build API endpoints
5. Integrate frontend with backend

## Technical Stack
- **Frontend**: React, React Router, Shadcn UI, Tailwind CSS
- **Backend**: FastAPI, Python (to be implemented)
- **Database**: MongoDB (to be implemented)
- **Design**: Monochromatic, minimalist, no icons
