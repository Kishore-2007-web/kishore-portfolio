# V. Kishore - Personal Portfolio Website

This is a production-quality, responsive single-page portfolio built with **React** and **Vite**. The project is structured to make customization as simple and direct as possible.

---

## 🚀 How to Run Locally

Follow these commands in your terminal:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Local Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Bundle Locally**
   ```bash
   npm run preview
   ```

---

## 🛠️ How to Customize Your Content

All data is structured in separate configuration files under `src/data/` so you do not need to modify component JSX structures directly.

### 1. Update Hero & Contact Info
Open [siteConfig.js](file:///d:/from-c-drive/OneDrive/Desktop/mrs-portfolio/src/data/siteConfig.js):
- **Hero text & details**: Edit the fields under `siteConfig.personal`.
- **Social links, Email, & Phone**: Edit fields under `siteConfig.contact`.
- **Metadata for Google / SEO**: Modify `siteConfig.meta`.

### 2. Replace the Resume PDF
1. Upload your resume PDF to the `public/` folder (e.g. name it `v_kishore_resume.pdf`).
2. Open [siteConfig.js](file:///d:/from-c-drive/OneDrive/Desktop/mrs-portfolio/src/data/siteConfig.js) and set:
   ```javascript
   resumeUrl: "/v_kishore_resume.pdf"
   ```

### 3. Replace Placeholder Projects
Open [projectsData.js](file:///d:/from-c-drive/OneDrive/Desktop/mrs-portfolio/src/data/projectsData.js):
- Change, add, or remove items inside the array.
- If you have screenshot images for your projects, copy them to `public/projects/` (e.g. `public/projects/my-app.png`) and update the `image` field:
  ```javascript
  image: "/projects/my-app.png",
  ```
- If `image` is left empty (`""`), the application automatically renders a **geometric wireframe mockup card** that keeps the portfolio looking neat and professional!

### 4. Edit Your Skills list
Open [skillsData.js](file:///d:/from-c-drive/OneDrive/Desktop/mrs-portfolio/src/data/skillsData.js) and edit the titles or names under different categories. You can also re-group categories.

### 5. Edit Services
Open [servicesData.js](file:///d:/from-c-drive/OneDrive/Desktop/mrs-portfolio/src/data/servicesData.js) to rewrite descriptions, change names, or choose different icons from `lucide-react`.

### 6. Change Theme Colors & Styles
Open [index.css](file:///d:/from-c-drive/OneDrive/Desktop/mrs-portfolio/src/index.css) and customize the color values under `:root` (for Light Mode) and `:root.dark` (for Dark Mode):
- **Accent Color** (Amber/Gold for dark, Copper for light):
  - In light mode, edit `--accent` (currently `#b45309`).
  - In dark mode, edit `--accent` (currently `#f59e0b`).
- **Backgrounds & Text colors**: Tweak `--bg-primary`, `--bg-secondary`, `--text-primary`, and `--text-secondary` to change colors globally.

---

## ⚡ Deployment

### Deploy to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` from the root directory.

### Deploy to GitHub Pages
1. Configure `base: '/repo-name/'` inside your [vite.config.js](file:///d:/from-c-drive/OneDrive/Desktop/mrs-portfolio/vite.config.js).
2. Follow standard GitHub Pages actions or build scripts.
