import '../globals.css'

export default function DefensorConsumidorPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Defensor del Consumidor Financiero</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          El Defensor del Consumidor Financiero es un mecanismo de protección de tus derechos como consumidor 
          de servicios financieros.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Funciones</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Mediar en conflictos entre clientes y la aseguradora</li>
          <li>Proteger los derechos de los consumidores</li>
          <li>Proporcionar información y orientación</li>
          <li>Facilitar la resolución de disputas</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Contacto</h2>
        <p>
          Para contactar al Defensor del Consumidor Financiero, puedes hacerlo a través de nuestros canales 
          oficiales de atención al cliente.
        </p>
      </div>
    </div>
  )
}

