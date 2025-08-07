# Frontend Technical Test - Apply Digital

A web application hosted at **[https://frontend-test-template-pi.vercel.app/](https://frontend-test-template-pi.vercel.app/)** and developed as part of the technical challenge by **[Apply Digital](https://www.applydigital.com/)**

## 🧩 Tech Stack

- **Framework**: React 18 + Next 14
- **Styling**: Tailwind CSS 3
- **Testing**: Jest, React Testing Library
- **Project Standard**: ESLint, Prettier, commitlint, TypeScript, Husky, Docker
- **Package Manager**: pnpm
- **Runtime**: Node v20.9.0

## ⚙️ Pre-requisites

- Docker and docker-compose installed
- Linux/Mac terminal (or emulate Linux on Windows)
- Free port: 3000
- Node v20.9.0 and pnpm (for manual installation only)

## 🚀 Installation

### Option 1: Run App with Docker (Recommended)

1. Execute the script to run the app

```bash
chmod 777 ./quickstart.sh
./quickstart.sh
```

2. Go to [localhost:3000](http://localhost:3000/)

### Option 2: Manual Installation

Alternatively, you can install and run the project manually:

```bash
pnpm install
pnpm dev
```

Then navigate to [localhost:3000](http://localhost:3000/)

## 🧪 Testing

The project includes comprehensive unit and integration tests written with **Jest** and **React Testing Library**, covering cart functionality and catalog filtering behavior.

Run tests with:
```bash
pnpm test
```

## 🌐 Application

The application was deployed in a production environment using **Vercel**, allowing immediate access without the need for local installation.

🔗 **Public URL:**
[https://frontend-test-template-pi.vercel.app/](https://frontend-test-template-pi.vercel.app/)

### Routing System

| Route          | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| `/`            | Main page displaying the game catalog with genre filtering and pagination features.  |
| `/?genre`      | Catalog filtered by specific genre (e.g., Action, RPG, Adventure, Strategy).        |
| `/cart`        | Shopping cart page showing added games and order summary.                            |

## 📁 Project Structure

The application follows a modular structure based on Next.js 14 App Router, organizing components and logic for maintainability and scalability:

```
src/
|-- app/
|   |-- api/
|   |-- fonts/
|   |-- cart/
|   |   |-- page.tsx
|   |-- globals.css
|   |-- layout.tsx
|   |-- page.tsx
|-- components/
|   |-- features/
|   |-- icons/
|   |-- layout/
|   |-- navigation/
|   |-- providers/
|   |-- ui/
|-- config/
|-- contexts/
|-- hooks/
|-- services/
|-- types/
|-- utils/
|-- __tests__/
```

## ✨ Features
- Game catalog with genre filtering
- Shopping cart with localStorage sync
- Responsive design (mobile-first)
- Loading states and skeleton screens
- Cross-tab synchronization

### 💡 Note:

- Since the Figma design lacked predefined variables, custom design variables were created based on the naming of elements and usage patterns observed in the design system.
- Performance, WCAG-compliant accessibility, responsive design with pixel-perfect implementation, and code quality were prioritized during the development of the application.

## 📌 Decisions made

- Components are loaded using techniques like **Streaming SSR** and showing skeletons for a better user experience.
- **React Context API** was chosen over third-party State Management solutions (Redux, Zustand) since the use case is simple and doesn't require a complex state architecture.
- Added **useLocalStorageSync** hook to synchronize add and remove game actions across all browser tabs.
- Fixed bug in **/api/games/route.ts** that caused totalPages to always differ from the total games without considering the genre filter.
- Implemented **CI/CD** workflow to automate testing and deployment.
- Configured the project using **Docker**, facilitating execution and standardization across different machines.

## 📈 Future Improvements

- **Infinite Scroll**: Replace the "See More" button with infinite scroll functionality to provide a more seamless browsing experience.
- **Virtual Scrolling**: Implement **@tanstack/react-virtual** to render only visible elements in the viewport, significantly reducing DOM nodes and improving performance on the Catalog page (especially beneficial for mobile devices).
- **Mobile Optimization**: Enhance application performance for mobile devices through code splitting, image optimization, and touch gesture improvements.
- **Testing Structure**: Refactor test architecture by separating mocks and setup configurations into dedicated folders and files for better maintainability.
- **Development Container**: Configure a **DevContainer** with VS Code to provide a consistent development environment across different machines and teams.

## 👨‍💻 Author

Developed by **Daniel Jesús Angeles Rojas**.

- 📫 Email: daniel.angeles9806@gmail.com
- 💼 LinkedIn: [linkedin.com/in/danielangeles98](https://www.linkedin.com/in/danielangeles98/)
- 🎯 GetOnBoard: [Daniel Jesús Angeles Rojas](https://www.getonbrd.com/p/daniel-jesus-angeles-rojas)
- 🐙 Github: [DanDiDanD](https://github.com/DanDiDanD)