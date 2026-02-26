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
    </div>
  )
}