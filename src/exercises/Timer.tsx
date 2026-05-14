import { useState, useRef, useEffect } from "react"

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = window.setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [running])

  function start() {
    setRunning(true)
  }

  function pause() {
    setRunning(false)
  }

  function reset() {
    setRunning(false)
    setSeconds(0)
  }

  return (
    <section style={{ maxWidth: 300, margin: "auto" }}>
      <h1>Temporizador</h1>
      <div style={{ fontSize: 32, marginBottom: 16 }}>{seconds}s</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={start}>Iniciar</button>
        <button onClick={pause}>Pausar</button>
        <button onClick={reset}>Reiniciar</button>
      </div>
    </section>
  )
}

export default Timer