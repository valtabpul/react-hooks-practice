import { createContext, useContext, useState } from "react"

const AuthContext = createContext({ user: null, login: () => {}, logout: () => {} })

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
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
