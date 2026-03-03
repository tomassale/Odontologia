"use client"
import { useInView } from "react-intersection-observer";
import UnorderedList from "./UnorderedList";

export default function RightComponent() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const servicios = [
    "Prótesis dentales: Realización de prótesis fijas y removibles.",
    "Endodoncia: Tratamientos de conducto.",
    "Periodoncia: Cuidado de las encías.",
    "Estética dental y tratamiento del bruxismo."
  ];

  const trayectoria = [
    "Desempeño en el Centro Odontológico San Justo.",
    "Atención en Unidad Sanitaria San Carlos.",
    "Experiencia en Posta Sanitaria Dr. Giovinazzo Casanova.",
    "Unidad de Salud La Tablada.",
    "Dictado de clases en el Centro Odontológico San Justo."
  ];

  return (
    <div 
    className={`rightComponent ${inView ? 'inView' : ''}`}
      ref={ref}
    >
      <p className='descripcion'>
        Silvia Pellegrino desempeña su labor en su consultorio privado brindando atención personalizada tanto a adultos como a niños. Su principal objetivo es el cuidado integral de la salud bucal, combinando experiencia y dedicación en cada diagnóstico.
      </p>
      <h4>Servicios y Tratamientos:</h4>
      <p className='tratamiento'>
        Se realizan tratamientos de Odontología general para adultos y Odontopediatría. 
        El consultorio se especializa en la recuperación de la salud dental y la estética, abarcando:
        (Nota: No se realiza ortodoncia. Los casos de implantes y cirugías se manejan mediante consulta por derivación).
      </p>  
      <UnorderedList item={servicios}/>
      <h4>Trayectoria y Antecedentes:</h4>
      <UnorderedList item={trayectoria}/>
    </div>
  )
}