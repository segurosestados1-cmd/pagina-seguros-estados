import '../globals.css'

export default function AutosLivianosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Seguro de Autos Livianos</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          En nuestro paquete de seguros para automóviles, ofrecemos un completo portafolio de productos 
          relacionados con el aseguramiento de vehículos tanto de servicio particular, de tipo familiar, 
          como de servicio público.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Coberturas Disponibles</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Responsabilidad Civil Extracontractual</li>
          <li>Daños Materiales</li>
          <li>Robo y/o Hurto</li>
          <li>Incendio</li>
          <li>Gastos Médicos</li>
          <li>Asistencia en Carretera</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Para Vehículos Particulares</h2>
        <p>
          Protección completa para tu vehículo particular y tu familia, con coberturas adaptadas a tus necesidades.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Para Servicio Público</h2>
        <p>
          Soluciones especializadas para vehículos de servicio público, cumpliendo con todas las normativas vigentes.
        </p>
      </div>
    </div>
  )
}

