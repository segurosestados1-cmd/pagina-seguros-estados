import Link from 'next/link'

export default function NosotrosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Nosotros</h1>
      <p style={{ marginTop: '24px', lineHeight: '1.8' }}>
        Bienvenido a la sección de Nosotros de Seguros del Estado. Aquí encontrarás información sobre nuestra compañía, historia, valores y estrategia.
      </p>

      <div className="grid grid-3" style={{ marginTop: '48px' }}>
        <Link href="/nosotros/nuestra-compania" className="card">
          <h2>Nuestra compañía</h2>
          <p>Conoce más sobre Seguros del Estado y nuestra misión.</p>
        </Link>

        <Link href="/nosotros/historia" className="card">
          <h2>Historia</h2>
          <p>Descubre nuestra trayectoria desde 1956.</p>
        </Link>

        <Link href="/nosotros/crediestado" className="card">
          <h2>Crediestado</h2>
          <p>Información sobre Crediestado.</p>
        </Link>

        <Link href="/nosotros/acerca-de" className="card">
          <h2>Acerca de Seguros del Estado</h2>
          <p>Más información sobre nuestra empresa.</p>
        </Link>

        <Link href="/nosotros/informe-sostenibilidad" className="card">
          <h2>Informe de sostenibilidad</h2>
          <p>Nuestro compromiso con la sostenibilidad.</p>
        </Link>

        <Link href="/nosotros/responsabilidad-social" className="card">
          <h2>Responsabilidad Social</h2>
          <p>Nuestro compromiso con la sociedad.</p>
        </Link>

        <Link href="/nosotros/unete" className="card">
          <h2>Únete a nosotros</h2>
          <p>Oportunidades de trabajo en Seguros del Estado.</p>
        </Link>

        <Link href="/nosotros/marco-estrategico" className="card">
          <h2>Marco Estratégico</h2>
          <p>Nuestra visión y estrategia corporativa.</p>
        </Link>

        <Link href="/nosotros/alianza-estrategica" className="card">
          <h2>Alianza Estratégica</h2>
          <p>Nuestras alianzas estratégicas.</p>
        </Link>

        <Link href="/nosotros/lineamientos-estrategicos" className="card">
          <h2>Lineamientos Estratégicos</h2>
          <p>Nuestros lineamientos y políticas estratégicas.</p>
        </Link>

        <Link href="/nosotros/estados-financieros" className="card">
          <h2>Estados Financieros</h2>
          <p>Información financiera y estados contables.</p>
        </Link>
      </div>
    </div>
  )
}

