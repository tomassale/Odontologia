import type { Metadata } from "next";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Instrument_Serif, Playfair_Display } from 'next/font/google'
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Consultorio Odontológico",
  description: "Consultorio de Odontología - Atención Lunes y Miércoles de 15:30 a 20:00",
  keywords: ["Dentista", "Zona Oeste", "Tablada", "Consultorio"],
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
