import { useState, useEffect } from "react"

interface User {
  id: number
  name: string
  email: string
  address?: {
    city: string
  }
}

function UserListApi() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let ignore = false
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r => {
        if (!r.ok) throw new Error("No se pudo cargar")
        return r.json()
      })
      .then(data => {
        if (!ignore) setUsers(data)
      })
      .catch(() => {
        if (!ignore) setError("No se pudo obtener usuarios")
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })
    return () => { ignore = true }
  }, [])

  return (
    <section style={{ maxWidth: 500, margin: "auto" }}>
      <h1>Usuarios desde API</h1>
      {loading && <p style={{ color: "blue" }}>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <ol>
          {users.map(u => (
            <li key={u.id}>
              <span style={{ fontWeight: 600 }}>{u.name}</span> / {u.email} / {u.address?.city}
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

export default UserListApi
