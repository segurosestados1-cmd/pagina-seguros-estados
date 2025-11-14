export default function TramitaPQRPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Tramita tu PQR</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Aquí puedes tramitar tus Peticiones, Quejas y Reclamos (PQR) de manera fácil y rápida.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Tipos de PQR</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li><strong>Petición:</strong> Solicitud de información o documentación</li>
          <li><strong>Queja:</strong> Manifestación de inconformidad con el servicio</li>
          <li><strong>Reclamo:</strong> Solicitud de solución a un problema específico</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Formulario de PQR</h2>
        <p>
          Para tramitar tu PQR, por favor completa el formulario disponible en nuestros canales de atención 
          o visita nuestras oficinas.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Tiempos de Respuesta</h2>
        <p>
          Nos comprometemos a responder tus PQR en los tiempos establecidos por la normativa vigente, 
          garantizando una atención oportuna y eficiente.
        </p>
      </div>
    </div>
  )
}

