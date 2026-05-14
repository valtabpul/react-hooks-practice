import { createContext, useContext, useState } from "react"

type User = { name: string; email: string };
type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  type User = { name: string, email: string }
  const [user, setUser] = useState<User | null>(null)
  function login() {
    setUser({ name: "Juan", email: "juan@email.com" })
  }
  function logout() {
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

function AuthContextApp() {
  const { user, login, logout } = useContext(AuthContext)
  return (
    <AuthProvider>
      <h1>Auth Context App</h1>
      {user ? (
        <>
          <p>Bienvenido, <b>{user.name}</b></p>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <p>No has iniciado sesión</p>
          <button onClick={login}>Iniciar sesión</button>
        </>
      )}
    </AuthProvider>
  )
}

export default AuthContextApp
