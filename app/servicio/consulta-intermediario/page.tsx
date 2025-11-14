export default function ConsultaIntermediarioPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Consulta tu Intermediario</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Encuentra información sobre tu intermediario de seguros autorizado.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Búsqueda de Intermediario</h2>
        <p>
          Puedes consultar la información de tu intermediario ingresando el número de identificación 
          o nombre en nuestro sistema de consulta.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Información Disponible</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Datos de contacto</li>
          <li>Estado de autorización</li>
          <li>Productos autorizados</li>
          <li>Historial y calificaciones</li>
        </ul>
      </div>
    </div>
  )
}

