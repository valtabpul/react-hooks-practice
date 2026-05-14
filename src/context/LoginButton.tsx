import { useState } from 'react';
import { useUser } from './UserContext';

const roles = [
  { value: '', label: 'Selecciona un rol' },
  { value: 'student', label: 'Estudiante' },
  { value: 'admin', label: 'Administrador' },
  { value: 'guest', label: 'Invitado' },
];

export default function LoginButton() {
  const { login, isAuthenticated, isLoading } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  if (isAuthenticated) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Validaciones
    if (!name.trim()) {
      setError('El nombre es obligatorio');
      return;
    }
    if (!email.trim()) {
      setError('El email es obligatorio');
      return;
    }
    if (!role) {
      setError('El rol es obligatorio');
      return;
    }
    setError('');
    login({ name, email, role } as any);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start', margin: '16px 0', maxWidth: 300 }}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        disabled={isLoading}
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', width: '100%' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={isLoading}
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', width: '100%' }}
      />
      <select
        value={role}
        onChange={e => setRole(e.target.value)}
        disabled={isLoading}
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', width: '100%' }}
      >
        {roles.map(r => (
          <option key={r.value} value={r.value}>{r.label}</option>
        ))}
      </select>
      <button type="submit" disabled={isLoading} style={{ marginTop: 8, padding: '8px 16px', borderRadius: 4, border: 'none', background: '#444', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
        {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </button>
      {error && <div style={{ color: 'red', marginTop: 4 }}>{error}</div>}
    </form>
  );
}
