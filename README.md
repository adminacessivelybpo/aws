# Ferdinand Dablo Portfolio

Production-ready animated portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Next.js 14+ architecture with TypeScript
- Tailwind CSS styling with custom visual theme
- Framer Motion animations (scroll-triggered, staggered, hover, modals, parallax)
- Fully responsive layout (mobile/tablet/desktop)
- Dark mode support with system preference fallback
- Accessible navigation, forms, keyboard interactions, and ARIA labels
- SEO metadata, Open Graph, Twitter cards
- Lazy-loaded images via Next.js Image
- Contact form with API route and Nodemailer integration
- Production-oriented component and data structure

## Project Structure

- app/layout.tsx - global metadata, fonts, providers
- app/page.tsx - page composition for all sections
- app/loading.tsx - animated loading state
- app/api/contact/route.ts - contact email API endpoint
- app/globals.css - theme variables and global styles
- components/layout/* - navbar and footer
- components/sections/* - all portfolio sections
- components/ui/* - reusable UI building blocks
- components/providers/* - theme and transition providers
- lib/data.ts - sample content and configuration
- lib/animations.ts - reusable animation presets
- types/index.ts - TypeScript interfaces
- .env.example - required environment variables

## Local Development

1. Install dependencies:

   npm install

2. Configure environment:

   cp .env.example .env.local

3. Update .env.local with your SMTP credentials.

4. Start development server:

   npm run dev

5. Open http://localhost:3000

## Contact Form Email Setup

The contact section posts to /api/contact and sends mail with Nodemailer.

Required environment variables:

- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- CONTACT_FROM_EMAIL
- CONTACT_TO_EMAIL

Example SMTP providers: SendGrid SMTP, Mailgun SMTP, Postmark SMTP, Brevo SMTP.

## Deployment

### Vercel

1. Push repository to GitHub.
2. Import project into Vercel.
3. Add all variables from .env.example in Vercel Project Settings.
4. Deploy.

### Docker (optional)

Use standard Next.js production build flow:

1. npm run build
2. npm run start

For containerized deployments, map runtime environment variables and expose port 3000.

## Quality Checks

- Lint: npm run lint
- Build: npm run build

## Notes

Replace placeholder social/profile/project links and sample data in lib/data.ts with your real portfolio content before publishing.
