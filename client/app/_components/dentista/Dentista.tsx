import Image from "next/image";
import LeftComponent from "./left/LeftComponent";
import RightComponent from "./right/RightComponent";

export default function Dentista() {
  return (
    <div className='dentista'>
      <div className='dentistaDivision'>
        <LeftComponent/>
        <RightComponent/>
      </div>
      <Image
        className="fondoDentista"
        src='/img/background.webp'
        alt='Fondo imagen'
        fill
        priority
      />
    </div>
  )
}