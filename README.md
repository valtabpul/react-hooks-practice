# Prácticas de React y Vite

Este proyecto es un entorno de ejercicios prácticos para aprender y dominar los conceptos fundamentales y avanzados de React, especialmente los React Hooks y el Context API.

## 🚀 Cómo correr el proyecto

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1. Abre tu terminal.
2. Navega a la carpeta del proyecto.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre tu navegador en la URL que indique la terminal (típicamente http://localhost:5173/).

## 📁 Estructura del Proyecto

```
react-hooks-practice/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   ├── index.css
│   ├── hooks/
│   │   ├── useFetch.ts
│   │   └── useForm.ts
│   └── exercises/
│       ├── AuthContextApp.tsx
│       ├── ContactForm.tsx
│       ├── FocusInput.tsx
│       ├── PostList.tsx
│       ├── ProductFilter.tsx
│       ├── RegisterForm.tsx
│       ├── ShoppingCart.tsx
│       ├── SmartCounter.tsx
│       ├── TaskReducer.tsx
│       ├── ThemeContextApp.tsx
│       ├── Timer.tsx
│       ├── TodoApp.tsx
│       ├── UserDashboard.tsx
│       ├── UserList.tsx
│       ├── UserSearch.tsx
└── ...
```

---

## 🛠️ Ejercicios y Hooks Utilizados

Cada archivo en `src/exercises/` es un ejercicio independiente y visualmente separado en la interfaz:

- **SmartCounter.tsx**: Contador inteligente con límites y reinicio. (useState)
- **RegisterForm.tsx**: Formulario de registro controlado con validaciones. (useState)
- **UserSearch.tsx**: Buscador de usuarios por nombre y rol, actualiza el título del navegador. (useState, useEffect)
- **TodoApp.tsx**: Lista de tareas con persistencia en localStorage. (useState, useEffect)
- **UserList.tsx**: Consumo de usuarios desde API con manejo de carga y error. (useState, useEffect)
- **Timer.tsx**: Temporizador con pausa y reinicio usando useRef. (useState, useEffect, useRef)
- **ShoppingCart.tsx**: Carrito de compras con totales derivados. (useState, useMemo)
- **ProductFilter.tsx**: Filtro avanzado de productos por nombre y categoría. (useState, useMemo)
- **FocusInput.tsx**: Input con foco automático usando useRef. (useState, useRef, useEffect)
- **TaskReducer.tsx**: Gestión de tareas usando useReducer. (useReducer, useState)
- **ThemeContextApp.tsx**: Tema claro/oscuro usando Context API, afecta varios componentes. (useContext, useState)
- **AuthContextApp.tsx**: Autenticación simulada con Context API. (useContext, useState)
- **ContactForm.tsx**: Formulario de contacto sencillo. (useState)
- **PostList.tsx**: Lista de posts usando un custom hook de fetch. (useFetch, useState)
- **UserDashboard.tsx**: Dashboard de usuarios integrando hooks personalizados. (useFetch, useState)

### Hooks personalizados

- **useFetch.ts**: Para peticiones HTTP reutilizables.
- **useForm.ts**: Para manejo de formularios.

---

## 🪝 Explicación breve de los Hooks

- **useState**: Estado local del componente. Ej: contador, inputs, listas.
- **useEffect**: Efectos secundarios. Ej: peticiones HTTP, localStorage, título del navegador.
- **useRef**: Referencia mutable. Ej: foco automático, guardar intervalos.
- **useMemo**: Memoriza cálculos derivados. Ej: totales en carrito, filtros de productos.
- **useReducer**: Manejo de estado complejo con acciones. Ej: lista de tareas avanzada.
- **useContext**: Estado global para evitar prop drilling. Ej: tema, usuario autenticado.

---

## 📚 Notas

- Cada ejercicio está visualmente separado y centrado.
- Los títulos de cada ejercicio son descriptivos y no incluyen números.
- El código es sencillo y didáctico, ideal para practicar y modificar.

---
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
