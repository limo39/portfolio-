# Limo Kiprono Portfolio

A modern, responsive portfolio website built with Next.js 15, React 18, and Tailwind CSS.

##  Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Interactive Components**: Animated project cards, smooth transitions
- **Blog Section**: Showcase of projects and technical articles
- **GitHub Integration**: Direct links to repositories and project stats
- **Contact Form**: Functional contact form with EmailJS integration
- **Email Notifications**: Receive messages directly in your email

##  Tech Stack

- **Framework**: Next.js 15.5.4
- **Runtime**: Node.js 22.x
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14
- **Animations**: Framer Motion 11.11.17
- **Icons**: React Icons 5.3.0
- **Carousel**: Swiper 11.1.14

##  Prerequisites

- Node.js 22.0.0 or higher
- npm 10.0.0 or higher

##  Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS for contact form:
   - Follow the detailed guide in `EMAILJS_SETUP.md`
   - Create `.env.local` with your EmailJS credentials
   - Configure your email service and template

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment with Node.js 22.x:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Node.js 22.x requirement from `package.json` engines field
4. Deploy with zero configuration

**Note**: Make sure your Vercel project settings use Node.js 22.x runtime

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

##  Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog page
│   ├── contact-me/        # Contact page
│   ├── my-projects/       # Projects page
│   ├── my-skills/         # Skills page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ContactForm.tsx    # Contact form component
│   ├── Navbar.tsx         # Navigation bar
│   ├── Navigation.tsx     # Bottom navigation
│   ├── ProjectCard.tsx    # Project card component
│   └── Transition.tsx     # Page transition component
├── constants/             # Static data
│   ├── index.ts           # Main constants
│   └── blogData.ts        # Blog and GitHub data
├── public/                # Static assets
├── .nvmrc                 # Node.js version specification
├── vercel.json            # Vercel deployment configuration
└── package.json           # Dependencies and scripts
```

##  Customization

### Adding New Projects

Edit `constants/index.ts` to add new projects to the `Projects` array:

```typescript
{
  title: "Your Project",
  text: "Project description",
  src: "/project-image.png",
}
```

### Adding Blog Posts

Edit `constants/blogData.ts` to add new blog posts:

```typescript
{
  id: 7,
  title: "Your Blog Post",
  excerpt: "Post description",
  date: "2024-01-01",
  readTime: "5 min read",
  tags: ["Tag1", "Tag2"],
  image: "/blog-image.png",
}
```

### Updating Social Links

Edit `constants/index.ts` to update social media links in the `Socials` array.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

##  Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px

##  Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Package Optimization**: Optimized imports for react-icons and framer-motion
- **Static Generation**: All pages are statically generated for optimal performance
- **Modern JavaScript**: ES2022 target for better performance

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Contributing

Contributions, issues, and feature requests are welcome!

##  Contact

- **GitHub**: [limo39](https://github.com/limo39/)
- **LinkedIn**: [Limo Kiprono](https://www.linkedin.com/in/limo-kiprono/)
- **Twitter**: [@limo_39](https://twitter.com/limo_39)
