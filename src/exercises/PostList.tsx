import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

interface Post {
  id: number
  title: string
  body: string
}

function PostList() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts?_limit=3")
  const { data, loading, error } = useFetch<Post[]>(url)

  return (
    <section style={{ maxWidth: 500, margin: "auto" }}>
      <h1>Lista de Posts</h1>
      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts?_limit=3")}>Ver 3 posts</button>
        <button onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts?_limit=5")}>Ver 5 posts</button>
      </div>
      {loading && <p style={{ color: "blue" }}>Cargando...</p>}
      {error && <p style={{ color: "red" }}>Error al cargar posts</p>}
      {!loading && !error && (
        <ol>
          {data?.map(post => (
            <li key={post.id}>
              <b>{post.title}</b>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

export default PostList
