import { useUser } from './UserContext';

export default function Navbar() {
  const { user, isAuthenticated, isLoading } = useUser();

  return (
    <nav style={{ padding: 16, background: '#eee', marginBottom: 24 }}>
      {isLoading ? (
        <span>Iniciando sesión...</span>
      ) : isAuthenticated && user ? (
        <span>Bienvenido, {user.name}</span>
      ) : (
        <span>No has iniciado sesión</span>
      )}
    </nav>
  );
}
