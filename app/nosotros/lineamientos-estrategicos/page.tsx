import '../globals.css'

export default function LineamientosEstrategicosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Lineamientos Estratégicos</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Nuestros lineamientos estratégicos establecen las directrices y políticas que guían nuestras operaciones 
          y decisiones corporativas.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Políticas Corporativas</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Política de calidad y servicio al cliente</li>
          <li>Política de gestión de riesgos</li>
          <li>Política de sostenibilidad</li>
          <li>Política de responsabilidad social</li>
          <li>Política de innovación</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Cumplimiento Normativo</h2>
        <p>
          Cumplimos estrictamente con todas las normativas y regulaciones del sector asegurador, 
          garantizando transparencia y confianza.
        </p>
      </div>
    </div>
  )
}

