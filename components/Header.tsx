'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX, FiChevronDown, FiChevronRight, FiSearch, FiUsers, FiBriefcase, FiUser, FiSettings, FiSun } from 'react-icons/fi'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  const handleNestedSubmenu = (submenu: string | null) => {
    setOpenNestedSubmenu(submenu)
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-left">
              <Link href="/" className="logo-container">
                <Image
                  src="/logo.png"
                  alt="Seguros de Vida del Estado"
                  width={200}
                  height={60}
                  className="logo-image"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </Link>
              
              <div className="header-utils">
                <button className="util-icon-btn" title="Letra Grande">
                  <span className="icon-text">AA+</span>
                  <span className="icon-label">Letra Grande</span>
                </button>
                <button className="util-icon-btn" title="Letra Chica">
                  <span className="icon-text">AA-</span>
                  <span className="icon-label">Letra Chica</span>
                </button>
                <button className="util-icon-btn" title="Contraste">
                  <FiSun className="icon-sun" />
                  <span className="icon-label">Contraste</span>
                </button>
              </div>
              
              <div className="header-portals">
                <Link href="/cliente" className="portal-icon-btn" title="Cliente">
                  <FiUser className="portal-icon" />
                  <span className="icon-label">Cliente</span>
                </Link>
                <Link href="/intermediarios" className="portal-icon-btn" title="Intermediarios">
                  <FiBriefcase className="portal-icon" />
                  <span className="icon-label">Intermediarios</span>
                </Link>
                <Link href="/colaboradores" className="portal-icon-btn" title="Colaboradores">
                  <FiUsers className="portal-icon" />
                  <span className="icon-label">Colaboradores</span>
                </Link>
                <Link href="/proveedores" className="portal-icon-btn" title="Proveedores">
                  <FiSettings className="portal-icon" />
                  <span className="icon-label">Proveedores</span>
                </Link>
              </div>
            </div>
            
            <div className="header-search">
              <input 
                type="text" 
                placeholder="Buscar" 
                className="search-input"
              />
              <FiSearch className="search-icon" />
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <Link href="/" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              </li>
              
              <li className="dropdown">
                <span onClick={() => toggleSubmenu('nosotros')}>
                  Nosotros <FiChevronDown />
                </span>
                <ul className={`submenu ${openSubmenu === 'nosotros' ? 'active' : ''}`}>
                  <li 
                    className="submenu-item-with-nested"
                    onMouseEnter={() => handleNestedSubmenu('nuestra-compania')}
                    onMouseLeave={() => handleNestedSubmenu(null)}
                  >
                    <span onClick={() => handleNestedSubmenu(openNestedSubmenu === 'nuestra-compania' ? null : 'nuestra-compania')}>
                      Nuestra compañía <FiChevronRight className="nested-chevron" />
                    </span>
                    <ul className={`submenu-nested ${openNestedSubmenu === 'nuestra-compania' ? 'active' : ''}`}>
                      <li><Link href="/nosotros/historia" onClick={() => setIsMenuOpen(false)}>Historia</Link></li>
                      <li><Link href="/nosotros/crediestado" onClick={() => setIsMenuOpen(false)}>Crediestado</Link></li>
                      <li><Link href="/nosotros/acerca-de" onClick={() => setIsMenuOpen(false)}>Acerca de Seguros del Estado</Link></li>
                      <li><Link href="/nosotros/informe-sostenibilidad" onClick={() => setIsMenuOpen(false)}>Informe de sostenibilidad</Link></li>
                      <li><Link href="/nosotros/responsabilidad-social" onClick={() => setIsMenuOpen(false)}>Responsabilidad Social</Link></li>
                      <li><Link href="/nosotros/unete" onClick={() => setIsMenuOpen(false)}>Únete a nosotros</Link></li>
                    </ul>
                  </li>
                  <li 
                    className="submenu-item-with-nested"
                    onMouseEnter={() => handleNestedSubmenu('marco-estrategico')}
                    onMouseLeave={() => handleNestedSubmenu(null)}
                  >
                    <span onClick={() => handleNestedSubmenu(openNestedSubmenu === 'marco-estrategico' ? null : 'marco-estrategico')}>
                      Marco Estratégico <FiChevronRight className="nested-chevron" />
                    </span>
                    <ul className={`submenu-nested ${openNestedSubmenu === 'marco-estrategico' ? 'active' : ''}`}>
                      <li><Link href="/nosotros/alianza-estrategica" onClick={() => setIsMenuOpen(false)}>Alianza estratégica</Link></li>
                      <li><Link href="/nosotros/lineamientos-estrategicos" onClick={() => setIsMenuOpen(false)}>Lineamientos estratégicos</Link></li>
                      <li><Link href="/nosotros/estados-financieros" onClick={() => setIsMenuOpen(false)}>Estados Financieros</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <span onClick={() => toggleSubmenu('productos')}>
                  Productos <FiChevronDown />
                </span>
                <ul className={`submenu ${openSubmenu === 'productos' ? 'active' : ''}`}>
                  <li><Link href="/productos/portafolio">Portafolio</Link></li>
                  <li><Link href="/productos/seguros-vida">Seguros de Vida</Link></li>
                  <li><Link href="/productos/seguros-generales">Seguros Generales</Link></li>
                  <li><Link href="/productos/seguros-cumplimiento">Seguros de Cumplimiento</Link></li>
                  <li><Link href="/productos/autos-livianos">Seguro de Autos Livianos</Link></li>
                  <li><Link href="/productos/autos-pesados">Seguro de Autos Pesados</Link></li>
                  <li><Link href="/productos/seguros-obligatorios">Seguros Obligatorios</Link></li>
                  <li><Link href="/productos/soat">SOAT</Link></li>
                </ul>
              </li>

              <li className="dropdown">
                <span onClick={() => toggleSubmenu('servicio')}>
                  Servicio al Cliente <FiChevronDown />
                </span>
                <ul className={`submenu ${openSubmenu === 'servicio' ? 'active' : ''}`}>
                  <li><Link href="/servicio/sac">SAC</Link></li>
                  <li><Link href="/servicio/deberes-derechos">Deberes y Derechos</Link></li>
                  <li><Link href="/servicio/atencion-preferencial">Atención al cliente preferencial</Link></li>
                  <li><Link href="/servicio/defensor-consumidor">Defensor del consumidor Financiero</Link></li>
                  <li><Link href="/servicio/educacion-financiera">Educación Financiera</Link></li>
                  <li><Link href="/servicio/tramita-pqr">Tramita tu PQR</Link></li>
                  <li><Link href="/servicio/consulta-intermediario">Consulta tu Intermediario</Link></li>
                  <li><Link href="/servicio/clausulados">Clausulados</Link></li>
                  <li><Link href="/servicio/tramites">Trámites</Link></li>
                  <li><Link href="/servicio/tramites-comunes">Trámites más comunes</Link></li>
                  <li><Link href="/servicio/fecc">FECC</Link></li>
                  <li><Link href="/servicio/radicacion-siniestros">Radicación Siniestros</Link></li>
                  <li><Link href="/servicio/cotizadores-linea">Cotizadores en Línea</Link></li>
                  <li><Link href="/servicio/saro">SARO</Link></li>
                  <li><Link href="/servicio/superintendencia-financiera">Superintendencia Financiera</Link></li>
                </ul>
              </li>

              <li className="dropdown">
                <span onClick={() => toggleSubmenu('contacto')}>
                  Contáctenos <FiChevronDown />
                </span>
                <ul className={`submenu ${openSubmenu === 'contacto' ? 'active' : ''}`}>
                  <li><Link href="/contacto/oficinas">En nuestras oficinas</Link></li>
                  <li><Link href="/contacto/centros-atencion">Centros de Atención</Link></li>
                  <li><Link href="/contacto/proteccion-datos">Protección de datos</Link></li>
                  <li><Link href="/contacto/ley-2300">Ley 2300</Link></li>
                  <li><Link href="/contacto/notificaciones-judiciales">Notificaciones Judiciales</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/consulta-poliza" onClick={() => setIsMenuOpen(false)}>Consulta tu póliza</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

