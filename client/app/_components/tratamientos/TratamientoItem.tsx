import Image from "next/image";

interface Tratamiento {
  id: number,
  src: string,
  alt: string,
  title: string
}

interface TratamientoProps{
  readonly data: Tratamiento[];
}

export default function TratamientoItem({data} : TratamientoProps) {
  return (
    <div className='tratamientoitem'>
      {data.map((img)=>(
        <div key={img.id}>
          <Image 
            src={img.src}
            height={150}
            width={150}
            alt={img.alt}
          />
          <p>{img.title}</p>
        </div>
      ))}
    </div>
  )
}