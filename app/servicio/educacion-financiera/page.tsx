import '../globals.css'

export default function EducacionFinancieraPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Educación Financiera</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Promovemos la educación financiera como herramienta fundamental para el bienestar económico 
          personal y familiar.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Recursos Educativos</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Guías sobre seguros y protección</li>
          <li>Talleres y seminarios</li>
          <li>Material educativo descargable</li>
          <li>Videos informativos</li>
          <li>Calculadoras financieras</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Temas Disponibles</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>¿Qué es un seguro y para qué sirve?</li>
          <li>Tipos de seguros y coberturas</li>
          <li>Gestión de riesgos</li>
          <li>Planificación financiera</li>
          <li>Protección patrimonial</li>
        </ul>
      </div>
    </div>
  )
}

