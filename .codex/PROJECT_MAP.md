# Project Map

- src/app: Next.js App Router routes and layouts (dashboard + pages)
- src/components: shared UI components (tables, cards, forms, menus)
- src/lib: mock data and utilities
- public: static assets/icons

Backend entrypoints:
- None (frontend-only Next.js project)

Frontend entrypoints:
- src/app/layout.tsx (root layout)
- src/app/(dashboard)/layout.tsx (dashboard layout + menu)
- src/app/(dashboard)/list/* (list pages)
- src/app/(dashboard)/list/*/[id]/page.tsx (detail pages)

Config/env:
- package.json (scripts)
- tailwind.config.ts, postcss.config.js, .eslintrc.json

Feature -> folder mapping:
- Students/Teachers/Subjects/Attendance: src/app/(dashboard)/list/*
- Forms: src/components/forms/*
- AI Insights: src/app/(dashboard)/list/ai
