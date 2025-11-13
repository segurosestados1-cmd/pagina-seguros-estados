import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Oficina Principal</h3>
            <p>Autopista Norte No 103 - 60 Piso 5</p>
            <p>Bogotá D.C. - Colombia.</p>
          </div>

          <div className="footer-section">
            <h3>Líneas de Asistencia</h3>
            <p>Bogotá: 601-4434818 - Celular: #388</p>
            <p>Teléfono: 01 8000 123 010</p>
          </div>

          <div className="footer-section">
            <h3>Buzón Ético</h3>
            <Link href="/buzon-etico" className="btn-link">Ir al buzón</Link>
          </div>
        </div>

        <div className="footer-info">
          <p>
            Seguros Del Estado S. A. Fue creada en el año 1956 de la unión entre un grupo Inglés y uno Antioqueño con la denominación de Compañías Aliadas de Seguros S. A.
          </p>
        </div>

        <div className="footer-links">
          <h4>Sitios de Interés</h4>
          <div className="footer-links-grid">
            <Link href="/sobre-nosotros">Sobre Nosotros</Link>
            <Link href="/cotizadores-linea">Cotizadores en línea</Link>
            <Link href="/oficinas">Nuestras Oficinas</Link>
            <Link href="/centros-atencion">Centros de Atención</Link>
            <Link href="/notificaciones-judiciales">Notificaciones Judiciales</Link>
            <Link href="/defensor-consumidor">Defensor del Consumidor Financiero</Link>
            <Link href="/sarlaft">SARLAFT</Link>
            <Link href="/fatca">FATCA</Link>
            <Link href="/saro">SARO</Link>
            <Link href="/consulta-intermediario">Consulte su intermediario</Link>
            <Link href="/superfinanciera">Superfinanciera</Link>
            <Link href="/fasecolda">Fasecolda</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>Copyright © 2025. Todos los derechos reservados por <strong>Seguros del Estado</strong></p>
            <div className="footer-legal">
              <Link href="/terminos-condiciones">Terminos y Condiciones</Link>
              <span>|</span>
              <Link href="/aviso-privacidad">Aviso de Privacidad</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

