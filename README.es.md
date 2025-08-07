# Game of Life Kata 🎮 TypeScript

[🇬🇧 English version](README.md)

Implementación del famoso "Juego de la Vida" de John Conway usando TypeScript moderno. Una kata perfecta para practicar TDD (Test Driven Development) y conceptos de programación funcional. Incluye una interfaz React para visualizar el juego en tiempo real.

## ✨ Características

- **⚡ Ultra rápido**: Vitest, Biome, Vite y pnpm para máximo rendimiento
- **🧪 Testing avanzado**: Vitest con coverage y UI para TDD
- **🎯 Linting unificado**: Biome para linting y formateo
- **🎮 Interfaz interactiva**: React con visualización en tiempo real
- **📱 Responsive**: Interfaz que se adapta a diferentes tamaños de pantalla
- **🎨 Personalizable**: Fácil configuración de colores y velocidad

## 📚 Sobre el Game of Life

El Juego de la Vida de Conway es un autómata celular creado por el matemático John Conway en 1970. Se trata de un "juego de cero jugadores", donde la evolución está determinada por el estado inicial.

### Reglas
1. **Supervivencia**: Una célula viva con 2 o 3 vecinos vivos sobrevive
2. **Muerte por aislamiento**: Una célula viva con menos de 2 vecinos muere
3. **Muerte por sobrepoblación**: Una célula viva con más de 3 vecinos muere
4. **Nacimiento**: Una célula muerta con exactamente 3 vecinos vivos nace

## 📋 Requisitos Previos

- **Node.js**: >= 22.0.0 (LTS recomendado)
- **pnpm**: >= 10.0.0

### Instalación de Prerrequisitos

Guía de instalación de fnm: https://fnm.vercel.app/

TL;DR:
```bash
# Instalar fnm en Linux/MacOS
curl -fsSL https://fnm.vercel.app/install | bash

# Instalar fnm en Windows (usando Chocolatey)
choco install fnm
```

Guía de instalación de pnpm: https://pnpm.io/installation

TL;DR:
```bash
# Instalar pnpm en Linux/MacOS
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Si no tienes curl, puedes usar wget en su lugar
wget -qO- https://get.pnpm.io/install.sh | sh -

# Instalar pnpm en Windows (usando PowerShell)
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

```bash
# Instalar la versión de Node.js usando fnm
fnm use --install-if-missing
```

## 📁 Estructura del Proyecto

```
game-of-life-kata/
├── src/                  # Código fuente
│   ├── App.tsx           # Componente principal de React
│   ├── main.tsx          # Punto de entrada de React
│   ├── gameOfLife.ts     # 🎯 LÓGICA PRINCIPAL A IMPLEMENTAR
│   ├── __tests__/        # Tests
│   │   ├── gameOfLife.test.ts  # 🧪 Tests principales de la kata
│   │   └── App.test.tsx        # Tests del componente App
│   └── test/             # Configuración de testing
│       ├── setup.ts      # Setup de testing
│       └── vitest-setup.d.ts
├── coverage/             # Reportes de coverage (generado)
├── dist/                 # Build para producción (generado)
├── index.html            # Template HTML de Vite
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── vite.config.ts        # Configuración de Vite
├── vitest.config.ts      # Configuración de Vitest
└── README.md             # Este archivo en inglés
```

### 📝 Archivos clave para la kata

- **`src/gameOfLife.ts`**: Aquí implementarás toda la lógica del juego
- **`src/__tests__/gameOfLife.test.ts`**: Tests para guiar tu implementación con TDD
- **`src/App.tsx`**: Interfaz visual para interactuar con el juego

## 🔧 Scripts Principales

### Desarrollo

```bash
# Desarrollo con hot reload
pnpm dev

# Tests en modo watch
pnpm test

# Tests con interfaz web
pnpm test:ui

# Tests con coverage
pnpm test:coverage

# Ejecutar tests una sola vez
pnpm test:run
```

### Calidad de Código

```bash
# Verificar código (linting + formateo)
pnpm lint

# Corregir automáticamente
pnpm lint:fix

# Solo formatear
pnpm format

# Verificar tipos TypeScript
pnpm type-check
```

### Build y Deploy

```bash
# Build para producción
pnpm build

# Preview del build de producción
pnpm preview

# Limpiar archivos generados
pnpm clean
```
