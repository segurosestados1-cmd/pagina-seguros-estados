import Link from 'next/link'

export default function ContactoPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Contáctenos</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Estamos aquí para ayudarte. Contáctanos a través de cualquiera de nuestros canales de atención.
        </p>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ marginBottom: '24px' }}>Información de Contacto</h2>
          <div className="grid grid-2" style={{ gap: '32px' }}>
            <div className="card">
              <h3>Oficina Principal</h3>
              <p style={{ marginTop: '16px' }}>
                Autopista Norte No 103 - 60 Piso 5<br />
                Bogotá D.C. - Colombia
              </p>
            </div>

            <div className="card">
              <h3>Líneas de Asistencia</h3>
              <p style={{ marginTop: '16px' }}>
                Bogotá: 601-4434818<br />
                Celular: #388<br />
                Teléfono: 01 8000 123 010
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ marginBottom: '24px' }}>Otras Secciones</h2>
          <div className="grid grid-2" style={{ gap: '24px' }}>
            <Link href="/contacto/oficinas" className="card">
              <h3>En nuestras oficinas</h3>
              <p>Ubicaciones de nuestras oficinas.</p>
            </Link>

            <Link href="/contacto/centros-atencion" className="card">
              <h3>Centros de Atención</h3>
              <p>Encuentra nuestros centros de atención.</p>
            </Link>

            <Link href="/contacto/proteccion-datos" className="card">
              <h3>Protección de datos</h3>
              <p>Política de protección de datos personales.</p>
            </Link>

            <Link href="/contacto/ley-2300" className="card">
              <h3>Ley 2300</h3>
              <p>Información sobre la Ley 2300.</p>
            </Link>

            <Link href="/contacto/notificaciones-judiciales" className="card">
              <h3>Notificaciones Judiciales</h3>
              <p>Información sobre notificaciones judiciales.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

