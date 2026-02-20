"use client"
import { useEffect, useState } from 'react'
import { LegalSection, LegalDataProps } from './LegalSection';
import Footer from '../_components/footer/Footer';

const LegalPage: React.FC = () => {
  
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch('/json/tyc.json')
      .then(res => res.json())
      .then(res => setItems(res))
  },[])

  const data: LegalDataProps[] = items as LegalDataProps[];

  return (
    <div className="terms-container">
      <div className="terms-content">
        
        <header className="terms-header">
          <h1>Términos y Condiciones y Política de Privacidad</h1>
          <p className="last-updated">
            <strong>Última actualización:</strong> 20 de Febrero de 2026
          </p>
        </header>

        {data.map((section) => (
          <LegalSection key={section.id} data={section} />
        ))}
        
      </div>
      <Footer/>
    </div>
  );
};

export default LegalPage;