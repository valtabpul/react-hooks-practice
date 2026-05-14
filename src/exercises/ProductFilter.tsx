import { useState, useMemo } from "react"

const PRODUCTS = [
  { id: 1, name: "Laptop", category: "Tecnología", price: 2500, stock: 5 },
  { id: 2, name: "Silla", category: "Hogar", price: 300, stock: 10 },
  { id: 3, name: "Mouse", category: "Tecnología", price: 50, stock: 20 },
  { id: 4, name: "Mesa", category: "Hogar", price: 700, stock: 2 },
]

function ProductFilter() {
  const [search, setSearch] = useState("")
  const [cat, setCat] = useState("all")

  const filtered = useMemo(() => {
    let result = PRODUCTS
    if (cat !== "all") result = result.filter(p => p.category === cat)
    if (search.trim()) result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    return result
  }, [search, cat])

  return (
    <section style={{ maxWidth: 500, margin: "auto" }}>
      <h1>Filtro de productos</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar producto"
        />
        <select value={cat} onChange={e => setCat(e.target.value)}>
          <option value="all">Todas</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Hogar">Hogar</option>
        </select>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>No hay productos</td>
            </tr>
          )}
          {filtered.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ProductFilter
