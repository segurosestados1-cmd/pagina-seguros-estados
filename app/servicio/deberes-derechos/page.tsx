import '../globals.css'

export default function DeberesDerechosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Deberes y Derechos</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Tus Derechos como Cliente</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Recibir información clara y completa sobre los productos</li>
          <li>Ser tratado con respeto y cortesía</li>
          <li>Recibir atención oportuna y eficiente</li>
          <li>Protección de tus datos personales</li>
          <li>Acceso a mecanismos de quejas y reclamos</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Tus Deberes como Cliente</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Proporcionar información veraz y completa</li>
          <li>Cumplir con el pago de las primas</li>
          <li>Comunicar cambios relevantes a la aseguradora</li>
          <li>Tomar medidas preventivas para evitar siniestros</li>
          <li>Reportar siniestros de manera oportuna</li>
        </ul>
      </div>
    </div>
  )
}

