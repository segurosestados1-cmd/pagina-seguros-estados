'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import './home.css'

export default function Home() {
  return (
    <div className="home-page">
      {/* Quick Access Section */}
      <section className="quick-access-section">
        <div className="container">
          <div className="quick-access-grid">
            <Link href="/portal-pagos" className="quick-access-item">
              <div className="quick-access-icon">
                <div className="icon-circle">
                  <div className="icon-inner">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" className="main-icon">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" y1="13" x2="15" y2="13" />
                      <line x1="9" y1="17" x2="15" y2="17" />
                    </svg>
                    <span className="icon-accent">$</span>
                  </div>
                </div>
              </div>
              <span className="quick-access-label">Portal de Pagos</span>
            </Link>

            <Link href="/sarlaft" className="quick-access-item">
              <div className="quick-access-icon">
                <div className="icon-circle">
                  <div className="icon-inner">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" className="main-icon">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" y1="13" x2="15" y2="13" />
                      <line x1="9" y1="17" x2="15" y2="17" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" className="accent-icon">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="quick-access-label">Sarlaft</span>
            </Link>

            <Link href="/pqrs" className="quick-access-item">
              <div className="quick-access-icon">
                <div className="icon-circle">
                  <div className="icon-inner">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" className="main-icon">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" className="accent-icon">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="quick-access-label">PQRS</span>
            </Link>

            <Link href="/radicacion-siniestros" className="quick-access-item">
              <div className="quick-access-icon">
                <div className="icon-circle">
                  <div className="icon-inner">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" className="main-icon umbrella-icon">
                      <path d="M23 12a11.05 11.05 0 0 0-22 0" />
                      <path d="M12 2v20" />
                      <path d="M12 22a3 3 0 0 0 0-6" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="quick-access-label">Radicación de Siniestros</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-arrow"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">AMPLIA COBERTURA</p>
            <h1 className="hero-title">EN NUESTRO PORTAFOLIO DE PRODUCTOS</h1>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="productos-section">
        <div className="container">
          <div className="productos-grid">
            <div className="producto-card">
              <div className="producto-image">
                <Image
                  src="/productos/autos-livianos.jpg"
                  alt="Autos Livianos"
                  width={400}
                  height={250}
                  className="producto-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <h2>Autos Livianos</h2>
              <p>
                En nuestro paquete de seguros para automóviles, ofrecemos un completo portafolio de productos relacionados con el aseguramiento de vehículos tanto de servicio particular, de tipo familiar, como de servicio público.
              </p>
              <Link href="/productos/autos-livianos" className="btn">Leer más</Link>
            </div>

            <div className="producto-card">
              <div className="producto-image">
                <Image
                  src="/productos/seguros-vida.jpg"
                  alt="Seguros de Vida"
                  width={400}
                  height={250}
                  className="producto-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <h2>SEGUROS DE VIDA</h2>
              <p>
                Para Seguros de Vida del Estado lo más importante es la calidad de vida de nuestros clientes. Consulte nuestro amplio portafolio de productos especializado en los ramos de Vida Individual, Vida Grupo, Accidentes Personales, Colectivo Vida, Salud y Enfermedades de Alto Costo.
              </p>
              <Link href="/productos/seguros-vida" className="btn">Leer más</Link>
            </div>

            <div className="producto-card">
              <div className="producto-image">
                <Image
                  src="/productos/seguros-generales.jpg"
                  alt="Seguros Generales"
                  width={400}
                  height={250}
                  className="producto-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <h2>Seguros Generales</h2>
              <p>
                El objetivo de Seguros del Estado es ofrecer productos que permitan a padres de familia, contratistas, comerciantes, industriales y en general a todas las personas naturales y jurídicas del sector privado y público, la protección de su patrimonio.
              </p>
              <Link href="/productos/seguros-generales" className="btn">Leer más</Link>
            </div>

            <div className="producto-card">
              <div className="producto-image">
                <Image
                  src="/productos/seguros-cumplimiento.jpg"
                  alt="Seguros de Cumplimiento"
                  width={400}
                  height={250}
                  className="producto-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <h2>Seguros de Cumplimiento</h2>
              <p>
                Seguros del Estado cuenta con un grupo de profesionales para el análisis de los contratos, disposiciones legales y demás obligaciones a asegurar, que garantiza una expedición ágil e inmediata de las pólizas con precios acordes al mercado y con una capacidad amplia y suficiente.
              </p>
              <Link href="/productos/seguros-cumplimiento" className="btn">Leer más</Link>
            </div>

            <div className="producto-card">
              <div className="producto-image">
                <Image
                  src="/productos/autos-pesados.jpg"
                  alt="Autos Pesados"
                  width={400}
                  height={250}
                  className="producto-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <h2>Autos Pesados</h2>
              <p>
                Conscientes de la importancia del sector transporte, dentro de la economía del país y sus requerimientos de protección patrimonial ponemos a disposición nuestras alternativas.
              </p>
              <Link href="/productos/autos-pesados" className="btn">Leer más</Link>
            </div>

            <div className="producto-card">
              <div className="producto-image">
                <Image
                  src="/productos/seguros-obligatorios.jpg"
                  alt="Seguros Obligatorios"
                  width={400}
                  height={250}
                  className="producto-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <h2>Seguros Obligatorios</h2>
              <p>
                Seguros del Estado ha sido la aseguradora líder en el país desde hace varios años, en la comercialización de los seguros obligatorios, consulte nuestras alternativas.
              </p>
              <Link href="/productos/seguros-obligatorios" className="btn">Leer más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="servicios-section">
        <div className="container">
          <h2 className="section-title">SOMOS TUS COMPAÑEROS</h2>
          <div className="servicios-grid">
            <Link href="/servicio/cotizadores-linea" className="servicio-card">
              <h3>Cotizadores</h3>
            </Link>
            <Link href="/portal-pagos" className="servicio-card">
              <h3>Pagos</h3>
            </Link>
            <Link href="/servicio/tramites-comunes" className="servicio-card">
              <h3>Trámites comunes</h3>
            </Link>
            <Link href="/" className="servicio-card">
              <h3>Home</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Noticias Section */}
      <section className="noticias-section">
        <div className="container">
          <h2 className="section-title">¿Sabías? Últimas Noticias</h2>
          <div className="noticias-grid">
            <article className="noticia-card">
              <div className="noticia-image">
                <Image
                  src="/noticias/congreso-cumplimiento.jpg"
                  alt="Congreso de Cumplimiento"
                  width={400}
                  height={200}
                  className="noticia-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const placeholder = target.nextElementSibling as HTMLElement
                    if (placeholder) {
                      placeholder.style.display = 'flex'
                    }
                  }}
                />
                <div className="placeholder-image" style={{ display: 'none' }}></div>
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
                <Image
                  src="/noticias/cambio-climatico.jpg"
                  alt="Cambio Climático"
                  width={400}
                  height={200}
                  className="noticia-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const placeholder = target.nextElementSibling as HTMLElement
                    if (placeholder) {
                      placeholder.style.display = 'flex'
                    }
                  }}
                />
                <div className="placeholder-image" style={{ display: 'none' }}></div>
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
                <Image
                  src="/noticias/decada-cumplimiento.jpg"
                  alt="Década de Cumplimiento"
                  width={400}
                  height={200}
                  className="noticia-img"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const placeholder = target.nextElementSibling as HTMLElement
                    if (placeholder) {
                      placeholder.style.display = 'flex'
                    }
                  }}
                />
                <div className="placeholder-image" style={{ display: 'none' }}></div>
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
          <div className="text-center mt-4">
            <Link href="/noticias" className="btn">VER TODAS LAS NOTICIAS</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

