import '../globals.css'

export default function PortalPagosPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Portal de Pagos</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Realiza el pago de tus primas de seguros de manera segura y rápida a través de nuestro portal de pagos.
        </p>
        <div className="card" style={{ marginTop: '32px', maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '24px' }}>Pago de Primas</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label htmlFor="numero-poliza-pago" style={{ display: 'block', marginBottom: '8px' }}>
                Número de Póliza
              </label>
              <input
                type="text"
                id="numero-poliza-pago"
                name="numero-poliza-pago"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
                placeholder="Ingresa el número de tu póliza"
              />
            </div>
            <div>
              <label htmlFor="monto" style={{ display: 'block', marginBottom: '8px' }}>
                Monto a Pagar
              </label>
              <input
                type="number"
                id="monto"
                name="monto"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
                placeholder="Ingresa el monto"
              />
            </div>
            <button type="submit" className="btn" style={{ marginTop: '8px' }}>
              Continuar con el Pago
            </button>
          </form>
        </div>
        <div style={{ marginTop: '32px' }}>
          <h2>Métodos de Pago Aceptados</h2>
          <ul style={{ marginLeft: '24px', lineHeight: '2', marginTop: '16px' }}>
            <li>Tarjetas de crédito y débito</li>
            <li>Transferencia bancaria</li>
            <li>PSE (Pagos Seguros en Línea)</li>
            <li>Pago en oficinas</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

