import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

interface User {
  id: number
  name: string
  email: string
}

function UserDashboard() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users")
  const { data: users, loading, error } = useFetch<User[]>(url)

  return (
    <section style={{ maxWidth: 600, margin: "auto" }}>
      <h1>Dashboard de Usuarios</h1>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}>Todos</button>
        <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/users?_limit=3")}>Solo 3</button>
      </div>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p>Error al cargar usuarios</p>}
      {!loading && !error && (
        <ul>
          {users?.map(u => (
            <li key={u.id}>
              <b>{u.name}</b> - {u.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UserDashboard
