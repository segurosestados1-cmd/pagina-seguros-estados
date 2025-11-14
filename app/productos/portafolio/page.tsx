export default function PortafolioPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Portafolio de Productos</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          En Seguros del Estado ofrecemos un portafolio completo de productos de seguros diseñados 
          para satisfacer las necesidades de personas naturales y jurídicas.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Nuestros Productos</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Seguros de Vida</li>
          <li>Seguros Generales</li>
          <li>Seguros de Cumplimiento</li>
          <li>Seguros de Autos (Livianos y Pesados)</li>
          <li>Seguros Obligatorios</li>
          <li>SOAT</li>
        </ul>
        <p style={{ marginTop: '24px' }}>
          Cada producto está diseñado para ofrecer la mejor protección y cobertura según tus necesidades específicas.
        </p>
      </div>
    </div>
  )
}

