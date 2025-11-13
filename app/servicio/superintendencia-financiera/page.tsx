import '../globals.css'

export default function SuperintendenciaFinancieraPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Superintendencia Financiera</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Información y enlaces relacionados con la Superintendencia Financiera de Colombia.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Regulación y Supervisión</h2>
        <p>
          Seguros del Estado opera bajo la supervisión de la Superintendencia Financiera de Colombia, 
          cumpliendo con todas las normativas y regulaciones del sector asegurador.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Información de Interés</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Normativas del sector asegurador</li>
          <li>Reportes regulatorios</li>
          <li>Información de supervisión</li>
          <li>Enlaces a la Superintendencia Financiera</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Enlaces</h2>
        <p>
          Para más información, visita el sitio web oficial de la Superintendencia Financiera de Colombia.
        </p>
      </div>
    </div>
  )
}

