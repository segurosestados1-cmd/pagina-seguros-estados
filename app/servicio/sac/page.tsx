import '../globals.css'

export default function SACPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Servicio de Atención al Cliente (SAC)</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Nuestro Servicio de Atención al Cliente está disponible para ayudarte con todas tus necesidades 
          relacionadas con tus pólizas de seguros.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Canales de Atención</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Teléfono: 01 8000 123 010</li>
          <li>Bogotá: 601-4434818</li>
          <li>Celular: #388</li>
          <li>Email: servicioalcliente@segurosdelestado.com</li>
          <li>Oficinas y Centros de Atención</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Horarios de Atención</h2>
        <p>
          Lunes a Viernes: 8:00 AM - 6:00 PM<br />
          Sábados: 9:00 AM - 1:00 PM
        </p>
      </div>
    </div>
  )
}

