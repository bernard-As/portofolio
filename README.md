# Backend Developer Portfolio

A modern, responsive portfolio website showcasing backend development expertise and AI tools integration. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type Safety**: Full TypeScript implementation
- **Contact Form**: Integrated email submission using EmailJS
- **Smooth Scrolling**: Seamless navigation between sections
- **SEO Optimized**: Semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🏃‍♂️ Getting Started

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portofolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## ⚙️ Configuration

### EmailJS Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://emailjs.com)
2. Create an email service and template
3. Update the EmailJS configuration in `src/components/Contact.tsx`:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### Customization

1. **Personal Information**: Update contact details in `src/components/Contact.tsx` and `src/components/Footer.tsx`
2. **Social Links**: Modify social media links in `src/components/Hero.tsx` and `src/components/Footer.tsx`
3. **Projects**: Add your projects in `src/components/Projects.tsx`
4. **Skills**: Update your skills and proficiency levels in `src/components/Skills.tsx`
5. **About Section**: Personalize your story in `src/components/About.tsx`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment

This project is ready to be deployed on:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any static hosting service**

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main App component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customizing Styles

The project uses Tailwind CSS with a custom configuration. You can modify colors, fonts, and other design tokens in `tailwind.config.js`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

If you have any questions about this portfolio template, feel free to reach out!

---

**Note**: Remember to update all placeholder content (email addresses, social links, project details) with your actual information before deploying.
