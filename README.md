# Homepage Portfolio

A modern, responsive personal homepage built with **React** 

**Live Demo:** [mayankwebsite.netlify.app](https://mayankwebsite.netlify.app/)

[![Image from Gyazo](https://i.gyazo.com/4b1b763edf98a3193a4d8fca555aaace.jpg)](https://mayankwebsite.netlify.app/)
---

## Project Structure

```
.
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── components/
│   │   └── ... (NavBar, Carousel, etc.)
│   └── components/stylesheets/
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Customization

- **Project Data:**  
  Edit `src/components/Data.jsx` to add or update carousel projects.
- **Styling:**  
  Modify CSS in `src/App.css` and `src/components/stylesheets/`.
- **Navigation:**  
  Update navigation links in `src/components/NavLinks.jsx` and social/contact links in `src/components/NavSocial.jsx` and `src/components/NavContact.jsx`.

## Deployment

This site is deployed on [Netlify](https://www.netlify.com/).  
To deploy your own version, connect your repository to Netlify and set the build command to `npm run build` and the publish directory to `dist`.

---

Built with ❤️ using [React](https://react.dev/)