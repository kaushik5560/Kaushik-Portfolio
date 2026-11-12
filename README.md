# 🚀 Kaushik Kumar Pandey - Developer Portfolio

A modern, high-performance, and responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**.

---

## ⚡ Option 1: Instant Preview (Without Node.js)
You can test and see your full portfolio right now without installing anything!
- Simply double-click the file:
  `preview.html`
- It will instantly open in your default browser (Chrome, Edge, etc.) with all animations, dark/light theme switch, skills filter, and contact form fully working.

---

## 🛠️ Option 2: Full React + Vite Development Setup

### Step 1: Install Node.js
If you don't have Node.js installed on your Windows PC:
1. Go to [https://nodejs.org/](https://nodejs.org/) and download the **LTS version**.
2. Run the downloaded `.msi` installer and click Next -> Install.
3. Once installed, open your PowerShell or Command Prompt and verify:
   ```bash
   node -v
   npm -v
   ```

### Step 2: Install Project Dependencies
Open your terminal inside this folder (`kaushik-portfolio`) and run:
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```
It will open your local server at `http://localhost:3000`. Any code edits you make in `src/` will instantly hot-reload in the browser.

---

## 📁 Project Structure

```
kaushik-portfolio/
├── preview.html              # Standalone interactive preview file
├── package.json              # Project scripts & dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS styling config
├── index.html                # Main HTML entry
├── src/
│   ├── main.jsx              # React DOM render entry
│   ├── App.jsx               # App container & theme provider
│   ├── index.css             # Tailwind base & custom styles
│   ├── data/
│   │   └── portfolioData.js  # All your resume data (Edit here anytime!)
│   └── components/
│       ├── Navbar.jsx        # Sticky navigation with theme toggle & mobile drawer
│       ├── Hero.jsx          # Hero section with stats, CTAs & social links
│       ├── About.jsx         # About me & key highlights
│       ├── Skills.jsx        # Tabbed skills & CS fundamentals
│       ├── Experience.jsx    # IEEE EMBS internship showcase
│       ├── Projects.jsx      # Projects showcase with live & GitHub links
│       ├── Education.jsx     # Education timeline (B.Tech, 12th, 10th)
│       ├── Achievements.jsx  # Certifications (NPTEL, Gen-AI) & Hackathons
│       ├── Contact.jsx       # Contact form & direct email/phone cards
│       └── Footer.jsx        # Clean footer with back-to-top button
```

---

## ✏️ How to Update Your Information
All your resume data is cleanly isolated in **`src/data/portfolioData.js`**.
Whenever you add a new project, achieve a new certificate, or change your contact info, you only need to update that one file!

---

## 🌐 Free 1-Click Deployment (Vercel)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kaushik's Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [https://vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New Project"**, select your repository, and click **"Deploy"**.
4. In under 30 seconds, your portfolio will be live with a free `https://kaushik-portfolio.vercel.app` domain with free SSL!
