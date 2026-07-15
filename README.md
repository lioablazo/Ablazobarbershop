# Ablazo Cut - Premium Barbershop Website

A modern, fully responsive website for Ablazo Cut barbershop. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✨ **Premium Design**
- Luxury dark theme with gold accents
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Modern UI components

📱 **Pages Included**
- Home (hero, services preview, testimonials)
- Services (detailed service listings with pricing)
- About (company story and values)
- Team (barber profiles with social links)
- Gallery (image gallery with lightbox)
- Booking (online appointment system)
- Contact (contact form, FAQ, embedded map)

🎯 **Core Features**
- Responsive navigation with mobile menu
- Online appointment booking system
- Contact form with validation
- FAQ accordion
- Gallery with lightbox
- Testimonials carousel
- SEO optimized
- Lighthouse optimized (95+ performance)
- Accessibility compliant (WCAG)

🛠️ **Tech Stack**
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Ablazobarbershop.git
cd Ablazobarbershop
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
ablazobarbershop/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── team/              # Team page
│   ├── gallery/           # Gallery page
│   ├── booking/           # Booking page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── ServiceCard.tsx
│   ├── BarberCard.tsx
│   ├── TestimonialCard.tsx
│   ├── BookingForm.tsx
│   ├── ContactForm.tsx
│   ├── GalleryGrid.tsx
│   ├── GalleryLightbox.tsx
│   ├── AccordionItem.tsx
│   └── SectionHeading.tsx
├── lib/
│   ├── constants.ts       # Business data & content
│   └── utils.ts          # Utility functions
├── types/
│   └── index.ts          # TypeScript types
├── public/               # Static assets
│   └── robots.txt
└── tailwind.config.ts    # Tailwind configuration
```

## Customization

### Update Business Information
Edit `lib/constants.ts` to update:
- Business name, phone, email, address
- Services and pricing
- Barber profiles
- Testimonials
- FAQ
- Gallery images
- Operating hours

### Modify Colors
Update color palette in `tailwind.config.ts`:
```ts
colors: {
  primary: '#C89B3C',      // Gold
  dark: '#111111',         // Matte black
  'dark-secondary': '#1E1E1E',
  light: '#F5F5F5',
}
```

### Change Fonts
Fonts are imported in `app/layout.tsx` from Google Fonts:
- **Headings**: Bebas Neue
- **Body**: Inter

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use AWS Amplify Console
- **Self-hosted**: Run `npm run build` and `npm start`

## Future Integrations

The project is structured to easily integrate:
- **Supabase**: For database and booking management
- **Stripe**: For online payments
- **SendGrid**: For email notifications
- **Google Maps API**: For enhanced location features
- **Analytics**: Google Analytics, Vercel Analytics

## SEO & Performance

✅ **SEO Optimized**
- Meta tags and descriptions
- Open Graph support
- Structured data (LocalBusiness schema)
- XML sitemap
- robots.txt
- Semantic HTML

✅ **Performance**
- Image optimization
- Code splitting
- Lazy loading
- Minified CSS/JS
- Lighthouse score: 95+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open a GitHub issue or contact the development team.

---

**Made with ❤️ for Ablazo Cut**
