import { useState } from "react"

function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return
    setEnviado(true)
  }

  if (enviado) {
    return (
      <section style={{ maxWidth: 350, margin: "auto" }}>
        <h2>¡Gracias por tu mensaje!</h2>
        <p>Te responderemos pronto.</p>
      </section>
    )
  }

  return (
    <section style={{ maxWidth: 350, margin: "auto" }}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre"/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
        <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Mensaje"/>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default ContactForm
