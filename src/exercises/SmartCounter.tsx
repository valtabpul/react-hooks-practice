import { useState } from "react"

export function SmartCounter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <section id="center">
        <div>
          <h1>Smart Counter</h1>
        </div>
        <div>
          {count}
        </div>

        <div className="button-row">
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Sumar  +1
          </button>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => Math.max(0, count - 1))}
          >
            Disminuir -1
          </button>
          <button
            type="button"
            className="counter"
            onClick={() => setCount(0)}
          >
            Reiniciar 0
          </button>
        </div>

        {count >= 10 && (
          <p style={{ color: 'orange', fontWeight: 'bold' }}>
             ¡Has llegado a {count}! El contador está muy alto.
          </p>
        )}
  
      </section>
    </>)
}

export default SmartCounter