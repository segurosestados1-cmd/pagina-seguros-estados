import '../globals.css'

export default function SegurosObligatoriosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Seguros Obligatorios</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Seguros del Estado ha sido la aseguradora líder en el país desde hace varios años, en la comercialización 
          de los seguros obligatorios, consulte nuestras alternativas.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Líderes en Seguros Obligatorios</h2>
        <p>
          Mantenemos nuestra posición de liderazgo en el mercado de seguros obligatorios, ofreciendo productos 
          que cumplen con todas las normativas legales vigentes.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Tipos de Seguros Obligatorios</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>SOAT - Seguro Obligatorio de Accidentes de Tránsito</li>
          <li>Seguro de Responsabilidad Civil para Vehículos</li>
          <li>Seguros obligatorios para construcción</li>
          <li>Otros seguros requeridos por ley</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Cumplimiento Normativo</h2>
        <p>
          Todos nuestros seguros obligatorios cumplen estrictamente con las normativas y regulaciones establecidas 
          por las autoridades competentes.
        </p>
      </div>
    </div>
  )
}

