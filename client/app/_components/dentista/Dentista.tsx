import LeftComponent from "./left/LeftComponent";
import RightComponent from "./right/RightComponent";

export default function Dentista() {
  return (
    <div className='dentista'>
      <h1>Dra. Silvia Pellegrino</h1>
      <LeftComponent/>
      <RightComponent/>
    </div>
  )
}