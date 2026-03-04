import { useInView } from "react-intersection-observer";
export default function ContactMap() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <iframe 
      title="Ubicación Consultorio"
      ref={ref}
      className={`map ${inView ? 'inView' : ''}`}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7309790915087!2d-58.53040848780947!3d-34.68673857281178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8c65eebf0a3%3A0xaf5de9bb35b0baf8!2sCatriel%204929%2C%20B1766FLK%20La%20Tablada%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1771205783267!5m2!1ses-419!2sar"
      loading="lazy"
    />
  )
}