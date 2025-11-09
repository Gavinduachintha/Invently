# Invently - Inventory Management Landing Page

A modern, responsive landing page for an inventory management SaaS application targeting micro businesses.

## 🎨 Color Theme

The landing page uses a fresh, modern **emerald and teal** color scheme:

- **Primary Emerald**: `#059669` (emerald-600) - CTAs, buttons, main accents
- **Secondary Teal**: `#0d9488` (teal-600) - Gradients, secondary accents
- **Light Emerald**: `#ECFDF5` (emerald-50) - Backgrounds, highlights
- **Dark Gray**: `#111827` (gray-900) - Text, footer
- **Accent Colors**: Emerald, Teal, Orange, Purple, Rose, Amber for feature icons

## 📁 Project Structure

```
src/
├── components/          # All UI components
│   ├── Navbar.jsx      # Navigation bar with mobile menu
│   ├── Hero.jsx        # Hero section with CTA
│   ├── Features.jsx    # Feature cards section
│   ├── Pricing.jsx     # Pricing plans
│   ├── CTA.jsx         # Call-to-action section
│   ├── Footer.jsx      # Footer with links
│   └── ui/             # Reusable UI components
│       └── Button.jsx  # Custom button component
├── hooks/              # Custom React hooks
│   └── useToggle.js    # Toggle state management hook
├── lib/                # Libraries and utilities
│   └── appwrite.js     # Appwrite configuration
├── App.jsx             # Main app component
├── App.css             # Global styles
└── main.jsx            # Entry point
```

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 🧩 Component Overview

### Core Components

- **Navbar**: Sticky navigation with mobile-responsive menu
- **Hero**: Eye-catching hero section with feature highlights
- **Features**: Grid of 6 key features with icons
- **Pricing**: 3-tier pricing cards (Starter, Business, Enterprise)
- **CTA**: Conversion-focused call-to-action
- **Footer**: Comprehensive footer with links and contact info

### Reusable Components

- **Button**: Versatile button with multiple variants (primary, secondary, ghost, white)

### Custom Hooks

- **useToggle**: State management for toggle functionality (used in mobile menu)

## 🎯 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ Icon integration with Lucide React
- ✅ Smooth scrolling navigation
- ✅ Hover effects and animations
- ✅ Accessible and semantic HTML
- ✅ Clean and maintainable code structure

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool
- **Appwrite** - Backend (configured but not used in landing page)

## 📝 Customization

### Changing Colors

Colors are defined using Tailwind CSS classes. Main colors:

- Primary: `blue-600`, `blue-500`, `blue-700`
- Backgrounds: `gray-50`, `gray-100`
- Text: `gray-600`, `gray-900`

### Adding Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update navigation links in `Navbar.jsx` if needed

### Modifying Content

- **Hero text**: Edit `src/components/Hero.jsx`
- **Features**: Update the `features` array in `src/components/Features.jsx`
- **Pricing**: Modify the `plans` array in `src/components/Pricing.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Philosophy

The design focuses on:

- **Simplicity**: Clean, uncluttered interface
- **Trust**: Professional color scheme and layout
- **Conversion**: Clear CTAs and value propositions
- **Accessibility**: Proper contrast and semantic HTML

## 📦 Dependencies

```json
{
  "react": "^19.0.0",
  "tailwindcss": "^4.0.14",
  "lucide-react": "^0.553.0",
  "vite": "^6.1.0"
}
```

## 🚀 Future Enhancements

- Add animations (Framer Motion)
- Implement contact form
- Add customer testimonials section
- Create FAQ section
- Add blog preview section
- Integrate with backend API

## 📄 License

This project is part of the Invently inventory management system.
