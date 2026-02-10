import Link from 'next/link'

export default function Footer() {

  const anio: number = new Date().getFullYear()

  return (
    <footer className='footer'>
        <Link href="/Terms">
          Terminos y condiciones © {anio}. All rights reserved.
        </Link>
    </footer>
  )
}