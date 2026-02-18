"use client"
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// ... (tus interfaces se mantienen igual)
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  })

  return (
    <div 
      ref={ref}
      className={`tratamientoItems ${inView ? 'inView' : ''}`}
    >
      {data.map((img)=>(
        <div className='item' key={img.id} >
          <Image 
            src={img.src}
            height={50}
            width={50}
            alt={img.alt}
          />
          <p>{img.title}</p>
        </div>
      ))}
    </div>
  )
}