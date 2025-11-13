import '../../globals.css'

export default function NotificacionesJudicialesPage() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
      <h1>Notificaciones Judiciales</h1>
      <div style={{ marginTop: '32px', lineHeight: '1.8' }}>
        <p>
          Información sobre el proceso de notificaciones judiciales para Seguros del Estado.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Dirección para Notificaciones</h2>
        <p>
          <strong>Dirección:</strong> Autopista Norte No 103 - 60 Piso 5<br />
          <strong>Ciudad:</strong> Bogotá D.C. - Colombia<br />
          <strong>Departamento Legal</strong>
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Proceso</h2>
        <p>
          Las notificaciones judiciales deben ser dirigidas al departamento legal de Seguros del Estado 
          en la dirección indicada.
        </p>
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Contacto</h2>
        <p>
          Para más información sobre notificaciones judiciales, por favor contacta a nuestro departamento legal 
          a través de nuestros canales oficiales.
        </p>
      </div>
    </div>
  )
}

