export default function TramitesComunesPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Trámites más Comunes</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Acceso rápido a los trámites más solicitados por nuestros clientes.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Trámites Frecuentes</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Consulta de póliza</li>
          <li>Pago de primas</li>
          <li>Reporte de siniestros</li>
          <li>Emisión de certificados</li>
          <li>Modificación de datos</li>
          <li>Renovación de pólizas</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Acceso Rápido</h2>
        <p>
          Todos estos trámites están disponibles en línea para tu comodidad, permitiéndote gestionarlos 
          desde cualquier lugar y en cualquier momento.
        </p>
      </div>
    </div>
  )
}

