import type { Metadata } from "next";
import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Consultorio Odontológico",
  description: "Consultorio de Odontología - Atención Lunes y Miércoles de 15:30 a 20:00",
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
        <Footer/>
      </body>
      <SpeedInsights/>
    </html>
  )
}
