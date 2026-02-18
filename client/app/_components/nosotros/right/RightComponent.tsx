import UnorderedList from "./UnorderedList";

export default function RightComponent() {

  const servicios = [
    "Prótesis dentales: Realización de prótesis fijas y removibles.",
    "Endodoncia: Tratamientos de conducto.",
    "Periodoncia: Cuidado de las encías.",
    "Estética dental y tratamiento del bruxismo."
  ];

  const trayectoria = [
    "Desempeño en el Centro Odontológico San Justo.",
    "Atención en Unidad Sanitaria San Carlos.",
    "Experiencia en Giovinazzo Casanova.",
    "Unidad de Salud Tablada.",
    "Dictado de clases en el Centro Odontológico San Justo."
  ];

  return (
    <div className='rightComponent'>
      <p>
        Silvia Pellegrino desempeña su labor en su consultorio privado brindando atención personalizada tanto a adultos como a niños. Su principal objetivo es el cuidado integral de la salud bucal, combinando experiencia y dedicación en cada diagnóstico.
      </p>
      <h5>Servicios y Tratamientos:</h5>
      <p>
        Se realizan tratamientos de Odontología general para adultos y Odontopediatría. 
        El consultorio se especializa en la recuperación de la salud dental y la estética, abarcando:
        (Nota: No se realizan cirugías ni ortodoncia. Los casos de implantes se manejan mediante consulta por derivación).
      </p>  
      <UnorderedList item={servicios}/>
      <p>
        <h5>Trayectoria y Antecedentes:</h5>
      </p>
      <UnorderedList item={trayectoria}/>
    </div>
  )
}