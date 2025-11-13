import '../globals.css'

export default function TramitesPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Trámites</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Gestiona todos tus trámites relacionados con tus pólizas de seguros de manera fácil y rápida.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Trámites Disponibles</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Emisión de pólizas</li>
          <li>Modificaciones de pólizas</li>
          <li>Renovaciones</li>
          <li>Cancelaciones</li>
          <li>Endosos</li>
          <li>Emisión de certificados</li>
          <li>Consultas de estado</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Canales de Trámite</h2>
        <p>
          Puedes realizar tus trámites a través de nuestros canales digitales, oficinas o centros de atención.
        </p>
      </div>
    </div>
  )
}

