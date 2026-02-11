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
  return (
    <>
    {data.map((obj)=>(
      <div key={obj.id} className='contactoitem'>
        <h3 >{obj.subtitle}</h3>
        <ul>
          <li>{obj.item}</li>
          {obj.extra? <li>{obj.extra}</li> : null}
        </ul>
      </div>
      ))}
    </>
  )
}