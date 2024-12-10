
# MU Portal System

The Frontend Application of Menoufia University Portal System.

---

## **Table of Contents**

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Technologies Used](#technologies-used)
4. [Environment Variables](#environment-variables)
5. [Contributing](#contributing)

---

## **Getting Started**

### Prerequisites
- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Menoufia-University-Portal/Main-Portal-Frontend.git
   cd Main-Portal-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
---

## **Project Structure**

```plaintext
project-root/
├── public/                 # public assets (not complied)
├── src/
│   ├── assets/             # Compiled Assets (used in code)
│   ├── components/         # Reusable components
│   │   ├── Button/
│   │   │   ├── Button.jsx  # Component logic
│   │   │   ├── Button.css  # Styles
│   │   │   └── index.js    # Barrel export for easy imports
│   │   └── ...
│   ├── features/           # Feature-specific modules
│   │   ├── User/
│   │   │   ├── components/ # Subcomponents specific to this feature
│   │   │   ├── hooks/      # Custom hooks for this feature
│   │   │   ├── services/   # API calls or logic related to this feature
│   │   │   ├── UserPage.jsx # Feature container
│   │   │   └── index.js    # Barrel export
│   │   └── ...
│   ├── hooks/              # Reusable custom hooks
│   │   └── useAuth.js
│   ├── layouts/            # Layout components (e.g., Header, Footer)
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page-level components (views)
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   └── index.js
│   │   └── ...
│   ├── styles/             # Global styles and variables
│   │   └── main.css
│   ├── server/             # Handling server requests
│   ├── App.jsx             # Main app component
│   ├── index.js            # Entry point of the app
│   └── routes.js           # Centralized route definitions (optional)
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
└── .gitignore              # Files to ignore in Git
```

---


## **Technologies Used**

- **Frontend:**
  - React (with Hooks)
  - React Router
  - Redux/Context API (state management)
  - Axios (API integration)
- **Styling:**
  - CSS Modules / TailwindCSS

---

## **Environment Variables**

Create a `.env` file in the root directory with the following keys:

```plaintext
VITE_API_URL=<Your API base URL>
VITE_API_KEY=<Your API key>
```

---

## **Contributing**

Contributions are welcome! Follow these steps to contribute:

1. Clone the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---