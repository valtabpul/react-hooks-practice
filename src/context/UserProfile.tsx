import { useUser } from './UserContext';

export default function UserProfile() {
  const { user, isAuthenticated } = useUser();

  if (!isAuthenticated || !user) {
    return <div>No hay usuario autenticado.</div>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, margin: 16, borderRadius: 8 }}>
      <h3>Perfil de usuario</h3>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.role}</p>
      {user.role === 'admin' && <p>Panel de administración</p>}
      {user.role === 'student' && <p>Panel del estudiante</p>}
      {user.role === 'guest' && <p>Vista de invitado</p>}
    </div>
  );
}
