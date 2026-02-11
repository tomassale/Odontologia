"use client"
import HeaderLinks from "./HeaderLinks"
import { useEffect, useState } from 'react'

export default function Header() {

  const [links, setLinks] = useState([])

  useEffect(()=> {
    fetch('/json/header.json')
      .then(res => res.json())
      .then(data => {
        setLinks(data)
        console.log(data)
      })
      .catch(err => 
        console.error("Error cargando el header: ", err)
      )
  }, [])

  return (
    <header className='header'>
      <HeaderLinks links={links}/>
    </header>
  )
}