# 🧩 Mini Virtual DOM Renderer

A lightweight JavaScript project that implements a simplified Virtual DOM rendering system, mimicking some of React's core features such as `createElement`, `render`, function components, class components, and even a basic `useState` hook!

## 🚀 Features

- Virtual DOM structure and rendering
- JSX support with Babel
- Function components
- Class components with state
- Basic custom `useState` hook
- Webpack & Babel setup
- JSX pragma configuration


## 🧑‍💻 Project Structure
````bash
react-redux/
├── dist/                  # Production output
├── src/
│   ├── app.js             # Main entry point
│   ├── react.js           # Virtual DOM & rendering logic
│   └── createElement/     # Original and refactored createElement logic
├── index.html             # App container
├── webpack.config.js      # Webpack configuration
├── babel.config.json      # Babel configuration with JSX pragma
└── README.md              # You are here!
````

## 📦 Technologies
- Vanilla JavaScript
- Babel (@babel/preset-env, @babel/preset-react)
- Webpack
- JSX (with /* @jsx createElement */ pragma)