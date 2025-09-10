# MEST Talent Connect Frontend

This is the **frontend application** for the **MEST Talent Connect Platform**, built with **React**, **Vite**, **TailwindCSS**, **React Router**, and **Framer Motion**.

The platform connects **African tech talent** with **employers worldwide**.  
This repository contains the **Phase 1 (Pilot)** deliverables:

- Landing Page  
- Talent Portfolio Page  

---

## 🚀 Tech Stack

- [React 18](https://react.dev/) – UI framework  
- [Vite](https://vitejs.dev/) – Build tool & dev server  
- [TailwindCSS](https://tailwindcss.com/) – Styling  
- [React Router](https://reactrouter.com/) – Routing  
- [Framer Motion](https://www.framer.com/motion/) – Animations  

---

## 📦 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-org/MEST-Talent-Connect-Frontend.git
   cd MEST-Talent-Connect-Frontend
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser 🎉

---

## 📁 Folder Structure

```
MEST-Talent-Connect-Frontend/
│── public/                  # Static assets (favicon, static images)
│
│── src/
│   ├── assets/              # Logos, icons, illustrations
│   ├── components/          # Reusable UI (Navbar, Footer, TalentCard, PageWrapper)
│   ├── layouts/             # Layouts with persistent Navbar/Footer
│   ├── pages/               # LandingPage, PortfolioPage
│   ├── routes/              # AppRoutes with React Router + Framer Motion
│   ├── utils/               # Helpers, dummy data for talent cards
│   ├── App.jsx              # Root app shell
│   ├── main.jsx             # React DOM entry
│   └── index.css            # TailwindCSS imports
│
│── package.json
│── tailwind.config.js
│── README.md
```

---

## 🌍 Available Routes

* `/` → **Landing Page** (Hero, CTAs, Skill Showcase)
* `/talents` → **Portfolio Page** (Talent grid with cards)

---

## 🎬 Animations

* **PageWrapper** → Smooth fade & slide-in transitions for all pages
* **TalentCard** → Hover scale effect
* **Framer Motion** → Extendable for staggered animations, hero text, etc.

---

## 👥 Team Roles (Phase 1 Deliverable)

* **Frontend Developers** → Landing Page, Talent Page
* **UI Designers** → Figma design handoff for pages
* **Backend Developers** → API to serve talent data (future integration)
* **Project Lead** → Requirement documentation, repo setup, data provision

---

## 📝 License

This project is maintained by the **MEST Talent Connect team**.
Internal use only — not yet open source.
