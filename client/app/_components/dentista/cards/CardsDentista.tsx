import Image from "next/image"

export default function CardsDentista() {

  const cards = [
    {id: 0, src: '/img/dentist/icons/expert.webp', alt:'icono experto', title: 'Años de experiencia', description: 'Sólida trayectoria profesional brindando diagnósticos precisos y tratamientos efectivos para tu salud bucal.'},
    {id: 1, src: '/img/dentist/icons/uba.webp', alt:'icono universidad', title: 'Recibida en UBA', description: 'Formación académica de excelencia en una de las instituciones médicas más prestigiosas del país.'},
    {id: 2, src: '/img/dentist/icons/atencion.webp', alt:'icono atencion', title: 'Atención de calidad', description: 'Priorizamos tu comodidad con un trato cálido, humano y personalizado en cada visita.'}
  ]


  
  return (
    <div className='cardsDentista'>
      {cards.map((obj) =>(
        <div key={obj.id}>
          <Image
            src={obj.src}
            alt={obj.alt}
            height={150}
            width={150}
          />
          <h3>{obj.title}</h3>
          <p>{obj.description}</p>
        </div>
      ))}
    </div>
  )
}