import { useState, useEffect } from 'react'

interface Task {
  id: string
  title: string
  completed: boolean
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState("")
  const [filter, setFilter] = useState<'ALL' | 'TODO' | 'DONE'>('ALL')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('tasks-react')
    if (saved) setTasks(JSON.parse(saved))
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) localStorage.setItem('tasks-react', JSON.stringify(tasks))
  }, [tasks, ready])

  function addTask(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    setTasks(prev => [
      ...prev,
      { id: Math.random().toString(36).slice(2, 10), title: input, completed: false }
    ])
    setInput("")
  }

  function toggleTask(id: string) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  function removeTask(id: string) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const shown = tasks.filter(t =>
    filter === 'ALL' ? true : filter === 'TODO' ? !t.completed : t.completed
  )

  return (
    <section style={{ maxWidth: 400, margin: 'auto' }}>
      <h1>Mis tareas</h1>
      <form onSubmit={addTask} style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Añadir</button>
      </form>
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        <button onClick={() => setFilter('ALL')}>Todas</button>
        <button onClick={() => setFilter('TODO')}>Pendientes</button>
        <button onClick={() => setFilter('DONE')}>Completadas</button>
      </div>
      <ul style={{ padding: 0 }}>
        {shown.map(t => (
          <li key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <input type="checkbox" checked={t.completed} onChange={() => toggleTask(t.id)} />
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none', flex: 1 }}>{t.title}</span>
            <button onClick={() => removeTask(t.id)} style={{ padding: '2px 8px' }}>Borrar</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
