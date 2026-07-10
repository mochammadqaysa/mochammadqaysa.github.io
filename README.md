# ⚡️ Mochammad Qaysa Al Haq - Personal Portfolio

A modern, bento-style personal portfolio website built with Astro and Tailwind CSS. 
This portfolio showcases my professional experiences, projects, technical skills, and includes a guestbook feature and customizable themes.

## ✨ Features

- **Modern Bento-grid UI**: Sleek, fully responsive, and highly interactive layout inspired by the bento box design.
- **Dynamic Themes**: Multiple color themes (Default, Blue, Green, Yellow, Purple) and a beautiful Glassmorphism style.
- **Career Timeline**: Detailed timeline of my professional experiences.
- **Project Showcase**: Visual representation of past projects with links and tags.
- **Guestbook**: Interactive database-driven guestbook where visitors can leave messages.
- **Performance Optimized**: Fast loading times, SEO optimizations, and smooth micro-animations.
- **Custom Loading Screen**: A personalized boot sequence loading animation.

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: CSS animations & [Motion](https://motion.dev/)
- **Database**: Astro DB (Turso/LibSQL) for the Guestbook
- **Icons**: [Astro Icon](https://www.astroicon.dev/) & [Devicons](https://devicon.dev/)

## 📂 Project Structure

```text
├── public/                 # Static assets (images, resumes, etc.)
├── src/
│   ├── assets/             # Images and icons used in components
│   ├── components/         # Reusable Astro and UI components
│   │   ├── guestbook/      # Guestbook specific components
│   │   ├── Card/           # Base Bento card components
│   │   └── ...
│   ├── layouts/            # Global page layouts (BasicLayout, Layout)
│   ├── lib/                # Utility functions and constants
│   ├── pages/              # Application routes (index, experiences, projects, etc.)
│   ├── site-config.ts      # Global site configuration data
│   └── style.css           # Global styles and theme definitions
├── astro.config.mjs        # Astro configuration file
├── tailwind.config.cjs     # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-link>
   cd astro-bento-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Database Setup (Guestbook)**
   This project uses Astro DB. To run locally with a fresh database schema:
   ```bash
   pnpm astro db push
   ```
   *Note: If you are connecting to a remote Turso DB, you will need to set `ASTRO_DB_REMOTE_URL` and `ASTRO_DB_APP_TOKEN` in your `.env` file.*

4. **Start the development server**
   ```bash
   pnpm run dev
   ```

## ⚙️ Configuration

- **Personal Information**: You can modify the site metadata (Name, Email, Social Links, SEO Info) in `src/site-config.ts`.
- **Styling & Themes**: Custom CSS properties and themes are defined in `src/style.css`.
- **Environment Variables**: Create a `.env` file in the root directory for any database credentials or API keys.

## 🙏 Credits & Acknowledgements

This portfolio was made possible thanks to these amazing open-source projects that served as huge inspirations:

- **[Ladvace/astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio)**: For the core Bento-grid layout, card components, and overall architectural inspiration. 
- **[mohdfxhym/portfolio](https://github.com/mohdfxhym/portfolio)**: For the inspiration behind the custom terminal-style loading screen and boot sequence.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
