import '../globals.css'

export default function ProteccionDatosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Protección de Datos</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          En Seguros del Estado nos comprometemos con la protección de tus datos personales, cumpliendo 
          con la normativa vigente en materia de protección de datos.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Política de Privacidad</h2>
        <p>
          Nuestra política de privacidad establece cómo recopilamos, usamos, almacenamos y protegemos 
          tu información personal.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Tus Derechos</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Conocer, actualizar y rectificar tus datos</li>
          <li>Solicitar prueba de la autorización otorgada</li>
          <li>Revocar la autorización</li>
          <li>Consultar de forma gratuita tus datos</li>
          <li>Presentar quejas ante la autoridad competente</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Contacto</h2>
        <p>
          Para ejercer tus derechos o realizar consultas sobre el tratamiento de tus datos personales, 
          puedes contactarnos a través de nuestros canales oficiales.
        </p>
      </div>
    </div>
  )
}

