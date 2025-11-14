import Link from 'next/link'

export default function PQRSPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>PQRS</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Sistema de gestión de Peticiones, Quejas, Reclamos y Sugerencias (PQRS).
        </p>
        <div className="card" style={{ marginTop: '32px', maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '24px' }}>Formulario PQRS</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label htmlFor="tipo" style={{ display: 'block', marginBottom: '8px' }}>
                Tipo
              </label>
              <select
                id="tipo"
                name="tipo"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              >
                <option value="">Selecciona un tipo</option>
                <option value="peticion">Petición</option>
                <option value="queja">Queja</option>
                <option value="reclamo">Reclamo</option>
                <option value="sugerencia">Sugerencia</option>
              </select>
            </div>
            <div>
              <label htmlFor="asunto" style={{ display: 'block', marginBottom: '8px' }}>
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
                placeholder="Ingresa el asunto"
              />
            </div>
            <div>
              <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '8px' }}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontFamily: 'inherit'
                }}
                placeholder="Describe tu petición, queja, reclamo o sugerencia"
              />
            </div>
            <button type="submit" className="btn" style={{ marginTop: '8px' }}>
              Enviar
            </button>
          </form>
        </div>
        <div style={{ marginTop: '32px' }}>
          <p>
            También puedes tramitar tu PQRS a través de: <Link href="/servicio/tramita-pqr">Tramita tu PQR</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

