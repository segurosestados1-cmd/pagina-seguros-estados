import '../globals.css'

export default function SAROPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>SARO - Sistema de Atención y Radicación de Oportunidades</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          El SARO es nuestro sistema integrado para la atención y gestión de oportunidades de negocio.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Funcionalidades</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Radicación de oportunidades</li>
          <li>Seguimiento de procesos</li>
          <li>Gestión de clientes potenciales</li>
          <li>Reportes y estadísticas</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Acceso</h2>
        <p>
          El acceso al sistema SARO está disponible para intermediarios y colaboradores autorizados 
          a través de nuestros canales oficiales.
        </p>
      </div>
    </div>
  )
}

