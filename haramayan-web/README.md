# Haramayan Itinakdang Makatulong (HIM) Website

A modern, responsive single-page website for HIM - The Best Social Welfare Service Program ONLINE.

## Features

- **Single-Page Navigation**: Smooth scrolling navigation between sections
- **Responsive Design**: Optimized for both mobile and web browsing
- **Greenish Theme**: Professional green color palette throughout the design
- **Comprehensive Sections**:
  - Hero section with compelling call-to-action
  - Why Choose HIM - highlighting key benefits
  - About Us - organization story and mission
  - Programs - detailed service offerings
  - Membership - information and FAQs
- **Authentication Integration**: Login and Register buttons redirect to secure.haramayan.com
- **Mobile-Friendly**: Hamburger menu and responsive layout

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd haramayan-web
vercel
```

3. Follow the prompts to complete deployment

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Select the `haramayan-web` directory as the root directory
5. Vercel will automatically detect Vite configuration
6. Click "Deploy"

### Option 3: Deploy via GitHub Integration

1. Connect your GitHub repository to Vercel
2. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: haramayan-web
   - **Build Command**: npm run build
   - **Output Directory**: dist
3. Deploy automatically on every push to main branch

## Project Structure

```
haramayan-web/
├── public/          # Static assets
├── src/
│   ├── App.jsx     # Main application component
│   ├── App.css     # Component styles
│   ├── index.css   # Global styles with Tailwind directives
│   └── main.jsx    # Application entry point
├── index.html      # HTML template
├── package.json    # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js  # Vite configuration
└── vercel.json     # Vercel deployment configuration
```

## Configuration

### Tailwind Colors

The project uses a custom green color palette defined in `tailwind.config.js`:
- Primary colors range from 50 (lightest) to 900 (darkest)
- Main brand color: `primary-600`

### External Links

- Login: https://secure.haramayan.com/page-auth-login.php
- Register: https://secure.haramayan.com/page-auth-register.php

## Contact

For more information about HIM:
- Email: jegessentialcollegesinc@gmail.com
- Phone: 0995-389-5071
- Address: Essential School, Bongabon Nueva Ecija
- Contact Person: Javier Garde

## License

© 2024 HIM Plus International Organization. All rights reserved.
Recognized by Central Luzon Conference since 2015
