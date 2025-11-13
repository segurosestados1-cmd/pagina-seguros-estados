import '../../globals.css'

export default function OficinasPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Nuestras Oficinas</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <h2 style={{ marginBottom: '16px' }}>Oficina Principal</h2>
        <p>
          <strong>Dirección:</strong> Autopista Norte No 103 - 60 Piso 5<br />
          <strong>Ciudad:</strong> Bogotá D.C. - Colombia<br />
          <strong>Teléfono:</strong> 601-4434818
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Horarios de Atención</h2>
        <p>
          Lunes a Viernes: 8:00 AM - 6:00 PM<br />
          Sábados: 9:00 AM - 1:00 PM
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Oficinas Regionales</h2>
        <p>
          Contamos con presencia en diferentes ciudades del país. Para información sobre oficinas 
          en otras ciudades, por favor contáctanos.
        </p>
      </div>
    </div>
  )
}

