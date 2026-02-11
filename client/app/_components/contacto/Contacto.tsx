"use client"
import ContactMap from "./ContactMap";
import ContactoItem from "./ContactoItem";
import { useEffect, useState } from "react";

export default function Contacto() {

  const [item, setItem] = useState([])

  useEffect(()=>{
    fetch('/json/contacto.json')
      .then(res => res.json())
      .then(res => setItem(res))
  },[])

  return (
    <div className='contacto'>
      <h1>Contacto</h1>
      <ContactoItem data={item}/>
      <ContactMap/>
    </div>
  )
}