# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hotel Aqua website — a Next.js 15 React 19 site for a hotel in Kiten, Bulgaria. Built with App Router, Tailwind CSS v4, and react-slick for carousels.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **App Router** (`src/app/`) — page-based routing with `layout.tsx` as root layout
- **Pages**: `page.tsx` (home), `about/`, `our_hotel/`, `prices/`, `gallery/`, `contacts/`, `booking/`
- **Shared layout**: `Header`, `Navigation`, `Footer` rendered in root layout
- **Components** (`src/components/`) — `Header`, `Navigation`, `Footer`, `Slider`, `BookingModal`, `ContactConfirmationModal`
- **Styling**: Tailwind CSS v4 + custom CSS in `src/app/css/` (main.css, rest-part.css, slider.css)
- **External CSS**: W3.css and Font Awesome loaded via CDN in layout.tsx

## Key Implementation Notes

- Site metadata (title, description) is set in `src/app/layout.tsx`
- Slider component uses `react-slick` with styles in `src/app/css/slider.css`
- Booking and contact confirmation modals are portal-rendered overlays
- No test suite is configured
