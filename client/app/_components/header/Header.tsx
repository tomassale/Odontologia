"use client"
import HeaderLinks from "./HeaderLinks"
import { useEffect, useState } from 'react'

export default function Header() {

  const [headerData, setHeaderData] = useState({ links: []})

  useEffect(()=> {
    fetch('/json/header.json')
      .then(res => res.json())
      .then(data => setHeaderData(data))
      .catch(err => 
        console.error("Error cargando el header: ", err)
      )
  }, [])

  const { links } = headerData;

  return (
    <header className='header'>
      <HeaderLinks links={links}/>
    </header>
  )
}