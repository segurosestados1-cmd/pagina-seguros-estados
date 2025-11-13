import '../globals.css'

export default function RadicacionSiniestrosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Radicación de Siniestros</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Reporta y gestiona tus siniestros de manera rápida y eficiente.
        </p>
        <div className="card" style={{ marginTop: '32px', maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '24px' }}>Formulario de Radicación</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label htmlFor="numero-poliza-siniestro" style={{ display: 'block', marginBottom: '8px' }}>
                Número de Póliza
              </label>
              <input
                type="text"
                id="numero-poliza-siniestro"
                name="numero-poliza-siniestro"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
                placeholder="Ingresa el número de tu póliza"
              />
            </div>
            <div>
              <label htmlFor="tipo-siniestro" style={{ display: 'block', marginBottom: '8px' }}>
                Tipo de Siniestro
              </label>
              <select
                id="tipo-siniestro"
                name="tipo-siniestro"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              >
                <option value="">Selecciona un tipo</option>
                <option value="accidente">Accidente</option>
                <option value="robo">Robo/Hurto</option>
                <option value="incendio">Incendio</option>
                <option value="danos">Daños Materiales</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="fecha-siniestro" style={{ display: 'block', marginBottom: '8px' }}>
                Fecha del Siniestro
              </label>
              <input
                type="date"
                id="fecha-siniestro"
                name="fecha-siniestro"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div>
              <label htmlFor="descripcion-siniestro" style={{ display: 'block', marginBottom: '8px' }}>
                Descripción del Siniestro
              </label>
              <textarea
                id="descripcion-siniestro"
                name="descripcion-siniestro"
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontFamily: 'inherit'
                }}
                placeholder="Describe detalladamente el siniestro ocurrido"
              />
            </div>
            <button type="submit" className="btn" style={{ marginTop: '8px' }}>
              Radicar Siniestro
            </button>
          </form>
        </div>
        <div style={{ marginTop: '32px' }}>
          <h2>Canales Alternativos</h2>
          <p>
            También puedes radicar tu siniestro a través de: <Link href="/servicio/radicacion-siniestros">Radicación de Siniestros</Link>
          </p>
          <ul style={{ marginLeft: '24px', lineHeight: '2', marginTop: '16px' }}>
            <li>Teléfono: 01 8000 123 010</li>
            <li>Email: siniestros@segurosdelestado.com</li>
            <li>Oficinas y Centros de Atención</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

