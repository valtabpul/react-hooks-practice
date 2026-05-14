import { useUser } from './UserContext';

export default function LogoutButton() {
  const { logout, isAuthenticated, isLoading } = useUser();

  if (!isAuthenticated) return null;

  return (
    <button onClick={logout} disabled={isLoading} style={{ margin: 8 }}>
      Cerrar sesión
    </button>
  );
}
