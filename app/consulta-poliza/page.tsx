'use client'

import Image from 'next/image'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import '../globals.css'
import './consulta-poliza.css'

const POLIZA_DEMO = {
  estado: 'Activa',
  numeroPoliza: '14-40-111125450',
  numeroAnexo: '0',
  fechaExpedicionInput: '11-11-2025',
  fechaExpedicionTexto: 'martes, 11 de noviembre de 2025',
  asegurado: 'Proyecto mejoramiento de vivienda',
  inicioVigenciaTexto: 'lunes, 10 de noviembre de 2025',
  finVigenciaTexto: 'lunes, 11 mayo de 2026',
  ramo: 'RESPONSABILIDAD CIVIL EXTRACONTRACTUAL DERIVADA DE CUMPL',
  tomador: 'Asociados Arbol de Vida  Nit 901503037-1',
  valorAsegurado: '$ 7.875.000,000,00',
}

type PolizaOption = 'si' | 'no'

export default function ConsultaPolizaPage() {
  const [esSoat, setEsSoat] = useState<PolizaOption>('no')
  const [formData, setFormData] = useState({
    numeroPoliza: '',
    numeroAnexo: '',
    fechaExpedicion: '',
  })
  const [resultado, setResultado] = useState<typeof POLIZA_DEMO | null>(null)
  const [error, setError] = useState<string | null>(null)

  const normalizarFecha = (valor: string) => {
    const limpio = valor.trim()
    if (!limpio) return ''

    if (/^\d{2}-\d{2}-\d{4}$/.test(limpio)) {
      return limpio
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(limpio)) {
      const [anio, mes, dia] = limpio.split('-')
      return `${dia}-${mes}-${anio}`
    }

    return ''
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const numeroPoliza = formData.numeroPoliza.trim()
    const numeroAnexo = formData.numeroAnexo.trim()
    const fechaNormalizada = normalizarFecha(formData.fechaExpedicion)

    const coincidePoliza =
      numeroPoliza === POLIZA_DEMO.numeroPoliza &&
      numeroAnexo === POLIZA_DEMO.numeroAnexo &&
      fechaNormalizada === POLIZA_DEMO.fechaExpedicionInput

    if (coincidePoliza) {
      setResultado(POLIZA_DEMO)
      setError(null)
    } else {
      setResultado(null)
      setError('No se encontró información con los datos ingresados. Verifica los campos e inténtalo nuevamente.')
    }
  }

  const handleChange =
    (campo: 'numeroPoliza' | 'numeroAnexo' | 'fechaExpedicion') => (evento: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [campo]: evento.target.value,
      }))
    }

  const handleReset = () => {
    setFormData({
      numeroPoliza: '',
      numeroAnexo: '',
      fechaExpedicion: '',
    })
    setResultado(null)
    setError(null)
    setEsSoat('no')
  }

  return (
    <div className="consulta-poliza">
      <div className="consulta-poliza__container">
        <h1 className="consulta-poliza__heading">Consulta de pólizas</h1>

        <section className="consulta-poliza__card">
          <header className="consulta-poliza__card-header">Datos de la póliza</header>

          <div className="consulta-poliza__card-body">
            <form className="consulta-poliza__form" onSubmit={handleSubmit}>
              <div className="consulta-poliza__field">
                <label className="consulta-poliza__label">¿Es póliza SOAT?</label>
                <div className="consulta-poliza__toggle-group" role="radiogroup" aria-label="¿Es póliza SOAT?">
                  <label
                    className={`consulta-poliza__toggle-option ${
                      esSoat === 'si' ? 'consulta-poliza__toggle-option--checked' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="es-soat"
                      value="si"
                      checked={esSoat === 'si'}
                      onChange={() => setEsSoat('si')}
                    />
                    Sí
                  </label>
                  <label
                    className={`consulta-poliza__toggle-option ${
                      esSoat === 'no' ? 'consulta-poliza__toggle-option--checked' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="es-soat"
                      value="no"
                      checked={esSoat === 'no'}
                      onChange={() => setEsSoat('no')}
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="consulta-poliza__field">
                <label className="consulta-poliza__label" htmlFor="numero-poliza">
                  Número de póliza
                </label>
                <input
                  id="numero-poliza"
                  name="numero-poliza"
                  type="text"
                  className="consulta-poliza__input"
                  placeholder="Ingresa el número de la póliza"
                  autoComplete="off"
                  value={formData.numeroPoliza}
                  onChange={handleChange('numeroPoliza')}
                />
              </div>

              <div className="consulta-poliza__field">
                <label className="consulta-poliza__label" htmlFor="numero-anexo">
                  Número de anexo
                </label>
                <input
                  id="numero-anexo"
                  name="numero-anexo"
                  type="text"
                  className="consulta-poliza__input"
                  placeholder="Ingresa el número de anexo"
                  autoComplete="off"
                  value={formData.numeroAnexo}
                  onChange={handleChange('numeroAnexo')}
                />
              </div>

              <div className="consulta-poliza__field">
                <label className="consulta-poliza__label" htmlFor="fecha-expedicion">
                  Fecha de expedición
                </label>
                <div className="consulta-poliza__date-wrapper">
                  <input
                    id="fecha-expedicion"
                    name="fecha-expedicion"
                    type="text"
                    className="consulta-poliza__date-input"
                    placeholder="dd-mm-aaaa"
                    autoComplete="off"
                    value={formData.fechaExpedicion}
                    onChange={handleChange('fechaExpedicion')}
                  />
                  <button
                    type="button"
                    className="consulta-poliza__date-button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        fechaExpedicion: '',
                      }))
                    }
                    aria-label="Limpiar fecha de expedición"
                  >
                    X
                  </button>
                </div>
              </div>

              <button type="button" className="consulta-poliza__help-btn">
                ¿Dónde encuentro estos datos?
              </button>

              <button type="submit" className="consulta-poliza__submit">
                Consultar póliza
              </button>
            </form>

            {error && <p className="consulta-poliza__error">{error}</p>}
          </div>
        </section>

        {resultado && (
          <section className="consulta-poliza__resultado">
            <div className="consulta-poliza__resultado-card">
              <div className="consulta-poliza__resultado-header">
                <div className="consulta-poliza__resultado-logo">
                  <Image src="/logo-resultado.png" alt="Seguros del Estado" fill sizes="180px" priority />
                </div>
                <h2 className="consulta-poliza__resultado-title">Consulta de pólizas</h2>
              </div>

              <div className="consulta-poliza__resultado-grid">
                <div className="consulta-poliza__resultado-col">
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Estado:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.estado}</span>
                  </div>
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Número de póliza:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.numeroPoliza}</span>
                  </div>
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Fecha de expedición:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.fechaExpedicionTexto}</span>
                  </div>
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Asegurado:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.asegurado}</span>
                  </div>
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Inicio de vigencia:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.inicioVigenciaTexto}</span>
                  </div>
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Valor total asegurado:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.valorAsegurado}</span>
                  </div>
                </div>
                <div className="consulta-poliza__resultado-col">
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Número de anexo:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.numeroAnexo}</span>
                  </div>
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Ramo:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.ramo}</span>
                  </div>
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Tomador:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.tomador}</span>
                  </div>
                  <div className="consulta-poliza__resultado-block">
                    <span className="consulta-poliza__resultado-label">Fin vigencia:</span>
                    <span className="consulta-poliza__resultado-value">{resultado.finVigenciaTexto}</span>
                  </div>
                </div>
              </div>

              <div className="consulta-poliza__resultado-footer">
                <button type="button" className="consulta-poliza__resultado-reset" onClick={handleReset}>
                  Consultar de nuevo
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
