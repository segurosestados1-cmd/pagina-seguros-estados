import Link from 'next/link'
import '../globals.css'

export default function ServicioPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Servicio al Cliente</h1>
      <p style={{ marginTop: '24px', lineHeight: '1.8' }}>
        En Seguros del Estado nos comprometemos a brindarte el mejor servicio. Aquí encontrarás todos los recursos 
        y herramientas para gestionar tus pólizas y solicitar atención.
      </p>

      <div className="grid grid-2" style={{ marginTop: '48px' }}>
        <Link href="/servicio/sac" className="card">
          <h2>SAC</h2>
          <p>Servicio de Atención al Cliente.</p>
        </Link>

        <Link href="/servicio/deberes-derechos" className="card">
          <h2>Deberes y Derechos</h2>
          <p>Conoce tus deberes y derechos como cliente.</p>
        </Link>

        <Link href="/servicio/atencion-preferencial" className="card">
          <h2>Atención al cliente preferencial</h2>
          <p>Servicios especiales para clientes preferenciales.</p>
        </Link>

        <Link href="/servicio/defensor-consumidor" className="card">
          <h2>Defensor del consumidor Financiero</h2>
          <p>Protección de tus derechos como consumidor.</p>
        </Link>

        <Link href="/servicio/educacion-financiera" className="card">
          <h2>Educación Financiera</h2>
          <p>Recursos educativos sobre seguros y finanzas.</p>
        </Link>

        <Link href="/servicio/tramita-pqr" className="card">
          <h2>Tramita tu PQR</h2>
          <p>Peticiones, Quejas y Reclamos.</p>
        </Link>

        <Link href="/servicio/consulta-intermediario" className="card">
          <h2>Consulta tu Intermediario</h2>
          <p>Encuentra tu intermediario de seguros.</p>
        </Link>

        <Link href="/servicio/clausulados" className="card">
          <h2>Clausulados</h2>
          <p>Documentos y clausulados de pólizas.</p>
        </Link>

        <Link href="/servicio/tramites" className="card">
          <h2>Trámites</h2>
          <p>Gestiona tus trámites de seguros.</p>
        </Link>

        <Link href="/servicio/tramites-comunes" className="card">
          <h2>Trámites más comunes</h2>
          <p>Acceso rápido a los trámites más solicitados.</p>
        </Link>

        <Link href="/servicio/fecc" className="card">
          <h2>FECC</h2>
          <p>Fondo de Estabilización de Cartera Colectiva.</p>
        </Link>

        <Link href="/servicio/radicacion-siniestros" className="card">
          <h2>Radicación Siniestros</h2>
          <p>Reporta y gestiona tus siniestros.</p>
        </Link>

        <Link href="/servicio/cotizadores-linea" className="card">
          <h2>Cotizadores en Línea</h2>
          <p>Obtén cotizaciones instantáneas de nuestros productos.</p>
        </Link>

        <Link href="/servicio/saro" className="card">
          <h2>SARO</h2>
          <p>Sistema de Atención y Radicación de Oportunidades.</p>
        </Link>

        <Link href="/servicio/superintendencia-financiera" className="card">
          <h2>Superintendencia Financiera</h2>
          <p>Información y enlaces a la Superintendencia Financiera.</p>
        </Link>
      </div>
    </div>
  )
}

