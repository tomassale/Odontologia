export default function LeftComponent(){
  const year = new Date().getFullYear() - 1981;

  return(
    <div className='leftComponent'> 
      <h1>Dra. Silvia Pellegrino</h1>
      <p>
        Con más de {year} años de trayectoria dedicada a la salud bucal, la Dra. Pellegrino ha transformado la 
        sonrisa y la calidad de vida de miles de pacientes. El enfoque combina una sólida formación clínica 
        con una atención personalizada, priorizando siempre la comodidad y la tranquilidad en consulta. Especialista 
        en odontología integral, basando su práctica en métodos de eficacia comprobada y años de oficio para garantizar resultados 
        duraderos y naturales.
      </p>
      <a href="tel:46553353">
        Solicitar Turno
      </a>
    </div>
  )
}