import { useInView } from "react-intersection-observer";

interface Contacto{
  id: number,
  subtitle: string,
  item: string,
  extra?: string
}

interface ContactoProps{
  readonly data: Contacto[]
}

export default function ContactoItem({data}: ContactoProps) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      className={`datos ${inView ? 'inView' : ''}`}
      ref={ref}
    >
    {data.map((obj)=>(
      <div key={obj.id} className='contactoItem'>
        <h3 >{obj.subtitle}</h3>
        <ul>
          <li>{obj.item}</li>
          {obj.extra? <li>{obj.extra}</li> : null}
        </ul>
      </div>
      ))}
      <p>
        <span>Nota</span>: Los horarios de consulta telefónica quedan 
        sujetos a los horarios de atención del consultorio
      </p>
    </div>
  )
}