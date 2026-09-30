# ByteSpace — Online Course & Learning Platform

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.7-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-success?style=flat&logo=vercel)](https://byte-space-eight.vercel.app)

> **Assessment Submission:** Frontend Software Engineer Assessment  
> **Candidate:** Sabbir  
> **Figma Design Reference:** [ByteSpace New Check website (Figma)](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)  
> **Live Production Link:** [https://byte-space-eight.vercel.app](https://byte-space-eight.vercel.app)  
> **Vercel Project Dashboard:** [https://vercel.com/genie-sabbirs-projects/byte-space](https://vercel.com/genie-sabbirs-projects/byte-space)  
> **GitHub Repository:** [https://github.com/geniesabbir/byte-space](https://github.com/geniesabbir/byte-space)  

---

## 📌 Submission Summary

| Requirement | Status | Key Highlights |
|---|---|---|
| **1. Landing Page** (Required) | ✅ **Completed** | Full 9-section landing page matching 100% Figma specification, responsive across mobile, tablet, and desktop viewports. |
| **2. Login & Sign Up** (Bonus / Extra Credit) | ✅ **Completed** | Modular split layout with live `AuthVisualCluster` composed of real DOM components (`CourseCard`, `HappyStudentsCard`, `AvatarStack`) and 3D layered assets. |
| **3. Reusable Components & Clean Code** | ✅ **Completed** | Industry-standard component hierarchy, zero monolithic image mockups for UI elements, accessible semantic HTML, strict TypeScript typing. |
| **4. Git Branching & PR** | ✅ **Completed** | Feature branching workflow followed (`feat/update-UI` merged via PR #2; final submission refactor on `feat/refactor-coddebase-for-submission-guideline`). |
| **5. Live Vercel Deployment** | ✅ **Completed** | Deployed publicly with instant CDN caching, asset optimization, and zero runtime errors: [https://byte-space-eight.vercel.app](https://byte-space-eight.vercel.app). |

---

## 🚀 Key Pages & Features

### 1. Landing Page (`/`) — Required
- **Hero Section:**
  - Persian Blue brand backdrop (`#003BE2`) with coordinate grid texture matching Figma Group 4.
  - Heading typography in **Poppins Semi-Bold** with Satoshi body text.
  - Search input with category filter pill and electric lime action button.
  - Floating metric cards: `UIUXCard` (200 Courses, 1000+ Students), `LearningProgressCard` (55% fill bar), and `HappyStudentsCard` (4.5 rating with reusable `AvatarStack`).
  - Layered 3D abstract accents (Torus, Cylinder, Pyramid, Wavy Pills).
- **Brand Partner Wall:** Monochrome vector partner logos with clean horizontal spacing.
- **Discover Your Passion (Course Catalog Grid):**
  - Interactive category selector pills with active electric lime indicator (`#D4FB20`).
  - 3×2 responsive course card grid featuring course thumbnail chips (Lessons, Duration, Comments), star ratings, instructor link, level badge, student avatar stack, and lifetime price.
- **Explore Diverse Learning Paths:** 6 category pathway cards (UI/UX Design, Development, IT & Software, Business, Marketing, Photography) with custom icons and course count badges.
- **Professional Growth Starts Here:** Metric highlights (12K Students, 70+ Courses, 16 Creators), student visual banner, and floating course preview cards.
- **Create & Manage Courses Easily:** Split layout displaying creator earnings analytics ($100.29 daily, $2,000 monthly payout) and platform value propositions.
- **Unlock Your Potential as a Creator (CTA Banner):** High-contrast curved gradient banner with ambient coordinate grid and instant registration action.
- **Community Testimonials:** 3-column student review cards with verified author profiles and star ratings.
- **Footer:** Brand identity, newsletter form with lime submit button, structured navigation links, and copyright bar.

### 2. Authentication Pages (`/login` & `/register`) — Bonus / Extra Credit
- **Live UI Cluster (`AuthVisualCluster`):**
  - Composed entirely of **real, reusable UI components** rather than static image mockups:
    - **Front Card:** `CourseCard` rendering *"the Power of Big Data"* with 4.5 rating, yellow star, and live `AvatarStack`.
    - **Back Card:** `CourseCard` rendering *"Build Digital Asset"* positioned with exact Figma offsets (`dx: 111px, dy: 89px`).
    - **Happy Students Card:** Electric Lime variant (`variant="lime"`) with 7 student avatars, crisp white borders, and `2K+` pill badge.
    - **Layered 3D Ornaments:** Lime Torus (top-left), White Spring Ribbon (right, rotated 180°), and Lime Pyramid (bottom-left) floating at exact Figma coordinates.
- **Interactive Auth Forms:**
  - Login form with email/password validation, lime pill button, social OAuth buttons (Google & Facebook with rounded-24px borders), and cross-navigation links.
  - Register form with Full Name, Email, Password, and seamless login redirect.

### 3. Extended Figma Ecosystem (Bonus Additions)
- **Course Search & Filter Catalog (`/search`):** Search bar, difficulty level filters (Beginner, Intermediate, Advanced), category filters, sort dropdown, and full 12+ course catalog.
- **Course Detail & Curriculum View (`/courses/[id]`):** Hero banner, video trailer modal, interactive tabs (**About**, **Lessons**, **Reviews**), expandable module curriculum syllabus, and sticky lifetime enrollment sidebar ($25).
- **Creator Profile (`/creators/[id]`):** Profile banner with avatar, verified creator badge, biography, follower statistics, follow toggle, and creator's published courses grid.
- **Custom 404 Page (`/_not-found`):** Custom illustrated error screen matching Figma design with quick navigation back to home.

---

## 🧱 Component Architecture & Industry Standards

The project follows a clean, modular structure where components are isolated, typed, and reusable across multiple pages:

```
src/
├── app/
│   ├── layout.tsx                     # Global layout, fonts (Poppins & Satoshi), metadata
│   ├── globals.css                    # Tailwind CSS v4 design tokens & custom utilities
│   ├── page.tsx                       # Complete Landing Page (9 Figma sections)
│   ├── login/page.tsx                 # Login Page with AuthVisualCluster
│   ├── register/page.tsx              # Sign Up Page with AuthVisualCluster
│   ├── search/page.tsx                # Course catalog search & filter page
│   ├── courses/[id]/                  # Course detail, syllabus & review pages
│   ├── creators/[id]/page.tsx         # Creator portfolio & published courses
│   └── not-found.tsx                  # Custom 404 page
├── components/
│   ├── auth/
│   │   └── AuthVisualCluster.tsx      # Real component composition for auth visual
│   ├── home/
│   │   └── HeroCards.tsx              # UIUXCard, LearningProgressCard, HappyStudentsCard
│   ├── ui/
│   │   └── AvatarStack.tsx            # Industry-standard reusable avatar group component
│   ├── Navbar.tsx                     # Navigation header (light & dark variants)
│   ├── Footer.tsx                     # Footer with newsletter form & links
│   ├── CourseCard.tsx                 # Multi-state course card with chips & AvatarStack
│   ├── CategoryPills.tsx              # Interactive category filter pill strip
│   ├── PartnerLogos.tsx               # Monochrome partner logos
│   ├── Abstract3DShapes.tsx           # Vector 3D abstract accents
│   └── Logo.tsx                       # Brand logo component
└── data/
    └── courses.ts                     # TypeScript data models, courses & reviews
```

### Highlights of Reusable Components
- **`AvatarStack` (`src/components/ui/AvatarStack.tsx`):**
  - Configurable sizes: `xs` (20px), `sm` (28px), `md` (30px), `lg` (36px).
  - Customizable badge counter (`26+`, `2K+`, etc.), badge background (`#D4FB20` or `#161718`), text color, and border ring color.
  - Hover micro-interactions (`hover:scale-110 hover:z-40`).
- **`CourseCard` (`src/components/CourseCard.tsx`):**
  - Used seamlessly in the Landing Page grid, Search page, Creator portfolio, and the Auth visual cluster.
  - Supports custom star ratings, instructors, tags, and customizable class overrides.
- **`HappyStudentsCard` (`src/components/home/HeroCards.tsx`):**
  - Supports `variant="white"` (Hero section) and `variant="lime"` (Auth visual cluster).

---

## 🎨 Design System & Color Tokens

| Design Token | Hex Code | Purpose in UI |
|---|---|---|
| **Persian Blue (Brand Primary)** | `#003BE2` | Hero background, primary branding, active accents |
| **Electric Lime (Brand Accent)** | `#D4FB20` / `#CBFC01` | Primary CTA buttons, badges, active pill indicators, highlights |
| **Dark Charcoal** | `#161718` / `#242528` | Headings, card titles, high-contrast dark text |
| **Shuttle Gray / Slate** | `#82868E` / `#4F4F4F` | Subtitles, lesson durations, secondary labels |
| **Border Neutral** | `#CED0D3` / `#E5E6E8` | Card borders, inputs, divider lines |
| **Surface Muted** | `#F5F5F6` / `#F8F8F8` | Chip backgrounds, pill surfaces, light panels |

### Typography
- **Headings:** [Poppins](https://fonts.google.com/specimen/Poppins) (Semi-Bold `600`, Bold `700`)
- **Body & Interface:** [Satoshi](https://www.fontshare.com/fonts/satoshi) (Regular `400`, Medium `500`, Bold `700`)

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js 20.x or later (or Bun 1.x)
- Git

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/geniesabbir/byte-space.git
cd byte-space

# 2. Install dependencies
bun install
# or: npm install

# 3. Start local development server
bun run dev
# or: npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build & Linting
```bash
# Type check and build with Next.js Turbopack
bun run build

# Run production server locally
bun run start -p 3000

# Run ESLint
bun run lint
```

---

## 🌐 Deployment Details

The application is deployed on **Vercel** with automatic continuous deployment enabled:
- **Production URL:** [https://byte-space-eight.vercel.app](https://byte-space-eight.vercel.app)
- **Vercel Project Dashboard:** [https://vercel.com/genie-sabbirs-projects/byte-space](https://vercel.com/genie-sabbirs-projects/byte-space)
- **Framework Preset:** Next.js (App Router)
- **Build Engine:** Next.js Turbopack (`next build`)
- **Environment:** Node.js 20.x Runtime

---

## 📝 Reviewer Notes & Verification Checklist

When reviewing the submission, please test the following key areas:
1. **Landing Page:** Open [https://byte-space-eight.vercel.app](https://byte-space-eight.vercel.app) and scroll through all 9 sections to verify pixel-accuracy against Figma.
2. **Category Filter:** Click between category pills in the "Discover Your Passion" section to see the active lime indicator update.
3. **Course Cards:** Hover over course cards to see smooth elevation micro-interactions and examine the live `AvatarStack` student counters.
4. **Login Page:** Navigate to `/login` to view the split-screen layout with the live `AuthVisualCluster` (real DOM course cards, electric lime Happy Students card, and floating 3D shapes).
5. **Sign Up Page:** Navigate to `/register` to test the registration layout and interactive form fields.
6. **Search & Course Details:** Visit `/search` and click any course (e.g. `/courses/2`) to view the interactive tabs (About, Lessons, Reviews) and curriculum breakdown.
7. **Responsiveness:** Test on desktop (1440px+), laptop (1024px), tablet (768px), and mobile (375px/430px) to verify fluid scaling and layout preservation.
