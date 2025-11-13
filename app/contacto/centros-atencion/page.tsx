import '../globals.css'

export default function CentrosAtencionPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Centros de Atención</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Nuestros centros de atención están distribuidos estratégicamente para brindarte el mejor servicio.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Servicios Disponibles</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Atención personalizada</li>
          <li>Emisión de pólizas</li>
          <li>Pago de primas</li>
          <li>Radicación de siniestros</li>
          <li>Consultas y trámites</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Ubicaciones</h2>
        <p>
          Para conocer la ubicación de nuestros centros de atención más cercanos, por favor contáctanos 
          o consulta nuestro directorio.
        </p>
      </div>
    </div>
  )
}

