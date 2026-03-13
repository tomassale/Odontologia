import type { Metadata } from "next";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Instrument_Serif, Playfair_Display } from 'next/font/google'
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Dra. Silvia Pellegrino | Consultorio Odontológico Tablada",
  description: "Consultorio odontológico integral en La Tablada, Zona Oeste. Brindamos atención personalizada para el cuidado de tu salud bucal. Horarios de atención: Lunes y Miércoles de 15:30 a 20:00 hs.",
  keywords: [
    "Dentista", 
    "Zona Oeste", 
    "Tablada",
    "Consultorio Odontológico",
    "Conductos",
    "Tratamiento bucal",
    "Bruxismo",
    "Periodoncia",
    "Estetica dental",
    "Implantes",
    "Protesis dentales",
    "Odontología niños",
    "Odontología adultos",
    "Dentista niños",
    "Dentista tablada",
    "Consultorio",
    "Salud Bucal",
    "Turnos dentista",
  ],
  icons: {
    icon: "/favicon.ico"
  }
}

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

// 2. Configuramos Playfair Display (Títulos)
const playfair = Playfair_Display({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="es"
      className={`${instrumentSerif.variable} ${playfair.variable}`}
    >
      <body>
        {children}
        <Footer/>
      </body>
      <SpeedInsights/>
    </html>
  )
}
