# ByteSpace — Online Course & Learning Platform

> Assessment Submission for the position of **Jr. Software Engineer (Frontend)**  
> **Candidate Tracking ID:** `defeaf2c-4ec5-479b-b414-1ee411b1285e`  
> **Figma Design:** [ByteSpace New Check website](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

---

## 🚀 Live Demo & Repository
- **Live Deployment (Vercel):** [https://byte-space-sepia.vercel.app](https://byte-space-sepia.vercel.app) *(or your deployed production link)*
- **GitHub Repository:** [https://github.com/geniesabbir/byte-space](https://github.com/geniesabbir/byte-space)
- **Feature Branch:** `feature/bytespace-implementation`
- **Pull Request:** [View Pull Request](https://github.com/geniesabbir/byte-space/pull/1)

---

## 📋 Project Overview
ByteSpace is a modern, high-performance online course and education marketplace platform. Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, this application faithfully reproduces the Figma design specification across desktop and mobile devices.

### What Was Built:
1. **Landing Page (Required)**
   - **Hero Section:** Persian Blue grid coordinate texture (`#003be2`), Poppins typography, interactive search bar, floating metric badges (UI/UX Design, Learning Progress 55%, Happy Students 4.5★), custom vector 3D abstract accents (torus, cylinder, pyramid, wavy pills).
   - **Partner Brand Wall:** Clean monochrome partner logos.
   - **Discover Your Passion (Course Grid):** Interactive category filter pills with active lime indicator, 3x2 responsive card grid displaying course ratings, instructor, lessons count, duration, and comments count.
   - **Explore Diverse Learning Paths:** 6 category pathways (Design, Development, IT & Software, Business, Marketing, Photography) with custom icons and course counters.
   - **Professional Growth Starts Here:** 12K Students, 70+ Courses, 16 Creators metric counters with student photo and floating Figma course preview cards.
   - **Create & Manage Courses Easily:** Split-screen layout highlighting creator monetization ($100.29 daily, $2,000 monthly payout) and platform value propositions.
   - **Unlock Your Potential as a Creator (CTA Banner):** High-contrast curved banner with glowing grid and instant registration action.
   - **Community Testimonials:** 3-card customer feedback grid with star ratings and verified learner profiles.
   - **Footer:** Brand identity, newsletter subscription form with custom lime action, structured navigation links, and copyright bar.

2. **Authentication Pages (Bonus / Extra Credit)**
   - **Sign In (`/login`):** Split layout with left-hand 3D graphic stage (floating "Power of Big Data" course card, student rating widget, 3D shapes) and right-hand card with email/password authentication, social sign-in buttons, and direct toggle to register.
   - **Sign Up (`/register`):** Split layout with left-hand graphic backdrop and complete registration form (Full Name, Email, Password, Terms, direct link to login).

3. **Complete Platform Experience (Full Figma Ecosystem)**
   - **Course Search & Catalog (`/search`):** Live search with filter pills, level filters (Beginner, Intermediate, Advanced), category filters, sorting dropdown, and full 18-course catalog with pagination.
   - **Course Details View (`/courses/[id]`):** Hero banner with video player modal preview, interactive tabs (**About**, **Lessons**, **Reviews**), curriculum syllabus breakdown, and sticky enrollment sidebar ($25/lifetime, enrollment CTA, feature list).
   - **Creator Profile (`/creators/[id]`):** Profile banner with avatar, creator badge, bio, stats (products count, followers counter), "+ Follow" button, and creator's published courses grid.
   - **404 Not Found Page (`/404`):** Custom error page matching Figma with lime 404 typographic graphic and "Back to Home" navigation.

---

## 🎨 Design System & Token Specifications

| Token | Value | Figma Style Guide |
|---|---|---|
| **Primary (Persian Blue)** | `#003be2` / `rgb(0, 59, 226)` | Brand backdrop & primary buttons |
| **Secondary (Electric Lime)**| `#cbfc01` / `rgb(203, 252, 1)` | Badges, accents, highlights, primary CTAs |
| **Neutral Black** | `#161718` / `#242528` | Main body typography & dark elements |
| **Neutral Gray** | `#585a62` / `#82868e` | Subtitles, meta descriptions, borders |
| **Background / Muted** | `#f8f8f8` / `#eceff2` | Pill backgrounds, cards, dividers |
| **Grid Pattern** | `80px x 80px` coordinate blue grid | Exact hero & banner backdrop |
| **Headings Font** | **Poppins** (600 / 700) | `Heading L` (72px), `Heading M` (44px), `Heading S` (36px) |
| **Body & UI Font** | **Satoshi** (400 / 500 / 700) | `Body L` (18px), `Body M` (16px), `Label L` (18px) |

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 16.3.7 (React 19, Turbopack, App Router)
- **Styling:** Tailwind CSS v4 with custom `@theme` tokens and CSS variables
- **Icons:** `lucide-react`
- **Fonts:** Next.js Font Optimization (`next/font/google` for Poppins, Fontshare CDN for Satoshi)
- **TypeScript:** Strict type-safety across all components, interfaces, and mock data models
- **Package Manager:** `bun` / `npm`

```
src/
├── app/
│   ├── layout.tsx             # Root layout with fonts & metadata
│   ├── globals.css            # Tailwind v4 theme tokens & grid textures
│   ├── page.tsx               # Full Landing Page (all 9 Figma sections)
│   ├── login/page.tsx         # Sign In page (bonus)
│   ├── register/page.tsx      # Sign Up page (bonus)
│   ├── search/page.tsx        # Search & course catalog page
│   ├── courses/[id]/          # Dynamic course view (About, Lessons, Reviews)
│   │   ├── page.tsx
│   │   ├── CourseDetailView.tsx
│   │   ├── lessons/page.tsx
│   │   └── reviews/page.tsx
│   ├── creators/[id]/page.tsx # Creator portfolio & courses
│   └── not-found.tsx          # 404 Error page
├── components/
│   ├── Navbar.tsx             # Reusable navigation (light & dark variants)
│   ├── Footer.tsx             # Reusable footer with newsletter form
│   ├── CourseCard.tsx         # Reusable course card component
│   ├── CategoryPills.tsx      # Filter pills bar with scroll & active state
│   ├── PartnerLogos.tsx       # Monochrome sponsor vector logos
│   ├── Abstract3DShapes.tsx   # Custom SVG 3D shapes (Torus, Cylinder, etc.)
│   └── Logo.tsx               # ByteSpace brand logo
└── data/
    └── courses.ts             # Comprehensive typed data models & mock database
```

---

## 🏃 Local Setup & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/geniesabbir/byte-space.git
   cd byte-space
   ```

2. **Install dependencies:**
   ```bash
   bun install
   # or npm install
   ```

3. **Run local development server:**
   ```bash
   bun run dev
   # or npm run dev
   ```

4. **Build for production:**
   ```bash
   bun run build
   bun run start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Deployment

The application is configured for seamless deployment on Vercel:
- **Build Command:** `next build`
- **Output Directory:** Next.js default (`.next`)
- **Node.js Version:** 20.x / 22.x
- **Remote Image Host:** `images.unsplash.com` enabled in `next.config.ts`.
