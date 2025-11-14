import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import '../home.css'

export default function NoticiasPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Noticias</h1>
      <div style={{ marginTop: '32px' }}>
        <div className="noticias-grid" style={{ marginTop: '32px' }}>
          <article className="noticia-card">
            <div className="noticia-image">
              <div className="placeholder-image"></div>
            </div>
            <div className="noticia-content">
              <h3>Primer Congreso de Cumplimiento de Seguros del Estado: Un Hito en el Sector Asegurador</h3>
              <p className="noticia-date">martes, 18 de marzo de 2025</p>
              <p className="noticia-excerpt">
                El pasado 4 de marzo de 2025, Seguros del Estado celebró con éxito su Primer Congreso de Cumplimiento, un evento pionero en el sector asegurador. Este congreso, el primero de su tipo a nivel corporativo, reunió a más de 100 invitados y contó con la participación de 12 panelistas de alto nivel.
              </p>
              <Link href="/noticias/congreso-cumplimiento" className="btn-link">
                Leer más <FiArrowRight className="btn-link-icon" />
              </Link>
            </div>
          </article>

          <article className="noticia-card">
            <div className="noticia-image">
              <div className="placeholder-image"></div>
            </div>
            <div className="noticia-content">
              <h3>A propósito del cambio climático ¿Cómo prevenir el riesgo?</h3>
              <p className="noticia-date">lunes, 21 de octubre de 2024</p>
              <p className="noticia-excerpt">
                Según Naciones Unidas, los fenómenos meteorológicos y climáticos extremos causaron 11.778 desastres registrados entre 1970 al 2021 con más de 2 millones de muertes y 4,3 billones de dólares en pérdidas económicas...
              </p>
              <Link href="/noticias/cambio-climatico" className="btn-link">
                Leer más <FiArrowRight className="btn-link-icon" />
              </Link>
            </div>
          </article>

          <article className="noticia-card">
            <div className="noticia-image">
              <div className="placeholder-image"></div>
            </div>
            <div className="noticia-content">
              <h3>Una década siendo los lideres del Seguro de Cumplimiento.</h3>
              <p className="noticia-date">martes, 1 de octubre de 2024</p>
              <p className="noticia-excerpt">
                Seguros del Estado prepara el cierre de mercado de 2024 sin perder el rumbo de seguir siendo los lideres de cumplimiento.
              </p>
              <Link href="/noticias/decada-cumplimiento" className="btn-link">
                Leer más <FiArrowRight className="btn-link-icon" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

