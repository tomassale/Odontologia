"use client"
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function LeftComponent() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div 
      ref={ref}
      className={`leftComponent ${inView ? 'inView' : ''}`}
    >
      <Image
        src={'/img/us/us.webp'}
        alt='Imagen consultorios'
        height={700}
        width={700}
      />
    </div>
  )
}