# Webs4U - Professional Website

A modern, professional website for Webs4U built with Next.js and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with navy blue (#0B1F3A) and gold accent (#F4C542) color scheme
- **Multiple Pages**: Home, Services, Portfolio, Pricing, About, and Contact pages
- **GitHub Integration**: Automatically fetches and displays repositories from GitHub
- **Contact Form**: Functional contact form with WhatsApp and Email integration
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards included
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Elegant transitions and hover effects

## 📋 Pages

1. **Home** (`/`) - Hero section, services overview, testimonials, and FAQ
2. **Services** (`/services`) - Detailed descriptions of all services offered
3. **Portfolio** (`/portfolio`) - Dynamic GitHub repository showcase
4. **Pricing** (`/pricing`) - Three-tier pricing plans with FAQ
5. **About** (`/about`) - Background, skills, and mission
6. **Contact** (`/contact`) - Contact form with WhatsApp and Email buttons

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **GitHub API** - Dynamic portfolio integration

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd webs4u
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Update GitHub Username

The portfolio page fetches repositories from GitHub. To change the username:

1. Edit `app/api/github/repos/route.ts`
2. Update the `username` variable:
```typescript
const username = 'YourGitHubUsername';
```

### Update Contact Information

1. **Email**: Edit `components/Footer.tsx` and `app/contact/page.tsx`
2. **WhatsApp**: Edit `app/contact/page.tsx` and update the `whatsappNumber` variable

### Customize Colors

Colors are defined in `app/globals.css`:
- Navy Blue: `#0B1F3A`
- Gold Accent: `#F4C542`
- White: `#ffffff`

## 📝 Customization

### Update Business Information

- **Company Name**: Search and replace "Webs4U" throughout the codebase
- **Testimonials**: Edit the testimonials array in `app/page.tsx`
- **Services**: Update services in `app/services/page.tsx`
- **Pricing**: Modify pricing plans in `app/pricing/page.tsx`
- **Skills**: Update skills in `app/about/page.tsx`

### Connect Contact Form

Currently, the contact form logs submissions to the console. To connect it to a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the form submission handler in `app/contact/page.tsx`
3. Consider using services like:
   - Formspree
   - EmailJS
   - SendGrid
   - Your own backend API

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is free to use and modify for your business.

## 🤝 Support

For questions or support, please contact:
- Email: Prowebs4you@gmail.com
- Phone: (060) 827 0838 / (060) 036 2113

## 🎯 Next Steps

1. ✅ Update contact information (email, WhatsApp)
2. ✅ Add your actual portfolio projects
3. ✅ Customize testimonials with real client reviews
4. ✅ Connect contact form to backend service
5. ✅ Add Google Analytics or other tracking
6. ✅ Set up custom domain
7. ✅ Add blog section (optional)
8. ✅ Implement live chat (optional)

---

Built with ❤️ by Webs4U
