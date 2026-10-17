# 🚀 3D Engineering & Developer Portfolio | Mathesh S.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Site-4ade80?style=for-the-badge&logo=vercel)](https://mathesh-mech.vercel.app)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)

A modern, animated 3D developer portfolio built with React, Three.js, TailwindCSS, and motion effects. This project is designed to creatively showcase my skills bridging the gap between mechanical design (CAD modeling, simulations) and modern software development.

![Mathesh's Portfolio Banner](./public/assets/logos/portfolio-banner.png)
---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Contact Me](#-contact-me)

---

## ✨ Features

- 🔥 **Interactive 3D Visuals:** Powered by React Three Fiber and Drei for a highly engaging user experience.
- ⚡ **Fluid Animations:** Smooth transitions and scroll-based animations orchestrated by Framer Motion.
- 🎨 **Responsive UI:** Clean, mobile-first design implemented with TailwindCSS.
- 💌 **Live Contact Form:** Fully functional messaging system integrated directly with EmailJS.
- 🧱 **Modern Components:** Beautiful UI enhancements utilizing Aceternity UI and Magic UI.
- 🚀 **Optimized Performance:** Lightning-fast development and build environment powered by Vite.

---

## 🛠 Tech Stack

| Technology | Description |
|---|---|
| **React** | Front-end JavaScript library |
| **Vite** | Fast bundler and dev environment |
| **TailwindCSS** | Utility-first CSS framework |
| **React Three Fiber** | 3D rendering with Three.js in React |
| **Drei** | Helpers and abstractions for R3F |
| **Framer Motion** | Animation library for React |
| **EmailJS** | Form handling and email integration |
| **Aceternity UI** | Custom interactive UI components |

---

## 📁 Project Structure

```bash
├── public/
│   ├── assets/             # Images, textures, logos
│   ├── models/             # 3D models (e.g., glTF/glb files)
│   └── vite.svg
├── src/
│   ├── components/         # Reusable UI components
│   ├── constants/          # Site data (socials, projects, etc.)
│   ├── sections/           # Portfolio sections (Hero, About, Contact)
│   ├── App.jsx             # Main app component
│   ├── index.css           # Tailwind CSS styles
│   └── main.jsx            # Entry point
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

## EmailJS Contact Form Setup

Copy `.env.example` to `.env` and set `VITE_EMAILJS_PUBLIC_KEY` to the public key from your EmailJS account. The service and template IDs are already configured in `.env.example`. Restart the Vite server after changing environment variables.

The EmailJS public key is used by the browser and is not a private secret. Never put an EmailJS private key in a `VITE_` variable or commit `.env`; only the example file is tracked.