export default function CotizadoresLineaPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Cotizadores en Línea</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Obtén cotizaciones instantáneas de nuestros productos de seguros de manera fácil y rápida.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Productos Disponibles para Cotización</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Seguros de Autos (Livianos y Pesados)</li>
          <li>Seguros de Vida</li>
          <li>Seguros Generales</li>
          <li>SOAT</li>
          <li>Seguros de Cumplimiento</li>
        </ul>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Proceso de Cotización</h2>
        <ol style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Selecciona el producto de tu interés</li>
          <li>Completa el formulario con la información requerida</li>
          <li>Recibe tu cotización instantánea</li>
          <li>Contacta con un asesor para más información</li>
        </ol>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Ventajas</h2>
        <ul style={{ marginLeft: '24px', lineHeight: '2' }}>
          <li>Cotizaciones instantáneas</li>
          <li>Comparación de opciones</li>
          <li>Sin compromiso</li>
          <li>Asesoría personalizada disponible</li>
        </ul>
      </div>
    </div>
  )
}

