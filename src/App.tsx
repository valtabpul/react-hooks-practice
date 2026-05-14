import './App.css'
import { useState } from 'react';
import './App.css';
// Ejercicios
import SmartCounter from './exercises/SmartCounter';
import RegisterForm from './exercises/RegisterForm';
import UserSearch from './exercises/UserSearch';
import TodoApp from './exercises/TodoApp';
import UserList from './exercises/UserList';
import Timer from './exercises/Timer';
import ShoppingCart from './exercises/ShoppingCart';
import ProductFilter from './exercises/ProductFilter';
import FocusInput from './exercises/FocusInput';
import TaskReducer from './exercises/TaskReducer';
import ThemeContextApp from './exercises/ThemeContextApp';
import AuthContextApp from './exercises/AuthContextApp';
import ContactForm from './exercises/ContactForm';
import PostList from './exercises/PostList';
import UserDashboard from './exercises/UserDashboard';
// Context API Ejercicio
import { UserProvider } from './context/UserContext';
import Navbar from './context/Navbar';
import LoginButton from './context/LoginButton';
import LogoutButton from './context/LogoutButton';
import UserProfile from './context/UserProfile';

const exercises = [
  { id: 1, name: '1. Contador inteligente', component: <SmartCounter /> },
  { id: 2, name: '2. Formulario de registro', component: <RegisterForm /> },
  { id: 3, name: '3. Buscador de usuarios', component: <UserSearch /> },
  { id: 4, name: '4. Lista de tareas', component: <TodoApp /> },
  { id: 5, name: '5. Consumo de API (Usuarios)', component: <UserList /> },
  { id: 6, name: '6. Temporizador', component: <Timer /> },
  { id: 7, name: '7. Carrito de compras', component: <ShoppingCart /> },
  { id: 8, name: '8. Filtro de productos', component: <ProductFilter /> },
  { id: 9, name: '9. Input con foco automático', component: <FocusInput /> },
  { id: 10, name: '10. Tareas con useReducer', component: <TaskReducer /> },
  { id: 11, name: '11. Tema con Context API', component: <ThemeContextApp /> },
  { id: 12, name: '12. Autenticación con Context API', component: <AuthContextApp /> },
  { id: 13, name: '13. Custom Hook - Formulario', component: <ContactForm /> },
  { id: 14, name: '14. Custom Hook - Fetch API', component: <PostList /> },
  { id: 15, name: '15. Dashboard integrador', component: <UserDashboard /> },
];

function ContextApiApp() {
  return (
    <UserProvider>
      <Navbar />
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <LoginButton />
        <LogoutButton />
      </div>
      <UserProfile />
    </UserProvider>
  );
}

function App() {
  const [view, setView] = useState<'practica' | 'contexto' | null>(null);
  const [currentExe, setCurrentExe] = useState<number | null>(null);

  if (!view) {
    return (
      <div className="app-container" style={{ textAlign: 'center', marginTop: 40 }}>
        <h1>Ejercicios de React</h1>
        <button
          onClick={() => setView('practica')}
          style={{
            margin: 10,
            padding: '14px 32px',
            background: 'linear-gradient(90deg, #e0e0e0 0%, #bdbdbd 100%)',
            color: '#222',
            border: '1px solid #bdbdbd',
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            cursor: 'pointer',
            transition: 'transform 0.1s, background 0.2s',
          }}
          onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
          onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          onMouseEnter={e => (e.currentTarget.style.background = '#eeeeee')}
          onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #e0e0e0 0%, #bdbdbd 100%)')}
        >
          Práctica Ejercicios
        </button>
        <button
          onClick={() => setView('contexto')}
          style={{
            margin: 10,
            padding: '14px 32px',
            background: 'linear-gradient(90deg, #e0e0e0 0%, #bdbdbd 100%)',
            color: '#222',
            border: '1px solid #bdbdbd',
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            cursor: 'pointer',
            transition: 'transform 0.1s, background 0.2s',
          }}
          onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
          onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          onMouseEnter={e => (e.currentTarget.style.background = '#eeeeee')}
          onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #e0e0e0 0%, #bdbdbd 100%)')}
        >
          Ejercicio Context API
        </button>
      </div>
    );
  }

  if (view === 'contexto') {
    return (
      <div className="app-container" style={{ maxWidth: 500, margin: '40px auto', textAlign: 'center' }}>
        <button
          onClick={() => setView(null)}
          style={{
            marginBottom: 20,
            padding: '10px 24px',
            background: 'linear-gradient(90deg, #eeeeee 0%, #bdbdbd 100%)',
            color: '#222',
            border: '1px solid #bdbdbd',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'transform 0.1s, background 0.2s',
          }}
          onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
          onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
          onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #eeeeee 0%, #bdbdbd 100%)')}
        >
          Volver al menú principal
        </button>
        <hr />
        <ContextApiApp />
      </div>
    );
  }

  return (
    <div className="app-container" style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center' }}>
      <button onClick={() => setView(null)} style={{ marginBottom: 20 }}>Volver al menú principal</button>
      <hr />
      {currentExe === null ? (
        <div>
          <h2>Selecciona un ejercicio:</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
            {exercises.map(e => (
              <button
                key={e.id}
                onClick={() => setCurrentExe(e.id)}
                style={{
                  textAlign: 'left',
                  width: '100%',
                  maxWidth: 400,
                  margin: 4,
                  padding: '14px 24px',
                  background: 'linear-gradient(90deg, #f5f5f5 0%, #bdbdbd 100%)',
                  color: '#222',
                  border: '1px solid #bdbdbd',
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: 16,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'transform 0.1s, background 0.2s',
                }}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseEnter={e => (e.currentTarget.style.background = '#e0e0e0')}
                onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #f5f5f5 0%, #bdbdbd 100%)')}
              >
                {e.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setCurrentExe(null)}
            style={{
              marginBottom: 20,
              padding: '10px 24px',
              background: 'linear-gradient(90deg, #eeeeee 0%, #bdbdbd 100%)',
              color: '#222',
              border: '1px solid #bdbdbd',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'transform 0.1s, background 0.2s',
            }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
            onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #eeeeee 0%, #bdbdbd 100%)')}
          >
            Volver a la lista de ejercicios
          </button>
          <br /><br />
          {exercises.find(e => e.id === currentExe)?.component}
        </div>
      )}
    </div>
  );
}

export default App;
