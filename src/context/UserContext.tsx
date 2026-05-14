import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Tipado del usuario
export interface User {
  name: string;
  email: string;
  role: 'admin' | 'student' | 'guest';
}

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Persistencia en localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(userData: User) {
    setIsLoading(true);
    setTimeout(() => {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
    }, 1000); // Simula carga
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated: !!user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de un UserProvider');
  }
  return context;
}
