# Game of Life Kata 🎮 TypeScript

[🇪🇸 Versión en Español](README.es.md)

Implementation of John Conway's famous "Game of Life" using modern TypeScript. A perfect kata for practicing TDD (Test Driven Development) and functional programming concepts. Includes a React interface to visualize the game in real-time.

## ✨ Features

- **⚡ Ultra fast**: Vitest, Biome, Vite, and pnpm for maximum performance
- **🧪 Advanced testing**: Vitest with coverage and UI for TDD
- **🎯 Unified linting**: Biome for linting and formatting
- **🎮 Interactive interface**: React with real-time visualization
- **� Responsive**: Interface adapts to different screen sizes
- **🎨 Customizable**: Easy configuration of colors and speed

## 📚 About the Game of Life

Conway's Game of Life is a cellular automaton created by mathematician John Conway in 1970. It's a "zero-player game" where evolution is determined by the initial state.

### Rules
1. **Survival**: A live cell with 2 or 3 live neighbors survives
2. **Death by isolation**: A live cell with fewer than 2 neighbors dies
3. **Death by overpopulation**: A live cell with more than 3 neighbors dies
4. **Birth**: A dead cell with exactly 3 live neighbors becomes alive

## 📋 Prerequisites

- **Node.js**: >= 22.0.0 (LTS recommended)
- **pnpm**: >= 10.0.0

### Prerequisites Installation

Installation guide for fnm: https://fnm.vercel.app/

TL;DR:
```bash
# Install fnm on Linux/MacOS
curl -fsSL https://fnm.vercel.app/install | bash

# Install fnm on Windows (using Chocolatey)
choco install fnm
```

Installation guide for pnpm: https://pnpm.io/installation

TL;DR:
```bash
# Install pnpm on Linux/MacOS
curl -fsSL https://get.pnpm.io/install.sh | sh -

# If you don't have curl, you can use wget instead
wget -qO- https://get.pnpm.io/install.sh | sh -

# Install pnpm on Windows (using PowerShell)
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

```bash
# Install Node.js version using fnm
fnm use --install-if-missing
```

## 📁 Project Structure

```
game-of-life-kata/
├── src/                  # Source code
│   ├── App.tsx           # Main React component
│   ├── main.tsx          # React entry point
│   ├── gameOfLife.ts     # 🎯 MAIN LOGIC TO IMPLEMENT
│   ├── __tests__/        # Tests
│   │   ├── gameOfLife.test.ts  # 🧪 Main kata tests
│   │   └── App.test.tsx        # App component tests
│   └── test/             # Testing configuration
│       ├── setup.ts      # Testing setup
│       └── vitest-setup.d.ts
├── coverage/             # Coverage reports (generated)
├── dist/                 # Production build (generated)
├── index.html            # Vite HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── vitest.config.ts      # Vitest configuration
└── README.md             # This file
```

### 📝 Key files for the kata

- **`src/gameOfLife.ts`**: Here you'll implement all the game logic
- **`src/__tests__/gameOfLife.test.ts`**: Tests to guide your TDD implementation
- **`src/App.tsx`**: Visual interface to interact with the game

## 🔧 Main Scripts

### Development

```bash
# Development with hot reload
pnpm dev

# Tests in watch mode
pnpm test

# Tests with web UI
pnpm test:ui

# Tests with coverage
pnpm test:coverage

# Run tests once
pnpm test:run
```

### Code Quality

```bash
# Check code (linting + formatting)
pnpm lint

# Auto-fix issues
pnpm lint:fix

# Format code only
pnpm format

# Check TypeScript types
pnpm type-check
```

### Build and Deploy

```bash
# Production build
pnpm build

# Preview production build
pnpm preview

# Clean generated files
pnpm clean
```
