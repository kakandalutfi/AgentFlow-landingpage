# AgentFlow - Premium AI Agent SaaS Landing Page

A high-converting, modern, and production-ready landing page for an AI Agent SaaS platform. Built with Next.js 15 (App Router), Tailwind CSS v4, Framer Motion, and Lucide Icons. Ready to be exported/customized for your UI8 product.

## Features

- **Modern SaaS Aesthetics**: Sleek, high-converting design inspired by Stripe and Vercel.
- **Fully Responsive**: Mobile-first approach, looks great on all device sizes.
- **Dark Mode Support**: Built-in light/dark theme toggle support via `next-themes`.
- **Smooth Animations**: Powered by `framer-motion` for a premium interaction feel.
- **Component Based**: Clean, reusable structure (`Hero`, `Features`, `Pricing`, etc.).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Manager**: [next-themes](https://github.com/pacocoursey/next-themes)

## Project Structure

```text
/app
  layout.tsx         # Root layout including providers, nav, and footer
  page.tsx           # Main landing page assembling sequential sections
  globals.css        # Tailwind V4 setup and CSS variables
/components
  /layout            # Navbar, Footer
  /providers         # ThemeProvider
  /sections          # Hero, Features, How-It-Works, Use-Cases, Testimonials, Pricing, CTA
  /ui                # Core reusable components (Button)
/lib                 # Utilities (cn for tailwind classes)
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- **Colors / Themes**: Modify `app/globals.css` to change standard `--primary`, `--background`, `--card`, etc. variables.
- **Content**: Edit individual section files in `components/sections/` to replace placeholder SaaS copywriting with your own.

## License

Intended for premium marketplace distribution. Follow appropriate licensing terms.
