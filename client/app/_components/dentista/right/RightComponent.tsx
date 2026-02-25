import Image from 'next/image'

export default function RightComponent(){
  return(
    <div className='rightComponent'>
      <Image 
        src={'/img/dentist/dentist.webp'}
        height={600}
        width={500}
        alt='dentist'
        priority
      />
    </div>
  )
}