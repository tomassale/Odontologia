import Image from 'next/image'
import LeftComponent from './left/LeftComponent'
import RightComponent from './right/RightComponent'
import CardsDentista from './cards/CardsDentista'

export default function Dentista() {
  return (
    <div className='dentista'>
      <div className='dentistaDivision'>
        <LeftComponent/>
        <RightComponent/>
      </div>
      <CardsDentista/>
      <Image
        className='fondoDentista'
        src='/img/backgrounds/backgroundDentist.webp'
        alt='Fondo imagen'
        fill
        priority
      />
    </div>
  )
}