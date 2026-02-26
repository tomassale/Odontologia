import Image from 'next/image'

export default function RightComponent(){
  return(
    <div className='rightComponent'>
      <Image 
        src={'/img/dentist/dentist.webp'}
        height={920}
        width={700}
        alt='dentist'
        priority
      />
    </div>
  )
}