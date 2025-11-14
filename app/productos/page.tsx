import Link from 'next/link'

export default function ProductosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Productos</h1>
      <p style={{ marginTop: '24px', lineHeight: '1.8' }}>
        Conoce nuestro amplio portafolio de productos de seguros diseñados para proteger lo que más te importa.
      </p>

      <div className="grid grid-2" style={{ marginTop: '48px' }}>
        <Link href="/productos/portafolio" className="card">
          <h2>Portafolio</h2>
          <p>Descubre todos nuestros productos de seguros.</p>
        </Link>

        <Link href="/productos/seguros-vida" className="card">
          <h2>Seguros de Vida</h2>
          <p>Protección para ti y tu familia.</p>
        </Link>

        <Link href="/productos/seguros-generales" className="card">
          <h2>Seguros Generales</h2>
          <p>Protección para tu patrimonio.</p>
        </Link>

        <Link href="/productos/seguros-cumplimiento" className="card">
          <h2>Seguros de Cumplimiento</h2>
          <p>Garantías y cumplimiento contractual.</p>
        </Link>

        <Link href="/productos/autos-livianos" className="card">
          <h2>Seguro de Autos Livianos</h2>
          <p>Protección para tu vehículo particular.</p>
        </Link>

        <Link href="/productos/autos-pesados" className="card">
          <h2>Seguro de Autos Pesados</h2>
          <p>Protección para vehículos comerciales.</p>
        </Link>

        <Link href="/productos/seguros-obligatorios" className="card">
          <h2>Seguros Obligatorios</h2>
          <p>Seguros requeridos por ley.</p>
        </Link>

        <Link href="/productos/soat" className="card">
          <h2>SOAT</h2>
          <p>Seguro Obligatorio de Accidentes de Tránsito.</p>
        </Link>
      </div>
    </div>
  )
}

