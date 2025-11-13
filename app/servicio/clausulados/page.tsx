import '../globals.css'

export default function ClausuladosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Clausulados</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Accede a los clausulados y documentos de pólizas de nuestros productos de seguros.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Documentos Disponibles</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Clausulados de Seguros de Vida</li>
          <li>Clausulados de Seguros Generales</li>
          <li>Clausulados de Seguros de Cumplimiento</li>
          <li>Clausulados de Seguros de Autos</li>
          <li>Condiciones Generales</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Consulta de Pólizas</h2>
        <p>
          Puedes consultar y descargar los clausulados de tus pólizas activas a través de nuestro 
          sistema de consulta en línea.
        </p>
      </div>
    </div>
  )
}

