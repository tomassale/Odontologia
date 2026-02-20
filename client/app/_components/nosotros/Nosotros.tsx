import LeftComponent from "./left/LeftComponent";
import RightComponent from "./right/RightComponent";

export default function Nosotros() {
  return (
    <div className='nosotros'>
      <h1>Nosotros</h1>
      <div className='nosotrosDivision'>
        <LeftComponent/>
        <RightComponent/>
      </div>
    </div>
  )
}