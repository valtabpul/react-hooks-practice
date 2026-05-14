import { useState, useMemo } from "react"

function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Teclado", price: 120, quantity: 1 },
    { id: 2, name: "Mouse", price: 80, quantity: 2 },
    { id: 3, name: "Monitor", price: 600, quantity: 1 },
  ])

  function add(item) {
    setCart(cart => cart.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p))
  }

  function sub(item) {
    setCart(cart => cart.map(p => p.id === item.id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 } : p))
  }

  function remove(item) {
    setCart(cart => cart.filter(p => p.id !== item.id))
  }

  const total = useMemo(() => cart.reduce((sum, p) => sum + p.price * p.quantity, 0), [cart])
  const count = useMemo(() => cart.reduce((sum, p) => sum + p.quantity, 0), [cart])

  return (
    <section style={{ maxWidth: 400, margin: "auto" }}>
      <h1>Carrito de compras</h1>
      <table style={{ width: "100%", marginBottom: 12 }}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant.</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>
                <button onClick={() => sub(p)}>-</button>
                {p.quantity}
                <button onClick={() => add(p)}>+</button>
              </td>
              <td>${p.price}</td>
              <td>${p.price * p.quantity}</td>
              <td><button onClick={() => remove(p)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total productos: {count}</div>
      <div>Total a pagar: ${total}</div>
    </section>
  )
}

export default ShoppingCart
