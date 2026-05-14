import { useState } from 'react'

function RegisterForm() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        password: '',
        password2: '',
    })

    const [enviado, setEnviado] = useState<null | { nombre: string; email: string }>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const errors = {
        nombre: form.nombre.trim() === '' ? 'El nombre es obligatorio' : '',
        email: !form.email.includes('@') ? 'El correo debe contener @' : '',
        password: form.password.length < 6 ? 'Mínimo 6 caracteres' : '',
        password2: form.password !== form.password2 ? 'Las contraseñas no coinciden' : '',
    }

    const formularioValido = Object.values(errors).every((e) => e === '')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formularioValido) return
        setEnviado({ nombre: form.nombre, email: form.email })
    }

    return (
        <>
        <section id="center">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h1>Formulario de registro</h1>

                <div>
                    <label>Nombre</label><br />
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
                    {errors.nombre && <p style={{ color: 'red', margin: 0 }}>{errors.nombre}</p>}
                </div>

                <div>
                    <label>Correo electrónico</label><br />
                    <input type="text" name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <p style={{ color: 'red', margin: 0 }}>{errors.email}</p>}
                </div>

                <div>
                    <label>Contraseña</label><br />
                    <input type="password" name="password" value={form.password} onChange={handleChange} />
                    {errors.password && <p style={{ color: 'red', margin: 0 }}>{errors.password}</p>}
                </div>

                <div>
                    <label>Confirmar contraseña</label><br />
                    <input type="password" name="password2" value={form.password2} onChange={handleChange} />
                    {errors.password2 && <p style={{ color: 'red', margin: 0 }}>{errors.password2}</p>}
                </div>

                <button type="submit" disabled={!formularioValido}>
                    Enviar
                </button>
            </form>

            {enviado && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Resumen</h2>
                    <p><strong>Nombre:</strong> {enviado.nombre}</p>
                    <p><strong>Correo:</strong> {enviado.email}</p>
                </div>
            )}
        </section>
        </>
    )
}

export default RegisterForm