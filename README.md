# Sneakx – Sneaker E-Commerce Web App

- Sneakx is a sleek, responsive front-end e-commerce website designed to showcase my React and Vite skills. 
- Built as a resume project, it offers a seamless shopping experience for sneaker enthusiasts across all ages and genders.


# Features

- Product Catalog: Browse a curated collection of sneakers with filters for gender and age group.
- Add to Cart: Add items to your cart with real-time updates.
- Like Items: Mark your favorite sneakers for quick access.
- Persistent State: Utilizes `useContext` and `localStorage` for state management, ensuring data persists across sessions.
- Responsive Design: Optimized for both desktop and mobile devices.
- Lightweight & Fast: Built with Vite for rapid development and performance.


# Tech Stack

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

- Frontend: HTML,JavaScript,JSX,React, Vite
- State Management: React Context API
- JSON :custom sneaker dataset for product rendering
- Styling: CSS Modules
- Bundler: Vite
- Version Control: Git, GitHub


# Live Demo

Experience Sneakx in action: [sneakx.vercel.app](https://sneakx.vercel.app)


# Getting Started
## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

## Clone the repository:
git clone https://github.com/hemntpendem/sneakx.git
cd sneakx

## Install dependencies:
npm install

## Start the development server:
npm run dev
Visit http://localhost:5173 in your browser.

# Project Structure
sneakx/
├── public/              # Static assets (images, icons, etc.)
│   ├── sneakers/        # Sneaker images (.avif)
│   └── favicon.ico
│
├── src/                 # Main source code
│   ├── assets/          # Fonts, extra images, global styles
│   ├── components/      # Reusable UI components (Navbar, Footer, Cards, etc.)
│   ├── pages/           # Page-level components (Home, Men, Women, Kids, Collection, CartItem, Liked, SearchProduct)
│   ├── context/         # React Context (Cart, Liked, etc.)
│   ├── data/            # Static JSON sneaker dataset
│   ├── App.jsx          # Main app file
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

# Learnings & Challenges

- Mastered React Context API for global state management.
- Implemented localStorage to persist user data across sessions.
- Gained hands-on experience with Vite's fast bundling and hot module replacement.
- Designed a user-friendly UI with a focus on accessibility and responsiveness.

# Contributing

- Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your proposed changes.

# Screenshots

## On Desktop

![Welcome Popup](https://github.com/user-attachments/assets/84c0d3fa-dd1b-475a-a0fd-9f601db1b32b)

![Home Page](https://github.com/user-attachments/assets/4945788a-724a-4ac4-95c0-37cd5254eafe)

![Product Page](https://github.com/user-attachments/assets/ca232eea-1d22-4bc3-9b39-371f6ee5aac2)

![Liked Items Page](https://github.com/user-attachments/assets/79beb7e7-019f-4be2-8203-228f3f4fdd9e)

![Cart page](https://github.com/user-attachments/assets/bd5486f0-a53b-4cf5-a86b-48caecf69c88)

![Profile Page](https://github.com/user-attachments/assets/dc2e5930-f0c2-4eaa-ad87-50a8c2d4779d)


## On Mobile

![Home Page On Mobile](https://github.com/user-attachments/assets/e2c535bf-327b-4064-b880-e8686b872e4d)

![Mobile Nav Bar](https://github.com/user-attachments/assets/220f7f73-307c-418c-93fe-360bba26df89)

![Search Page On Mobile](https://github.com/user-attachments/assets/ea6a9e21-c75e-4d5c-8dd9-10cb20f84c35)

![Product Page On Mobile](https://github.com/user-attachments/assets/c04186fc-a5f8-4450-95c6-e2513581847e)






