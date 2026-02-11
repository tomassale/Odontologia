import type { Metadata } from "next";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Consultorio Odontológico",
  description: "Consultorio de Odontología - Atención martes y jueves de 13 a 18",
  keywords: ["Dentista", "Zona Oeste", "Tablada", "Consultorio"],
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
      <SpeedInsights/>  
    </html>
  )
}
